import { NextResponse } from 'next/server'
import { createHmac } from 'crypto'
import { upsertWhatsAppCustomer } from '@/lib/db'

// ─── Meta webhook verification (GET) ─────────────────────────────────────────
// Meta calls this once when you configure the webhook in the Developer Console.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  const verifyToken = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN
  if (!verifyToken) {
    return new Response('Webhook verify token not configured', { status: 500 })
  }

  if (mode === 'subscribe' && token === verifyToken) {
    return new Response(challenge ?? '', { status: 200 })
  }

  return new Response('Forbidden', { status: 403 })
}

// ─── Incoming message handler (POST) ─────────────────────────────────────────
// Meta sends this for every event on your WhatsApp Business number.
export async function POST(request: Request) {
  const rawBody = await request.text()

  // Verify the payload came from Meta using HMAC-SHA256 signature
  const appSecret = process.env.WHATSAPP_APP_SECRET
  if (appSecret) {
    const signature = request.headers.get('x-hub-signature-256') ?? ''
    const expected = 'sha256=' + createHmac('sha256', appSecret).update(rawBody).digest('hex')
    if (signature !== expected) {
      return new Response('Invalid signature', { status: 403 })
    }
  }

  let body: WhatsAppWebhookPayload
  try {
    body = JSON.parse(rawBody)
  } catch {
    return new Response('Bad JSON', { status: 400 })
  }

  // Walk the nested Meta payload structure
  for (const entry of body.entry ?? []) {
    for (const change of entry.changes ?? []) {
      if (change.field !== 'messages') continue
      const value = change.value

      const messages = value.messages ?? []
      const contacts = value.contacts ?? []

      for (const message of messages) {
        // Only process inbound messages (from customers to us)
        if (message.type === 'text' || message.type === 'audio' || message.type) {
          const phone = message.from
          const contact = contacts.find((c) => c.wa_id === phone)
          const name = contact?.profile?.name ?? ''

          // Convert Unix timestamp to YYYY-MM-DD
          const jobDate = new Date(Number(message.timestamp) * 1000)
            .toISOString()
            .slice(0, 10)

          try {
            await upsertWhatsAppCustomer({ phone, name, job_date: jobDate })
          } catch (err) {
            // Don't let a DB error break the webhook acknowledgement
            console.error('[webhook] upsert failed', err)
          }
        }
      }
    }
  }

  // Meta requires a 200 response within 20 seconds or it retries
  return NextResponse.json({ ok: true })
}

// ─── Types ────────────────────────────────────────────────────────────────────

type WhatsAppWebhookPayload = {
  object: string
  entry: Array<{
    id: string
    changes: Array<{
      field: string
      value: {
        messaging_product: string
        metadata: { display_phone_number: string; phone_number_id: string }
        contacts?: Array<{ profile: { name: string }; wa_id: string }>
        messages?: Array<{
          from: string
          id: string
          timestamp: string
          type: string
        }>
      }
    }>
  }>
}

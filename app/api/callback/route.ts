import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { buildCallbackNotificationEmail, buildCustomerThankYouEmail } from '@/lib/emailTemplates'

const contactEmail = process.env.CONTACT_EMAIL || 'enquiries@srlrecovery.com'
const FROM = 'SRL Recovery <noreply@srlrecovery.com>'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not set')
  return new Resend(key)
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const name = String(data.name ?? '').trim()
    const phone = String(data.phone ?? '').trim()
    const vehicle = String(data.vehicle ?? '').trim()
    const message = String(data.message ?? '').trim()
    const email = String(data.email ?? '').trim()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }
    if (name.length > 100 || phone.length > 30 || vehicle.length > 120 || message.length > 1000 || email.length > 200) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 })
    }
    if (email && !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const resend = getResend()

    const { error } = await resend.emails.send({
      from: FROM,
      to: [contactEmail],
      replyTo: email || undefined,
      subject: `Callback request: ${name} (${phone})`,
      html: buildCallbackNotificationEmail({ name, phone, vehicle, message, email }),
    })

    if (error) {
      console.error('Resend error', error)
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }

    if (email) {
      try {
        await resend.emails.send({
          from: FROM,
          to: [email],
          subject: 'Thanks for choosing SRL Recovery',
          html: buildCustomerThankYouEmail({ name }),
        })
      } catch (err) {
        // Non-fatal — the business notification above is the important one
        console.warn('Customer thank-you email failed', err)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Callback error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

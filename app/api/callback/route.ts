import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const contactEmail = process.env.CONTACT_EMAIL || 'enquiries@srlrecovery.com'

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not set')
  return new Resend(key)
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const name = String(data.name ?? '').trim()
    const phone = String(data.phone ?? '').trim()
    const vehicle = String(data.vehicle ?? '').trim()
    const message = String(data.message ?? '').trim()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }
    if (name.length > 100 || phone.length > 30 || vehicle.length > 120 || message.length > 1000) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 })
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;color:#111;border:1px solid #eee;border-radius:8px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#cc1493,#1f93f0);padding:24px;color:#fff;">
          <h1 style="margin:0;font-size:22px;">New Callback Request</h1>
          <p style="margin:8px 0 0;opacity:0.9;font-size:14px;">SRL Recovery website</p>
        </div>
        <div style="padding:24px;line-height:1.6;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone:</strong> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p>
          ${vehicle ? `<p><strong>Vehicle:</strong> ${escapeHtml(vehicle)}</p>` : ''}
          ${message ? `<p><strong>Details:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>` : ''}
          <hr style="border:0;border-top:1px solid #eee;margin:24px 0;">
          <p style="font-size:12px;color:#666;">Submitted from the SRL Recovery callback form.</p>
        </div>
      </div>
    `

    const resend = getResend()
    const { error } = await resend.emails.send({
      from: 'SRL Recovery Website <noreply@srlrecovery.com>',
      to: [contactEmail],
      subject: `Callback request: ${name} (${phone})`,
      html,
    })

    if (error) {
      console.error('Resend error', error)
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Callback error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
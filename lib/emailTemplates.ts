export function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const LOGO_URL = 'https://srlrecovery.com/images/logo.png'

function emailShell(opts: { eyebrow: string; heading: string; bodyHtml: string; footerHtml?: string }) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f5f7;padding:32px 16px;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #eee;">
        <div style="background:linear-gradient(135deg,#cc1493,#1f93f0);padding:28px 24px;text-align:center;">
          <img src="${LOGO_URL}" alt="SRL Recovery" width="56" height="56" style="display:block;margin:0 auto 12px;border-radius:10px;" />
          <p style="margin:0 0 4px;color:rgba(255,255,255,0.85);font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">${opts.eyebrow}</p>
          <h1 style="margin:0;font-size:22px;color:#fff;font-weight:700;">${opts.heading}</h1>
        </div>
        <div style="padding:28px 24px;">
          ${opts.bodyHtml}
        </div>
        <div style="padding:16px 24px;background:#fafafa;border-top:1px solid #f0f0f0;text-align:center;">
          ${opts.footerHtml ?? `<p style="margin:0;font-size:12px;color:#999;">SRL Recovery &middot; Glasgow's 24/7 Breakdown &amp; Recovery Service</p>`}
        </div>
      </div>
    </div>
  `
}

function detailRow(label: string, valueHtml: string, isLast = false) {
  return `
    <tr>
      <td style="padding:10px 0;${isLast ? '' : 'border-bottom:1px solid #f0f0f0;'}color:#666;font-size:13px;width:90px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;${isLast ? '' : 'border-bottom:1px solid #f0f0f0;'}color:#111;font-size:15px;">${valueHtml}</td>
    </tr>
  `
}

export function buildCallbackNotificationEmail(data: {
  name: string
  phone: string
  vehicle: string
  message: string
  email: string
}) {
  const fields: Array<{ label: string; valueHtml: string }> = [
    { label: 'Name', valueHtml: `<strong>${escapeHtml(data.name)}</strong>` },
    {
      label: 'Phone',
      valueHtml: `<a href="tel:${escapeHtml(data.phone)}" style="color:#1f93f0;text-decoration:none;font-weight:600;">${escapeHtml(data.phone)}</a>`,
    },
  ]
  if (data.email) {
    fields.push({
      label: 'Email',
      valueHtml: `<a href="mailto:${escapeHtml(data.email)}" style="color:#1f93f0;text-decoration:none;">${escapeHtml(data.email)}</a>`,
    })
  }
  if (data.vehicle) fields.push({ label: 'Vehicle', valueHtml: escapeHtml(data.vehicle) })
  if (data.message) {
    fields.push({ label: 'Details', valueHtml: escapeHtml(data.message).replace(/\n/g, '<br>') })
  }

  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
      ${fields.map((f, i) => detailRow(f.label, f.valueHtml, i === fields.length - 1)).join('')}
    </table>
    <div style="margin-top:24px;text-align:center;">
      <a href="tel:${escapeHtml(data.phone)}" style="display:inline-block;background:linear-gradient(135deg,#cc1493,#1f93f0);color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 28px;border-radius:8px;">Call ${escapeHtml(data.name.split(' ')[0] || 'them')} back</a>
    </div>
  `

  return emailShell({
    eyebrow: 'SRL Recovery website',
    heading: 'New Callback Request',
    bodyHtml,
    footerHtml: `<p style="margin:0;font-size:12px;color:#999;">Submitted from the SRL Recovery website callback form.</p>`,
  })
}

export function buildCustomerThankYouEmail(data: { name: string }) {
  const firstName = escapeHtml(data.name.split(' ')[0] || data.name)
  const bodyHtml = `
    <p style="margin:0 0 16px;color:#111;font-size:16px;line-height:1.6;">Hi ${firstName},</p>
    <p style="margin:0 0 16px;color:#333;font-size:15px;line-height:1.6;">
      Thanks for choosing SRL Recovery. We've received your callback request and
      one of the team will be in touch <strong>shortly</strong>.
    </p>
    <p style="margin:0 0 24px;color:#333;font-size:15px;line-height:1.6;">
      If your situation is urgent, don't wait for our call. You can reach us
      directly any time, day or night.
    </p>
    <div style="text-align:center;">
      <a href="tel:+441698700970" style="display:inline-block;background:linear-gradient(135deg,#cc1493,#1f93f0);color:#fff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 28px;border-radius:8px;">Call 01698 700970</a>
    </div>
  `

  return emailShell({
    eyebrow: 'Thanks for getting in touch',
    heading: "We've Got Your Request",
    bodyHtml,
  })
}

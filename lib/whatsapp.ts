export type SendResult = {
  phone: string
  ok: boolean
  error?: string
}

export async function sendReviewTemplate(
  phone: string,
  reviewLink: string
): Promise<SendResult> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID

  if (!token || !phoneNumberId) {
    return { phone, ok: false, error: 'WhatsApp API not configured (missing env vars)' }
  }

  // Normalise UK mobile: 07xxx -> 447xxx, strip spaces/dashes
  const normalised = phone
    .replace(/[\s\-().]/g, '')
    .replace(/^\+/, '')
    .replace(/^0/, '44')

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: normalised,
          type: 'template',
          template: {
            name: 'srl_review_request',
            language: { code: 'en_GB' },
            components: [
              {
                type: 'body',
                parameters: [{ type: 'text', text: reviewLink }],
              },
            ],
          },
        }),
      }
    )

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      const msg = (body as { error?: { message?: string } }).error?.message ?? `HTTP ${res.status}`
      return { phone, ok: false, error: msg }
    }

    return { phone, ok: true }
  } catch (err) {
    return { phone, ok: false, error: err instanceof Error ? err.message : 'Network error' }
  }
}

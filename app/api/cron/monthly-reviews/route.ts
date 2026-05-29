import { NextResponse } from 'next/server'
import { getCustomersByMonth } from '@/lib/db'
import { sendReviewTemplate, type SendResult } from '@/lib/whatsapp'

// Called automatically by Vercel Cron on the 1st of every month at 10:00 AM UTC.
// Vercel passes the CRON_SECRET header to authenticate the request.
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const month = getPreviousMonth()

  const reviewLink =
    process.env.WHATSAPP_REVIEW_LINK ??
    'https://www.google.com/search?q=SRL+recovery+24%2F7+breakdown+recovery+Glasgow'

  const customers = await getCustomersByMonth(month)

  if (customers.length === 0) {
    console.log(`[monthly-reviews] No customers found for ${month}`)
    return NextResponse.json({ ok: true, sent: 0, failed: 0, month })
  }

  const results: SendResult[] = []
  for (const customer of customers) {
    const result = await sendReviewTemplate(customer.phone, reviewLink)
    results.push(result)
    await sleep(200)
  }

  const sent = results.filter((r) => r.ok).length
  const failed = results.filter((r) => !r.ok).length

  console.log(`[monthly-reviews] ${month}: sent=${sent} failed=${failed}`)

  return NextResponse.json({ ok: true, sent, failed, month })
}

function getPreviousMonth(): string {
  const d = new Date()
  d.setDate(1)
  d.setMonth(d.getMonth() - 1)
  return d.toISOString().slice(0, 7)
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

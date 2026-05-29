import { NextResponse } from 'next/server'
import { getCustomersByMonth } from '@/lib/db'
import { sendReviewTemplate, type SendResult } from '@/lib/whatsapp'
import { isAdminAuthenticated } from '@/lib/auth'

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => ({})) as { month?: string }

  // Default to last month if no month provided
  const month = body.month ?? getPreviousMonth()

  const reviewLink =
    process.env.WHATSAPP_REVIEW_LINK ??
    'https://www.google.com/search?q=SRL+recovery+24%2F7+breakdown+recovery+Glasgow'

  const customers = await getCustomersByMonth(month)

  if (customers.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, failed: 0, month, results: [] })
  }

  const results: SendResult[] = []
  for (const customer of customers) {
    const result = await sendReviewTemplate(customer.phone, reviewLink)
    results.push(result)
    // Small delay to stay within Meta rate limits
    await sleep(200)
  }

  const sent = results.filter((r) => r.ok).length
  const failed = results.filter((r) => !r.ok).length

  return NextResponse.json({ ok: true, sent, failed, month, results })
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

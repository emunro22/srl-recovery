import { NextResponse } from 'next/server'
import { getCustomers, addCustomer } from '@/lib/db'
import { isAdminAuthenticated } from '@/lib/auth'

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const customers = await getCustomers()
    return NextResponse.json({ customers })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const body = await request.json()
    const { name = '', phone, job_date, notes } = body as {
      name?: string
      phone: string
      job_date: string
      notes?: string
    }
    if (!phone?.trim()) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 })
    }
    if (!job_date) {
      return NextResponse.json({ error: 'Job date is required' }, { status: 400 })
    }
    const customer = await addCustomer({ name: name.trim(), phone: phone.trim(), job_date, notes })
    return NextResponse.json({ customer })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

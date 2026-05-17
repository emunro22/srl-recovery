import { NextResponse } from 'next/server'
import { checkAdminPassword, setAdminCookie } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { password } = await req.json()
    if (typeof password !== 'string') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    if (!checkAdminPassword(password)) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
    }
    await setAdminCookie()
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
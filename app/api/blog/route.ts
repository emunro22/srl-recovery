import { NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/db'

export async function GET() {
  try {
    const posts = await getBlogPosts(true)
    return NextResponse.json({ posts })
  } catch (err) {
    console.error('GET public blog posts error', err)
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 })
  }
}

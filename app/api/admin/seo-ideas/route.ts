import { NextResponse } from 'next/server'
import { addSeoIdea, getSeoIdeas } from '@/lib/db'
import { isAdminAuthenticated } from '@/lib/auth'

export async function GET() {
  try {
    const ideas = await getSeoIdeas()
    return NextResponse.json({ ideas })
  } catch (err) {
    console.error('GET seo-ideas error', err)
    return NextResponse.json({ error: 'Failed to load ideas' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { title, description, priority, tag } = await req.json()

    if (!title || typeof title !== 'string' || !title.trim()) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 })
    }

    const allowedPriorities = ['High', 'Medium', 'Low']
    const idea = await addSeoIdea({
      title: title.trim().slice(0, 140),
      description: (description || '').toString().trim().slice(0, 1000),
      priority: allowedPriorities.includes(priority) ? priority : 'Medium',
      tag: (tag || '').toString().trim().slice(0, 40),
    })

    return NextResponse.json({ idea }, { status: 201 })
  } catch (err) {
    console.error('POST seo-ideas error', err)
    return NextResponse.json({ error: 'Save failed' }, { status: 500 })
  }
}

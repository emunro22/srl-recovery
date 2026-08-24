import { NextResponse } from 'next/server'
import { deleteSeoIdea, updateSeoIdea } from '@/lib/db'
import { isAdminAuthenticated } from '@/lib/auth'

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id: idStr } = await params
  const id = Number(idStr)
  if (!Number.isInteger(id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  }

  try {
    const body = await req.json()
    const updated = await updateSeoIdea(id, {
      done: body.done !== undefined ? Boolean(body.done) : undefined,
      title: body.title,
      description: body.description,
      priority: body.priority,
      tag: body.tag,
    })

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json({ idea: updated })
  } catch (err) {
    console.error('PATCH seo-idea error', err)
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id: idStr } = await params
  const id = Number(idStr)
  if (!Number.isInteger(id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 })
  }

  try {
    const deleted = await deleteSeoIdea(id)
    if (!deleted) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('DELETE seo-idea error', err)
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
  }
}

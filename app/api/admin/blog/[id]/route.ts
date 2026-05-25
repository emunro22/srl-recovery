import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { del } from '@vercel/blob'
import { deleteBlogPost, updateBlogPost } from '@/lib/db'
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
    const updated = await updateBlogPost(id, {
      published: body.published !== undefined ? Boolean(body.published) : undefined,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      cover_image_url: body.cover_image_url,
      cover_image_path: body.cover_image_path,
    })

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    revalidatePath('/blog')
    revalidatePath(`/blog/${updated.slug}`)

    return NextResponse.json({ post: updated })
  } catch (err) {
    console.error('PATCH blog post error', err)
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
    const deleted = await deleteBlogPost(id)
    if (!deleted) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    if (deleted.cover_image_url && deleted.cover_image_path) {
      try {
        await del(deleted.cover_image_url)
      } catch (e) {
        console.warn('Blob delete failed (non-fatal)', e)
      }
    }

    revalidatePath('/blog')

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('DELETE blog post error', err)
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
  }
}

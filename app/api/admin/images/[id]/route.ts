import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { del } from '@vercel/blob'
import { deleteGalleryImage } from '@/lib/db'
import { isAdminAuthenticated } from '@/lib/auth'

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
    const deleted = await deleteGalleryImage(id)
    if (!deleted) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    if (deleted.blob_path) {
      try {
        await del(deleted.url)
      } catch (e) {
        console.warn('Blob delete failed (non-fatal)', e)
      }
    }

    revalidatePath('/work')
    revalidatePath('/')

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('DELETE image error', err)
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
  }
}
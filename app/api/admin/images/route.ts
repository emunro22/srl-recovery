import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { addGalleryImage, getGalleryImages } from '@/lib/db'
import { isAdminAuthenticated } from '@/lib/auth'

export async function GET() {
  try {
    const images = await getGalleryImages()
    return NextResponse.json({ images })
  } catch (err) {
    console.error('GET images error', err)
    return NextResponse.json({ error: 'Failed to load images' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const formData = await req.formData()
    const file = formData.get('file') as File | null
    const title = (formData.get('title') as string | null) ?? 'Recovery Job'
    const tag = (formData.get('tag') as string | null) ?? 'Glasgow'

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const allowed = ['image/jpeg', 'image/png', 'image/webp']
    if (!allowed.includes(file.type)) {
      return NextResponse.json({ error: 'Only JPEG, PNG, or WebP allowed' }, { status: 400 })
    }

    if (file.size > 8 * 1024 * 1024) {
      return NextResponse.json({ error: 'Image too large (max 8MB)' }, { status: 400 })
    }

    const ext = file.type === 'image/png' ? 'png' : file.type === 'image/webp' ? 'webp' : 'jpg'
    const safeName = `gallery/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

    const blob = await put(safeName, file, {
      access: 'public',
      contentType: file.type,
    })

    const image = await addGalleryImage({
      url: blob.url,
      title: title.trim() || 'Recovery Job',
      tag: tag.trim() || 'Glasgow',
      blob_path: blob.pathname,
    })

    return NextResponse.json({ image }, { status: 201 })
  } catch (err) {
    console.error('POST images error', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
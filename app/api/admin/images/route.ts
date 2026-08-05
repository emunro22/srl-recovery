import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
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
    const { url, pathname, title, tag, mediaType, description } = await req.json()

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Missing blob URL' }, { status: 400 })
    }

    const image = await addGalleryImage({
      url,
      title: (title || 'Recovery Job').toString().trim().slice(0, 80) || 'Recovery Job',
      tag: (tag || 'Glasgow').toString().trim().slice(0, 40) || 'Glasgow',
      blob_path: pathname || null,
      media_type: mediaType === 'video' ? 'video' : 'image',
      description: description ? description.toString().trim().slice(0, 300) || undefined : undefined,
    })

    revalidatePath('/work')
    revalidatePath('/')

    return NextResponse.json({ image }, { status: 201 })
  } catch (err) {
    console.error('POST images error', err)
    return NextResponse.json({ error: 'Save failed' }, { status: 500 })
  }
}

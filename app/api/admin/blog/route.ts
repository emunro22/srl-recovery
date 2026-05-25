import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { addBlogPost, getBlogPosts } from '@/lib/db'
import { isAdminAuthenticated } from '@/lib/auth'

function slugify(title: string, suffix: string) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 60) +
    '-' +
    suffix
  )
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const posts = await getBlogPosts(false)
    return NextResponse.json({ posts })
  } catch (err) {
    console.error('GET blog posts error', err)
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { title, excerpt, content, cover_image_url, cover_image_path, category, published } =
      await req.json()

    if (!title || typeof title !== 'string') {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 })
    }

    const suffix = Math.random().toString(36).slice(2, 6)
    const slug = slugify(title.trim(), suffix)

    const post = await addBlogPost({
      title: title.trim().slice(0, 120),
      slug,
      excerpt: (excerpt || '').toString().trim().slice(0, 300),
      content: (content || '').toString().trim(),
      cover_image_url: cover_image_url || null,
      cover_image_path: cover_image_path || null,
      category: (category || 'News').toString().trim().slice(0, 60),
      published: Boolean(published),
    })

    revalidatePath('/blog')

    return NextResponse.json({ post }, { status: 201 })
  } catch (err) {
    console.error('POST blog post error', err)
    return NextResponse.json({ error: 'Save failed' }, { status: 500 })
  }
}

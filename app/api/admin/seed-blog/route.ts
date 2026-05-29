import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { addBlogPost, getBlogPosts } from '@/lib/db'
import { isAdminAuthenticated } from '@/lib/auth'
import { SEED_BLOG_POSTS } from '@/lib/blog-seed-data'

export async function POST() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const existing = await getBlogPosts()
    const existingSlugs = new Set(existing.map((p) => p.slug))

    let inserted = 0
    let skipped = 0

    for (const post of SEED_BLOG_POSTS) {
      if (existingSlugs.has(post.slug)) {
        skipped++
        continue
      }
      await addBlogPost({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        published: post.published,
        cover_image_url: null,
        cover_image_path: null,
      })
      inserted++
    }

    revalidatePath('/blog')

    return NextResponse.json({
      ok: true,
      inserted,
      skipped,
      total: SEED_BLOG_POSTS.length,
    })
  } catch (err) {
    console.error('Seed blog error', err)
    const msg = err instanceof Error ? err.message : 'Seed failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

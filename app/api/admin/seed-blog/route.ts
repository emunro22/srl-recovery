import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { addBlogPost, getBlogPosts, updateBlogPost } from '@/lib/db'
import { isAdminAuthenticated } from '@/lib/auth'
import { SEED_BLOG_POSTS } from '@/lib/blog-seed-data'

// POST /api/admin/seed-blog          inserts posts whose slug is not in the DB yet
// POST /api/admin/seed-blog?mode=sync  additionally rewrites the title, excerpt,
// content and category of posts that already exist, so edits to the seed file
// reach live posts. Cover images and published state are never touched by sync.
export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const sync = new URL(request.url).searchParams.get('mode') === 'sync'

  try {
    const existing = await getBlogPosts()
    const bySlug = new Map(existing.map((p) => [p.slug, p]))

    let inserted = 0
    let updated = 0
    let skipped = 0

    for (const post of SEED_BLOG_POSTS) {
      const current = bySlug.get(post.slug)

      if (!current) {
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
        continue
      }

      if (!sync) {
        skipped++
        continue
      }

      await updateBlogPost(current.id, {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
      })
      updated++
      revalidatePath(`/blog/${post.slug}`)
    }

    revalidatePath('/blog')

    return NextResponse.json({
      ok: true,
      mode: sync ? 'sync' : 'insert-only',
      inserted,
      updated,
      skipped,
      total: SEED_BLOG_POSTS.length,
    })
  } catch (err) {
    console.error('Seed blog error', err)
    const msg = err instanceof Error ? err.message : 'Seed failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

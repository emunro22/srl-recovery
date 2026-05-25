import { neon, type NeonQueryFunction } from '@neondatabase/serverless'

let _sql: NeonQueryFunction<false, false> | null = null

function getSql() {
  if (_sql) return _sql
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error(
      'DATABASE_URL is not set. Add a Neon Postgres database in Vercel → Storage.'
    )
  }
  _sql = neon(url)
  return _sql
}

// Proxy so `sql` works at runtime but doesn't blow up at import time
export const sql: NeonQueryFunction<false, false> = new Proxy(
  (() => {}) as unknown as NeonQueryFunction<false, false>,
  {
    apply(_target, _thisArg, args) {
      // @ts-expect-error tagged template forwarding
      return getSql()(...args)
    },
  }
)

export type GalleryImage = {
  id: number
  url: string
  title: string
  tag: string
  blob_path: string | null
  created_at: string
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const rows = (await sql`
    SELECT id, url, title, tag, blob_path, created_at
    FROM gallery_images
    ORDER BY created_at DESC
  `) as GalleryImage[]
  return rows
}

export async function addGalleryImage(data: {
  url: string
  title: string
  tag: string
  blob_path?: string
}) {
  const rows = (await sql`
    INSERT INTO gallery_images (url, title, tag, blob_path)
    VALUES (${data.url}, ${data.title}, ${data.tag}, ${data.blob_path ?? null})
    RETURNING id, url, title, tag, blob_path, created_at
  `) as GalleryImage[]
  return rows[0]
}

export async function deleteGalleryImage(id: number): Promise<GalleryImage | null> {
  const rows = (await sql`
    DELETE FROM gallery_images WHERE id = ${id}
    RETURNING id, url, title, tag, blob_path, created_at
  `) as GalleryImage[]
  return rows[0] ?? null
}

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image_url: string | null
  cover_image_path: string | null
  category: string
  published: boolean
  created_at: string
  updated_at: string
}

let _blogTableReady: Promise<void> | null = null

async function ensureBlogTable() {
  if (!_blogTableReady) {
    _blogTableReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS blog_posts (
          id            SERIAL PRIMARY KEY,
          title         TEXT NOT NULL,
          slug          TEXT NOT NULL UNIQUE,
          excerpt       TEXT NOT NULL DEFAULT '',
          content       TEXT NOT NULL DEFAULT '',
          cover_image_url  TEXT,
          cover_image_path TEXT,
          category      TEXT NOT NULL DEFAULT 'News',
          published     BOOLEAN NOT NULL DEFAULT false,
          created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `
    })()
  }
  return _blogTableReady
}

export async function getBlogPosts(publishedOnly = false): Promise<BlogPost[]> {
  await ensureBlogTable()
  const rows = publishedOnly
    ? (await sql`
        SELECT id, title, slug, excerpt, content, cover_image_url, cover_image_path, category, published, created_at, updated_at
        FROM blog_posts WHERE published = true ORDER BY created_at DESC
      `) as BlogPost[]
    : (await sql`
        SELECT id, title, slug, excerpt, content, cover_image_url, cover_image_path, category, published, created_at, updated_at
        FROM blog_posts ORDER BY created_at DESC
      `) as BlogPost[]
  return rows
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  await ensureBlogTable()
  const rows = (await sql`
    SELECT id, title, slug, excerpt, content, cover_image_url, cover_image_path, category, published, created_at, updated_at
    FROM blog_posts WHERE slug = ${slug}
  `) as BlogPost[]
  return rows[0] ?? null
}

export async function addBlogPost(data: {
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image_url?: string | null
  cover_image_path?: string | null
  category: string
  published: boolean
}): Promise<BlogPost> {
  await ensureBlogTable()
  const rows = (await sql`
    INSERT INTO blog_posts (title, slug, excerpt, content, cover_image_url, cover_image_path, category, published)
    VALUES (${data.title}, ${data.slug}, ${data.excerpt}, ${data.content}, ${data.cover_image_url ?? null}, ${data.cover_image_path ?? null}, ${data.category}, ${data.published})
    RETURNING id, title, slug, excerpt, content, cover_image_url, cover_image_path, category, published, created_at, updated_at
  `) as BlogPost[]
  return rows[0]
}

export async function updateBlogPost(id: number, data: {
  title?: string
  slug?: string
  excerpt?: string
  content?: string
  cover_image_url?: string | null
  cover_image_path?: string | null
  category?: string
  published?: boolean
}): Promise<BlogPost | null> {
  await ensureBlogTable()
  const rows = (await sql`
    UPDATE blog_posts SET
      title            = COALESCE(${data.title ?? null}, title),
      slug             = COALESCE(${data.slug ?? null}, slug),
      excerpt          = COALESCE(${data.excerpt ?? null}, excerpt),
      content          = COALESCE(${data.content ?? null}, content),
      cover_image_url  = CASE WHEN ${data.cover_image_url !== undefined} THEN ${data.cover_image_url ?? null} ELSE cover_image_url END,
      cover_image_path = CASE WHEN ${data.cover_image_path !== undefined} THEN ${data.cover_image_path ?? null} ELSE cover_image_path END,
      category         = COALESCE(${data.category ?? null}, category),
      published        = COALESCE(${data.published ?? null}, published),
      updated_at       = NOW()
    WHERE id = ${id}
    RETURNING id, title, slug, excerpt, content, cover_image_url, cover_image_path, category, published, created_at, updated_at
  `) as BlogPost[]
  return rows[0] ?? null
}

export async function deleteBlogPost(id: number): Promise<BlogPost | null> {
  await ensureBlogTable()
  const rows = (await sql`
    DELETE FROM blog_posts WHERE id = ${id}
    RETURNING id, title, slug, excerpt, content, cover_image_url, cover_image_path, category, published, created_at, updated_at
  `) as BlogPost[]
  return rows[0] ?? null
}
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
  media_type: 'image' | 'video'
  description: string | null
  source: 'manual' | 'google'
  content_hash: string | null
  protected: boolean
}

let _galleryTableReady: Promise<void> | null = null

async function ensureGalleryTable() {
  if (!_galleryTableReady) {
    _galleryTableReady = (async () => {
      // Existing table already predates this file, only add columns it might be missing.
      await sql`ALTER TABLE gallery_images ADD COLUMN IF NOT EXISTS media_type TEXT NOT NULL DEFAULT 'image'`
      await sql`ALTER TABLE gallery_images ADD COLUMN IF NOT EXISTS description TEXT`
      await sql`ALTER TABLE gallery_images ADD COLUMN IF NOT EXISTS source TEXT NOT NULL DEFAULT 'manual'`
      await sql`ALTER TABLE gallery_images ADD COLUMN IF NOT EXISTS content_hash TEXT`
      // Adding this column with DEFAULT true backfills every image that already
      // exists as protected; switching the default afterwards means every image
      // added from this point on starts out unprotected (eligible for auto-pruning).
      await sql`ALTER TABLE gallery_images ADD COLUMN IF NOT EXISTS protected BOOLEAN NOT NULL DEFAULT true`
      await sql`ALTER TABLE gallery_images ALTER COLUMN protected SET DEFAULT false`
    })()
  }
  return _galleryTableReady
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  await ensureGalleryTable()
  const rows = (await sql`
    SELECT id, url, title, tag, blob_path, created_at, media_type, description, source, content_hash, protected
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
  media_type?: 'image' | 'video'
  description?: string
  source?: 'manual' | 'google'
  content_hash?: string
}) {
  await ensureGalleryTable()
  const rows = (await sql`
    INSERT INTO gallery_images (url, title, tag, blob_path, media_type, description, source, content_hash)
    VALUES (${data.url}, ${data.title}, ${data.tag}, ${data.blob_path ?? null}, ${data.media_type ?? 'image'}, ${data.description ?? null}, ${data.source ?? 'manual'}, ${data.content_hash ?? null})
    RETURNING id, url, title, tag, blob_path, created_at, media_type, description, source, content_hash, protected
  `) as GalleryImage[]
  return rows[0]
}

// Used by the Google photo sync cron to skip photos it's already imported:
// Google's photo_reference tokens can rotate, so we dedupe on image content instead.
export async function galleryImageHashExists(hash: string): Promise<boolean> {
  await ensureGalleryTable()
  const rows = (await sql`
    SELECT 1 FROM gallery_images WHERE content_hash = ${hash} LIMIT 1
  `) as unknown[]
  return rows.length > 0
}

// Images already in the gallery when auto-pruning shipped are `protected` forever.
// Everything added after that, manual uploads included, is fair game here,
// oldest first, for the storage-cap cron to remove when Blob usage runs high.
export async function getUnprotectedGalleryImagesOldestFirst(): Promise<GalleryImage[]> {
  await ensureGalleryTable()
  const rows = (await sql`
    SELECT id, url, title, tag, blob_path, created_at, media_type, description, source, content_hash, protected
    FROM gallery_images
    WHERE protected = false
    ORDER BY created_at ASC
  `) as GalleryImage[]
  return rows
}

export async function deleteGalleryImage(id: number): Promise<GalleryImage | null> {
  await ensureGalleryTable()
  const rows = (await sql`
    DELETE FROM gallery_images WHERE id = ${id}
    RETURNING id, url, title, tag, blob_path, created_at, media_type, description
  `) as GalleryImage[]
  return rows[0] ?? null
}

// Every gallery image is editable here regardless of tag or source (manual upload
// or the Google photo sync cron). There's no per-tag or per-source restriction.
export async function updateGalleryImage(id: number, data: {
  title?: string
  tag?: string
  description?: string | null
}): Promise<GalleryImage | null> {
  await ensureGalleryTable()
  const rows = (await sql`
    UPDATE gallery_images SET
      title       = COALESCE(${data.title ?? null}, title),
      tag         = COALESCE(${data.tag ?? null}, tag),
      description = CASE WHEN ${data.description !== undefined} THEN ${data.description ?? null} ELSE description END
    WHERE id = ${id}
    RETURNING id, url, title, tag, blob_path, created_at, media_type, description, source, content_hash, protected
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

// ─── Customers ────────────────────────────────────────────────────────────────

export type Customer = {
  id: number
  name: string
  phone: string
  job_date: string
  notes: string | null
  source: 'manual' | 'whatsapp'
  created_at: string
}

let _customerTableReady: Promise<void> | null = null

async function ensureCustomerTable() {
  if (!_customerTableReady) {
    _customerTableReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS customers (
          id         SERIAL PRIMARY KEY,
          name       TEXT NOT NULL DEFAULT '',
          phone      TEXT NOT NULL,
          job_date   DATE NOT NULL DEFAULT CURRENT_DATE,
          notes      TEXT,
          source     TEXT NOT NULL DEFAULT 'manual',
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `
      // Add source column to existing tables that predate this field
      await sql`ALTER TABLE customers ADD COLUMN IF NOT EXISTS source TEXT NOT NULL DEFAULT 'manual'`
    })()
  }
  return _customerTableReady
}

export async function getCustomers(): Promise<Customer[]> {
  await ensureCustomerTable()
  const rows = (await sql`
    SELECT id, name, phone, job_date::TEXT, notes, source, created_at
    FROM customers
    ORDER BY job_date DESC, created_at DESC
  `) as Customer[]
  return rows
}

export async function addCustomer(data: {
  name: string
  phone: string
  job_date: string
  notes?: string
  source?: 'manual' | 'whatsapp'
}): Promise<Customer> {
  await ensureCustomerTable()
  const rows = (await sql`
    INSERT INTO customers (name, phone, job_date, notes, source)
    VALUES (${data.name}, ${data.phone}, ${data.job_date}, ${data.notes ?? null}, ${data.source ?? 'manual'})
    RETURNING id, name, phone, job_date::TEXT, notes, source, created_at
  `) as Customer[]
  return rows[0]
}

// Called by the WhatsApp webhook, logs a contact once per month per phone number.
// If they message again the same month, we update the name if we now have one.
export async function upsertWhatsAppCustomer(data: {
  phone: string
  name: string
  job_date: string
}): Promise<{ customer: Customer; isNew: boolean }> {
  await ensureCustomerTable()
  const month = data.job_date.slice(0, 7)

  const existing = (await sql`
    SELECT id, name, phone, job_date::TEXT, notes, source, created_at
    FROM customers
    WHERE phone = ${data.phone}
      AND TO_CHAR(job_date, 'YYYY-MM') = ${month}
    LIMIT 1
  `) as Customer[]

  if (existing.length > 0) {
    // Update name if we got one and didn't have one before
    if (data.name && !existing[0].name) {
      await sql`UPDATE customers SET name = ${data.name} WHERE id = ${existing[0].id}`
      existing[0].name = data.name
    }
    return { customer: existing[0], isNew: false }
  }

  const rows = (await sql`
    INSERT INTO customers (name, phone, job_date, source)
    VALUES (${data.name}, ${data.phone}, ${data.job_date}, 'whatsapp')
    RETURNING id, name, phone, job_date::TEXT, notes, source, created_at
  `) as Customer[]
  return { customer: rows[0], isNew: true }
}

export async function getCustomersByMonth(yearMonth: string): Promise<Customer[]> {
  await ensureCustomerTable()
  // yearMonth format: "2025-05"
  const rows = (await sql`
    SELECT id, name, phone, job_date::TEXT, notes, source, created_at
    FROM customers
    WHERE TO_CHAR(job_date, 'YYYY-MM') = ${yearMonth}
    ORDER BY job_date ASC, created_at ASC
  `) as Customer[]
  return rows
}

export async function deleteCustomer(id: number): Promise<Customer | null> {
  await ensureCustomerTable()
  const rows = (await sql`
    DELETE FROM customers WHERE id = ${id}
    RETURNING id, name, phone, job_date::TEXT, notes, source, created_at
  `) as Customer[]
  return rows[0] ?? null
}

// ─── SEO / GEO Ideas ────────────────────────────────────────────────────────

export type SeoIdea = {
  id: number
  title: string
  description: string
  priority: 'High' | 'Medium' | 'Low'
  tag: string
  done: boolean
  created_at: string
}

let _seoIdeasTableReady: Promise<void> | null = null

async function ensureSeoIdeasTable() {
  if (!_seoIdeasTableReady) {
    _seoIdeasTableReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS seo_ideas (
          id          SERIAL PRIMARY KEY,
          title       TEXT NOT NULL,
          description TEXT NOT NULL DEFAULT '',
          priority    TEXT NOT NULL DEFAULT 'Medium',
          tag         TEXT NOT NULL DEFAULT '',
          done        BOOLEAN NOT NULL DEFAULT false,
          created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `
      // Bootstraps the first pitch idea on first run only, keyed on title so
      // this stays safe to run every time the table is ensured.
      await sql`
        INSERT INTO seo_ideas (title, description, priority, tag)
        SELECT
          '12+ service areas in nav, no location pages',
          'Title tag is already well-optimized and the site clearly has investment (FAQ section, pricing table), but 111+ reviews and 12+ areas aren''t backed by dedicated location pages or schema. Strong candidate to pitch a content/local-SEO retainer.',
          'High',
          'upsell'
        WHERE NOT EXISTS (
          SELECT 1 FROM seo_ideas WHERE title = '12+ service areas in nav, no location pages'
        )
      `
    })()
  }
  return _seoIdeasTableReady
}

export async function getSeoIdeas(): Promise<SeoIdea[]> {
  await ensureSeoIdeasTable()
  const rows = (await sql`
    SELECT id, title, description, priority, tag, done, created_at
    FROM seo_ideas
    ORDER BY done ASC,
      CASE priority WHEN 'High' THEN 0 WHEN 'Medium' THEN 1 ELSE 2 END ASC,
      created_at DESC
  `) as SeoIdea[]
  return rows
}

export async function addSeoIdea(data: {
  title: string
  description?: string
  priority?: 'High' | 'Medium' | 'Low'
  tag?: string
}): Promise<SeoIdea> {
  await ensureSeoIdeasTable()
  const rows = (await sql`
    INSERT INTO seo_ideas (title, description, priority, tag)
    VALUES (${data.title}, ${data.description ?? ''}, ${data.priority ?? 'Medium'}, ${data.tag ?? ''})
    RETURNING id, title, description, priority, tag, done, created_at
  `) as SeoIdea[]
  return rows[0]
}

export async function updateSeoIdea(id: number, data: {
  title?: string
  description?: string
  priority?: 'High' | 'Medium' | 'Low'
  tag?: string
  done?: boolean
}): Promise<SeoIdea | null> {
  await ensureSeoIdeasTable()
  const rows = (await sql`
    UPDATE seo_ideas SET
      title       = COALESCE(${data.title ?? null}, title),
      description = COALESCE(${data.description ?? null}, description),
      priority    = COALESCE(${data.priority ?? null}, priority),
      tag         = COALESCE(${data.tag ?? null}, tag),
      done        = COALESCE(${data.done ?? null}, done)
    WHERE id = ${id}
    RETURNING id, title, description, priority, tag, done, created_at
  `) as SeoIdea[]
  return rows[0] ?? null
}

export async function deleteSeoIdea(id: number): Promise<SeoIdea | null> {
  await ensureSeoIdeasTable()
  const rows = (await sql`
    DELETE FROM seo_ideas WHERE id = ${id}
    RETURNING id, title, description, priority, tag, done, created_at
  `) as SeoIdea[]
  return rows[0] ?? null
}
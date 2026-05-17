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
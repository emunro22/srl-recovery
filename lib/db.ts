import { neon } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set')
}

export const sql = neon(process.env.DATABASE_URL)

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
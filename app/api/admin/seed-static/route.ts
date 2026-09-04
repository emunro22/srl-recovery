import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { sql } from '@/lib/db'
import { isAdminAuthenticated } from '@/lib/auth'

// The original 19 hand-curated static images.
// Titles updated, fixed "Tranist" -> "Transit" and made each title slightly more SEO-friendly.
const STATIC_IMAGES = [
  { url: '/images/work-1.jpg', title: 'Classic Car Recovery', tag: 'Prestige' },
  { url: '/images/work-2.jpg', title: 'Ford Transit Van Recovery', tag: '24/7' },
  { url: '/images/work-3.jpg', title: 'SUV Roadside Recovery', tag: 'Roadside' },
  { url: '/images/work-4.jpg', title: 'Late-Night Recovery', tag: '24/7' },
  { url: '/images/work-5.jpg', title: 'Car Transport Job', tag: 'Transport' },
  { url: '/images/work-6.jpg', title: 'Glasgow Saloon Recovery', tag: 'Glasgow' },
  { url: '/images/work-7.jpg', title: 'Flatbed Commercial Recovery', tag: 'Commercial' },
  { url: '/images/work-8.jpg', title: 'Performance Car Recovery', tag: 'Prestige' },
  { url: '/images/work-9.jpg', title: 'Classic Car Transport', tag: 'Prestige' },
  { url: '/images/work-10.jpg', title: 'Van Recovery Glasgow', tag: '24/7' },
  { url: '/images/work-11.jpg', title: '4x4 Recovery', tag: 'Roadside' },
  { url: '/images/work-12.jpg', title: 'Night Recovery Glasgow', tag: '24/7' },
  { url: '/images/work-13.jpg', title: 'Vehicle Transport', tag: 'Transport' },
  { url: '/images/work-14.jpg', title: 'Saloon Car Recovery', tag: 'Glasgow' },
  { url: '/images/work-15.jpg', title: 'Flatbed Recovery Truck', tag: 'Commercial' },
  { url: '/images/work-16.jpg', title: 'Prestige Car Transport', tag: 'Prestige' },
  { url: '/images/work-17.jpg', title: 'Saloon Recovery Glasgow', tag: 'Glasgow' },
  { url: '/images/work-18.jpg', title: 'Commercial Flatbed Job', tag: 'Commercial' },
  { url: '/images/work-19.jpg', title: 'Performance Recovery', tag: 'Prestige' },
]

export async function POST() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    let inserted = 0

    for (let i = 0; i < STATIC_IMAGES.length; i++) {
      const img = STATIC_IMAGES[i]
      const result = (await sql`
        INSERT INTO gallery_images (url, title, tag, blob_path, created_at)
        VALUES (
          ${img.url},
          ${img.title},
          ${img.tag},
          NULL,
          NOW() - (INTERVAL '1 day' * ${30 + i})
        )
        ON CONFLICT (url) DO NOTHING
        RETURNING id
      `) as { id: number }[]
      if (result.length > 0) inserted++
    }

    revalidatePath('/work')
    revalidatePath('/')

    return NextResponse.json({
      ok: true,
      inserted,
      total: STATIC_IMAGES.length,
      skipped: STATIC_IMAGES.length - inserted,
    })
  } catch (err) {
    console.error('Seed error', err)
    const msg = err instanceof Error ? err.message : 'Seed failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

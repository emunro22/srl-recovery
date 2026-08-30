import type { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic'
import { services } from '@/lib/services-data'
import { motorways } from '@/lib/motorways-data'
import { nearMeAngles } from '@/lib/near-me-data'
import { getBlogPosts } from '@/lib/db'

const BASE = 'https://srlrecovery.com'

const areaSlugs = [
  'paisley',
  'east-kilbride',
  'motherwell',
  'hamilton',
  'clydebank',
  'coatbridge',
  'bearsden',
  'rutherglen',
  'cambuslang',
  'bellshill',
  'dumbarton',
  'glasgow',
  'wishaw',
  'airdrie',
  'cumbernauld',
  'kirkintilloch',
  'bishopbriggs',
  'uddingston',
  'newton-mearns',
  'barrhead',
  'renfrew',
  'johnstone',
  'blantyre',
  'larkhall',
  'carluke',
  'giffnock',
  'abington',
  'loch-lomond',
  'argyll-and-bute',
  'scotland',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/accident-claim`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/motorways`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/routes/hamilton-to-carlisle`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const areaPages: MetadataRoute.Sitemap = areaSlugs.map((slug) => ({
    url: `${BASE}/areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const motorwayPages: MetadataRoute.Sitemap = motorways.map((m) => ({
    url: `${BASE}/motorways/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // "Near me" intent pages nested under each area hub (excludes the
  // nationwide 'scotland' catch-all, which has no [angle] sub-pages).
  const nearMePages: MetadataRoute.Sitemap = areaSlugs
    .filter((slug) => slug !== 'scotland')
    .flatMap((areaSlug) =>
      nearMeAngles.map((angle) => ({
        url: `${BASE}/areas/${areaSlug}/${angle.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    )

  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = await getBlogPosts(true)
    blogPages = posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.updated_at),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }))
  } catch {
    // DB unavailable at build time — blog posts omitted from sitemap
  }

  return [...staticPages, ...areaPages, ...servicePages, ...motorwayPages, ...nearMePages, ...blogPages]
}

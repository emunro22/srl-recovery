import type { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'
import { motorways } from '@/lib/motorways-data'

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
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/motorways`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
  ]

  const areaPages: MetadataRoute.Sitemap = areaSlugs.map((slug) => ({
    url: `${BASE}/areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const motorwayPages: MetadataRoute.Sitemap = motorways.map((m) => ({
    url: `${BASE}/motorways/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...areaPages, ...servicePages, ...motorwayPages]
}

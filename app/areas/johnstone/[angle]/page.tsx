import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import NearMePage from '@/components/NearMePage'
import { getAreaBySlug } from '@/lib/areas-data'
import { getAngleBySlug, nearMeAngles } from '@/lib/near-me-data'

const AREA_SLUG = 'johnstone'

type Props = { params: Promise<{ angle: string }> }

export function generateStaticParams() {
  return nearMeAngles.map((a) => ({ angle: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { angle: angleSlug } = await params
  const area = getAreaBySlug(AREA_SLUG)
  const angle = getAngleBySlug(angleSlug)
  if (!area || !angle) return {}
  const content = angle.build(area)
  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: `https://srlrecovery.com/areas/${AREA_SLUG}/${angle.slug}` },
  }
}

export default async function Page({ params }: Props) {
  const { angle: angleSlug } = await params
  const area = getAreaBySlug(AREA_SLUG)
  const angle = getAngleBySlug(angleSlug)
  if (!area || !angle) notFound()
  return <NearMePage area={area} angle={angle} />
}

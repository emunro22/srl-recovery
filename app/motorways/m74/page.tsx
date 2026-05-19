import MotorwayPage from '@/components/MotorwayPage'
import { getMotorwayBySlug } from '@/lib/motorways-data'
import { notFound } from 'next/navigation'

const SLUG = 'm74'

export function generateMetadata() {
  const data = getMotorwayBySlug(SLUG)
  if (!data) return {}
  return {
    title: data.title,
    description: data.metaDescription,
    alternates: { canonical: `https://srlrecovery.co.uk/motorways/${SLUG}` },
  }
}

export default function PageM74() {
  const data = getMotorwayBySlug(SLUG)
  if (!data) notFound()
  return <MotorwayPage data={data!} />
}

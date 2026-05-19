import MotorwayPage from '@/components/MotorwayPage'
import { getMotorwayBySlug } from '@/lib/motorways-data'
import { notFound } from 'next/navigation'

const SLUG = 'm73'

export function generateMetadata() {
  const data = getMotorwayBySlug(SLUG)
  if (!data) return {}
  return {
    title: data.title,
    description: data.metaDescription,
    alternates: { canonical: `https://srlrecovery.com/motorways/${SLUG}` },
  }
}

export default function PageM73() {
  const data = getMotorwayBySlug(SLUG)
  if (!data) notFound()
  return <MotorwayPage data={data!} />
}

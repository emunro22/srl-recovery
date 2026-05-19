import ServicePage from '@/components/ServicePage'
import { getServiceBySlug } from '@/lib/services-data'
import { notFound } from 'next/navigation'

const SLUG = 'emergency-breakdown-recovery'

export function generateMetadata() {
  const data = getServiceBySlug(SLUG)
  if (!data) return {}
  return {
    title: data.title,
    description: data.metaDescription,
    alternates: { canonical: `https://srlrecovery.com/services/${SLUG}` },
  }
}

export default function EmergencyBreakdownRecovery() {
  const data = getServiceBySlug(SLUG)
  if (!data) notFound()
  return <ServicePage data={data!} />
}

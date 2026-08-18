import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Motherwell | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Motherwell. Average arrival 30–45 minutes. From £60 local recovery. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/motherwell' },
}

export default function MotherwellPage() {
  return (
    <AreaPage
      area={{
        name: 'Motherwell',
        slug: 'motherwell',
        postcodes: ['ML1', 'ML2', 'ML3', 'ML4'],
        introBlurb:
          'Motherwell is our home turf — SRL Recovery is based locally, which means even faster response times across ML postcodes. 24/7 recovery for breakdowns, accidents, and vehicle transport.',
        routeBlurb:
          'As a Motherwell-based recovery service, we know every road in the area. We regularly recover from the M74, A721, A723, and A8 routes, plus residential and commercial areas across Motherwell, Wishaw, Newmains, Carfin, Cleland, Holytown, and the surrounding villages. Local jobs in ML1, ML2, ML3, and ML4 typically see us within the half-hour.',
        responseTime: '20–40 mins',
        nearbyAreas: ['Wishaw', 'Hamilton', 'Bellshill', 'Coatbridge', 'Cleland'],
      }}
    />
  )
}
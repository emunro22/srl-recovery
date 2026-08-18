import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Bellshill | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Bellshill. Average arrival 20–35 minutes. From £60. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/bellshill' },
}

export default function BellshillPage() {
  return (
    <AreaPage
      area={{
        name: 'Bellshill',
        slug: 'bellshill',
        postcodes: ['ML4'],
        introBlurb:
          'Bellshill is close to our base — SRL Recovery covers ML4 24/7 with one of our fastest average arrival times. Breakdowns, accidents, and transport handled around the clock.',
        routeBlurb:
          'Being close to our Motherwell base, Bellshill jobs are typically with us in 20–35 minutes. We cover the town centre, Mossend, Orbiston, Tannochside, and the surrounding industrial estates. The A721 and the M74 junctions through this area are some of our most common call locations.',
        responseTime: '20–35 mins',
        nearbyAreas: ['Motherwell', 'Coatbridge', 'Uddingston', 'Hamilton', 'Holytown'],
      }}
    />
  )
}
import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Blantyre | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Blantyre. Covering G72 postcodes, the A724, and the M74 junction 5 area. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/blantyre' },
}

export default function BlantyrePage() {
  return (
    <AreaPage
      area={{
        name: 'Blantyre',
        slug: 'blantyre',
        postcodes: ['G72'],
        introBlurb:
          '24/7 breakdown recovery in Blantyre and G72 postcodes. SRL Recovery covers Blantyre and the Caledonian Road corridor fast from our nearby Motherwell base, average arrival 20–30 minutes.',
        routeBlurb:
          'Blantyre is right on the M74 corridor, one of our most frequent recovery routes. We cover the A724 Caledonian Road, the M74 junction 5 area, and residential streets across Blantyre, Stonefield, High Blantyre, and Auchentibber. Very close to our Motherwell base, one of the fastest areas we serve. Average arrival 20–30 minutes.',
        responseTime: '20–30 mins',
        nearbyAreas: ['Hamilton', 'Cambuslang', 'Motherwell', 'East Kilbride', 'Uddingston'],
      }}
    />
  )
}

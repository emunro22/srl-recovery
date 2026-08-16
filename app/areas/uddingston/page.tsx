import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Uddingston | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Uddingston and Bothwell. Covering G71 postcodes and the M74 corridor. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/uddingston' },
}

export default function UddingstonPage() {
  return (
    <AreaPage
      area={{
        name: 'Uddingston',
        slug: 'uddingston',
        postcodes: ['G71'],
        introBlurb:
          '24/7 breakdown recovery in Uddingston, Bothwell, and across G71 postcodes. SRL Recovery is a short drive away via the M74 — fast response from our Motherwell base.',
        routeBlurb:
          'Uddingston and Bothwell sit right on the M74 corridor — one of our busiest recovery routes. We reach G71 quickly from Motherwell, covering M74 junctions 4–5, the A725, Bothwell Road, and residential streets across Uddingston, Bothwell, Tannochside, and Viewpark. The area is very familiar to our team. Average arrival 20–35 minutes.',
        responseTime: '20–35 mins',
        nearbyAreas: ['Motherwell', 'Hamilton', 'Bellshill', 'Cambuslang', 'Blantyre'],
      }}
    />
  )
}

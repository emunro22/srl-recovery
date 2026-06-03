import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Newton Mearns | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Newton Mearns. Covering G77 postcodes and the M77 corridor at junctions 4–5. Call 07776 356 556.',
  alternates: { canonical: '/areas/newton-mearns' },
}

export default function NewtonMearnsPage() {
  return (
    <AreaPage
      area={{
        name: 'Newton Mearns',
        slug: 'newton-mearns',
        postcodes: ['G77'],
        introBlurb:
          'Breakdown recovery across Newton Mearns and G77 postcodes 24/7. SRL Recovery covers the full M77 corridor through Newton Mearns — fast dispatch for motorway and local road breakdowns alike.',
        routeBlurb:
          'Newton Mearns is our busiest M77 corridor town. We respond daily to breakdowns at M77 junctions 4–5, the A726 Stewartfield Way, Ayr Road, and residential streets across Newton Mearns, Crookfur, Waterfoot, Eaglesham, and Mearnskirk. A high-traffic commuter area we know well. Average arrival 30–45 minutes.',
        responseTime: '30–45 mins',
        nearbyAreas: ['Glasgow', 'Giffnock', 'Barrhead', 'East Kilbride', 'Eaglesham'],
      }}
    />
  )
}

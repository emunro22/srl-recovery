import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Rutherglen | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Rutherglen. Average arrival 25–40 minutes. From £50. Call 07776 356 556.',
  alternates: { canonical: 'https://srlrecovery.com/areas/rutherglen' },
}

export default function RutherglenPage() {
  return (
    <AreaPage
      area={{
        name: 'Rutherglen',
        slug: 'rutherglen',
        postcodes: ['G73'],
        introBlurb:
          'Rutherglen is well within our core coverage. SRL Recovery handles breakdowns, accidents, and transport across G73 around the clock — average arrival 25–40 minutes from your call.',
        routeBlurb:
          'The M74 extension and the A724 run right through Rutherglen, and we work both daily. We cover the town centre, Burnside, Cathkin, Fernhill, and High Crosshill, plus the busy A749 corridor toward Cambuslang. Recovery from the M74 extension junctions 2A and 2B is one of our most common call types.',
        responseTime: '25–40 mins',
        nearbyAreas: ['Cambuslang', 'Glasgow', 'East Kilbride', 'Hamilton', 'Burnside'],
      }}
    />
  )
}
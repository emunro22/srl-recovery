import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Cambuslang | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Cambuslang. Average arrival 25–40 minutes. From £60. Call 07776 356 556.',
}

export default function CambuslangPage() {
  return (
    <AreaPage
      area={{
        name: 'Cambuslang',
        slug: 'cambuslang',
        postcodes: ['G72'],
        introBlurb:
          "Need recovery in Cambuslang? SRL Recovery covers G72 24/7 — breakdowns, accidents, transport. Average arrival 25–40 minutes from your call, and we know the area inside-out.",
        routeBlurb:
          'Cambuslang is one of our most-served areas. We work the M74 extension junctions, the A724, and the A749 daily. Coverage includes Cambuslang Main Street, Halfway, Whitlawburn, Hallside, and Newton, plus the industrial estates along Westburn Road and Cambuslang Investment Park.',
        responseTime: '25–40 mins',
        nearbyAreas: ['Rutherglen', 'East Kilbride', 'Hamilton', 'Glasgow', 'Uddingston'],
      }}
    />
  )
}

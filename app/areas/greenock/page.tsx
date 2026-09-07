import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Greenock | 24/7 Car & Commercial Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown, accident and commercial vehicle recovery in Greenock. Covering PA15 and PA16 on the A8 and A78. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/greenock' },
}

export default function GreenockPage() {
  return (
    <AreaPage
      area={{
        name: 'Greenock',
        slug: 'greenock',
        postcodes: ['PA15', 'PA16'],
        introBlurb:
          'Broken down in Greenock? SRL Recovery covers PA15 and PA16 around the clock for breakdowns, accidents, commercial vehicles and transport. Average arrival 50 to 75 minutes from your call.',
        routeBlurb:
          'Greenock sits at the far west of our coverage, and we work it regularly along the A8 Greenock Road, the A78 coast road and the Inverkip Road. We handle jobs across the town centre, Cartsdyke, Gourock Road, the Ocean Terminal and the industrial units around the waterfront. Commercial vehicle work is a large part of what we do here, and we cover Port Glasgow, Gourock and Inverkip on the same dispatch. Being further out, we will always give you an honest arrival time on the phone rather than an optimistic one.',
        responseTime: '50 to 75 mins',
        nearbyAreas: ['Port Glasgow', 'Paisley', 'Johnstone', 'Renfrew', 'Clydebank'],
      }}
    />
  )
}

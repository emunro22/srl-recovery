import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Clydebank | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Clydebank. Average arrival 30–45 minutes. From £60 local recovery. Call 07776 356 556.',
  alternates: { canonical: '/areas/clydebank' },
}

export default function ClydebankPage() {
  return (
    <AreaPage
      area={{
        name: 'Clydebank',
        slug: 'clydebank',
        postcodes: ['G81'],
        introBlurb:
          'SRL Recovery is on call 24/7 for breakdowns, accidents, and vehicle transport across Clydebank and the wider G81 area. Average arrival 30–45 minutes from your call.',
        routeBlurb:
          'Clydebank sits along one of our busiest routes — the A814 and A82 corridor. We regularly cover the town centre, Drumchapel, Faifley, Hardgate, Duntocher, and Old Kilpatrick, plus the Erskine Bridge approaches. Whether you’re stuck near the Clyde Shopping Centre, on the boundary with Glasgow, or out toward Dumbarton, we know the area well.',
        responseTime: '30–45 mins',
        nearbyAreas: ['Glasgow', 'Bearsden', 'Dumbarton', 'Drumchapel', 'Erskine'],
      }}
    />
  )
}
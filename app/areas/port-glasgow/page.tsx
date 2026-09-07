import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Port Glasgow | 24/7 Vehicle Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown, accident and commercial vehicle recovery in Port Glasgow. Covering PA14 on the A8 corridor. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/port-glasgow' },
}

export default function PortGlasgowPage() {
  return (
    <AreaPage
      area={{
        name: 'Port Glasgow',
        slug: 'port-glasgow',
        postcodes: ['PA14'],
        introBlurb:
          'Broken down in Port Glasgow? SRL Recovery covers PA14 24 hours a day for breakdowns, accidents, vans and vehicle transport. Average arrival 50 to 70 minutes from your call.',
        routeBlurb:
          'Port Glasgow is covered daily along the A8, the main route between Greenock and the Erskine Bridge, plus the Kilmacolm Road and the streets around Woodhall and Devol. The A8 carries heavy commercial traffic through the town and a fair share of our work here is vans and light commercials. We cover Greenock, Kilmacolm and Langbank on the same run, and we will give you a realistic arrival time on the call.',
        responseTime: '50 to 70 mins',
        nearbyAreas: ['Greenock', 'Paisley', 'Johnstone', 'Renfrew', 'Clydebank'],
      }}
    />
  )
}

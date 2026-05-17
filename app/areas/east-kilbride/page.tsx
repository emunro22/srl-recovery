import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery East Kilbride | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in East Kilbride. Average arrival 30–45 minutes. From £60 local recovery. Call 07776 356 556.',
}

export default function EastKilbridePage() {
  return (
    <AreaPage
      area={{
        name: 'East Kilbride',
        slug: 'east-kilbride',
        postcodes: ['G74', 'G75'],
        introBlurb:
          'Need recovery in East Kilbride? SRL Recovery is on call 24 hours a day for breakdowns, accidents, and vehicle transport across G74 and G75. Average arrival time 30–45 minutes from your call.',
        routeBlurb:
          'East Kilbride is well within our core coverage area. We handle regular jobs across the town centre, Calderwood, Westwood, Greenhills, Murray, and Lindsayfield, as well as the surrounding A725, A726, and A749 routes. Whether you’re stuck at East Kilbride Shopping Centre, on the East Kilbride Expressway, or at home, we’ll be with you fast.',
        responseTime: '30–45 mins',
        nearbyAreas: ['Glasgow', 'Hamilton', 'Rutherglen', 'Cambuslang', 'Strathaven'],
      }}
    />
  )
}

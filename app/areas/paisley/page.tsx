import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Paisley | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Paisley. Average arrival 30–45 minutes. From £60 local recovery. Call 07776 356 556.',
  alternates: { canonical: 'https://srlrecovery.com/areas/paisley' },
}

export default function PaisleyPage() {
  return (
    <AreaPage
      area={{
        name: 'Paisley',
        slug: 'paisley',
        postcodes: ['PA1', 'PA2', 'PA3', 'PA4', 'PA5', 'PA6'],
        introBlurb:
          'Broken down in Paisley? SRL Recovery is your local 24/7 recovery specialist, serving PA postcodes from Glasgow Airport to Linwood. We dispatch immediately with an average arrival time of 30–45 minutes.',
        routeBlurb:
          'Paisley is one of our busiest coverage areas. We regularly recover vehicles from the M8 between junctions 27 and 29, the A737, the A726, and right across the town centre, Hawkhead, Foxbar, Glenburn, and Ferguslie. Whether your job is at Glasgow Airport, Phoenix Retail Park, or a residential street, we know the area and get there fast.',
        responseTime: '30–45 mins',
        nearbyAreas: ['Glasgow', 'Renfrew', 'Johnstone', 'Linwood', 'Bishopton'],
      }}
    />
  )
}
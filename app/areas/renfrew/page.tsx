import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Renfrew | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Renfrew. Covering PA4 postcodes, the M8 Glasgow Airport corridor, and the Clyde waterfront. Call 07776 356 556.',
  alternates: { canonical: '/areas/renfrew' },
}

export default function RenfrewPage() {
  return (
    <AreaPage
      area={{
        name: 'Renfrew',
        slug: 'renfrew',
        postcodes: ['PA4'],
        introBlurb:
          'Fast 24/7 breakdown recovery in Renfrew and PA4 postcodes. SRL Recovery covers the Glasgow Airport corridor, Renfrew town, Braehead, and the Clyde waterfront — average arrival 25–40 minutes.',
        routeBlurb:
          'Renfrew sits on the M8 just past Glasgow Airport — a high-traffic zone we attend regularly. We cover the M8 junctions 26/27 exits, the A8, King\'s Inch Road, Renfrew town centre, Braehead Retail Park, and the Clydeside industrial area. Frequent recovery zone for our team. Average arrival 25–40 minutes.',
        responseTime: '25–40 mins',
        nearbyAreas: ['Paisley', 'Glasgow', 'Clydebank', 'Johnstone', 'Glasgow Airport'],
      }}
    />
  )
}

import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Edinburgh | 24 Hour Vehicle Recovery | SRL Recovery',
  description:
    '24 hour breakdown and vehicle recovery in Edinburgh. Covering EH postcodes, the A720 city bypass, the M8, M9 and A1. Cars, vans and commercials. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/edinburgh' },
}

export default function EdinburghPage() {
  return (
    <AreaPage
      area={{
        name: 'Edinburgh',
        slug: 'edinburgh',
        postcodes: ['EH1', 'EH2', 'EH3', 'EH4', 'EH6', 'EH7', 'EH8', 'EH11', 'EH12'],
        introBlurb:
          'Broken down in Edinburgh? SRL Recovery covers the city and its bypass around the clock for breakdowns, accidents, commercial vehicles and transport. Average arrival 55 to 80 minutes from your call.',
        routeBlurb:
          'We run east to Edinburgh most days of the week. The M8 in past Newbridge, the A720 city bypass from Hermiston Gait round to Sheriffhall, the M9 spur, the A1 out towards Musselburgh and the A90 over the Queensferry Crossing. In the city we cover the centre, Leith and the docks, Gorgie, Sighthill, Corstorphine, Newington and the Edinburgh Park and Gyle business areas, plus airport drop-offs and long-stay car parks. Being an hour east of our base, arrival is usually 55 to 80 minutes, longer at rush hour or during Festival closures, and we will always quote you the real number before you commit.',
        responseTime: '55 to 80 mins',
        nearbyAreas: ['Livingston', 'Bathgate', 'Falkirk', 'Musselburgh', 'Leith'],
      }}
    />
  )
}

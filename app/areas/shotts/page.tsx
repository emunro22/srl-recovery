import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Shotts | 24 Hour Vehicle Recovery | SRL Recovery',
  description:
    '24 hour breakdown and vehicle recovery in Shotts. Covering ML7, the A71, junction 5 of the M8 and Harthill Services. Cars, vans and commercials. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/shotts' },
}

export default function ShottsPage() {
  return (
    <AreaPage
      area={{
        name: 'Shotts',
        slug: 'shotts',
        postcodes: ['ML7'],
        introBlurb:
          'Broken down in Shotts? SRL Recovery covers ML7 around the clock for breakdowns, accidents, commercial vehicles and transport. Average arrival 25 to 40 minutes from your call.',
        routeBlurb:
          'Shotts sits right on our home patch, so this is one of our quicker runs. We work the A71 through Kirk of Shotts and Salsburgh, the A8 across to Newhouse, and junction 5 of the M8 where the Harthill Services traffic joins. In town we cover Dykehead, Torbothie, Stane and the Shotts industrial estate, plus the B717 out towards Allanton and Newmains. Because we run from Motherwell, most Shotts jobs are with you inside 25 to 40 minutes, and we will give you the honest number when you ring rather than a stock figure.',
        responseTime: '25 to 40 mins',
        nearbyAreas: ['Wishaw', 'Motherwell', 'Airdrie', 'Bathgate', 'Harthill'],
      }}
    />
  )
}

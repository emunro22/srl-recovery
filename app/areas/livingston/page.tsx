import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Livingston | 24 Hour Vehicle Recovery | SRL Recovery',
  description:
    '24 hour breakdown and vehicle recovery in Livingston. Covering EH54, the M8 junctions 3 to 3A, the A71, A899 and A705. Cars, vans and commercials. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/livingston' },
}

export default function LivingstonPage() {
  return (
    <AreaPage
      area={{
        name: 'Livingston',
        slug: 'livingston',
        postcodes: ['EH54'],
        introBlurb:
          'Broken down in Livingston? SRL Recovery covers EH54 around the clock for breakdowns, accidents, commercial vehicles and transport. Average arrival 45 to 65 minutes from your call.',
        routeBlurb:
          'Livingston is built around fast roads and we know them well. The M8 at junctions 3 and 3A, the A899 spine through the town, the A71 out towards Wilkieston and the A705 into Deans and Knightsridge. We cover Almondvale and the Designer Outlet car parks, Craigshill, Dedridge, Murieston and Eliburn, plus the Houstoun, Deans and Kirkton Campus industrial estates where most of our van and fleet work comes from. Expect 45 to 65 minutes from the call, and we will be straight with you if the M8 is backed up.',
        responseTime: '45 to 65 mins',
        nearbyAreas: ['Bathgate', 'Edinburgh', 'Shotts', 'Falkirk', 'Broxburn'],
      }}
    />
  )
}

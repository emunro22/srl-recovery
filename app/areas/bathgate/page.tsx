import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Bathgate | 24 Hour Vehicle Recovery | SRL Recovery',
  description:
    '24 hour breakdown and vehicle recovery in Bathgate. Covering EH48, the M8 junctions 3A to 4, the A89 and the A801. Cars, vans and commercials. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/bathgate' },
}

export default function BathgatePage() {
  return (
    <AreaPage
      area={{
        name: 'Bathgate',
        slug: 'bathgate',
        postcodes: ['EH48'],
        introBlurb:
          'Broken down in Bathgate? SRL Recovery covers EH48 around the clock for breakdowns, accidents, commercial vehicles and transport. Average arrival 40 to 60 minutes from your call.',
        routeBlurb:
          'Bathgate is a straight run east for us along the M8, and we cover the town and the roads feeding it. Junctions 3A and 4 of the M8, the A89 through Armadale and Blackburn, the A801 up to the Avon Gorge and the A7066 into the town centre. Locally we work Boghall, Whitburn, Blackridge, Torphichen and the Whitehill and Inchmuir industrial estates, where we get a lot of van and light commercial work. Arrival is typically 40 to 60 minutes depending on traffic through the M8 roadworks, and we will tell you the real ETA on the phone.',
        responseTime: '40 to 60 mins',
        nearbyAreas: ['Livingston', 'Shotts', 'Falkirk', 'Airdrie', 'Armadale'],
      }}
    />
  )
}

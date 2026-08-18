import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Dumbarton | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Dumbarton. Average arrival 35–50 minutes. From £60. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/dumbarton' },
}

export default function DumbartonPage() {
  return (
    <AreaPage
      area={{
        name: 'Dumbarton',
        slug: 'dumbarton',
        postcodes: ['G82'],
        introBlurb:
          'Need recovery in Dumbarton? SRL Recovery covers G82 around the clock — breakdowns, accidents, and transport. Average arrival 35–50 minutes from your call.',
        routeBlurb:
          'Dumbarton sits at the western edge of our core coverage area, along the A82 corridor toward Loch Lomond. We cover the town centre, Bellsmyre, Brucehill, Castlehill, and Westcliff, plus the A82 northbound toward Balloch and southbound to Erskine. The A814 toward Helensburgh is also within our reach.',
        responseTime: '35–50 mins',
        nearbyAreas: ['Clydebank', 'Helensburgh', 'Balloch', 'Erskine', 'Alexandria'],
      }}
    />
  )
}
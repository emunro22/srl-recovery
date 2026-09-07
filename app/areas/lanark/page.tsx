import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Lanark | 24/7 Clyde Valley Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Lanark and the Clyde Valley. Covering ML11, the A73 and M74 J9. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/lanark' },
}

export default function LanarkPage() {
  return (
    <AreaPage
      area={{
        name: 'Lanark',
        slug: 'lanark',
        postcodes: ['ML11'],
        introBlurb:
          'Broken down in Lanark? SRL Recovery covers ML11 and the Clyde Valley 24 hours a day for breakdowns, accidents, commercial vehicles and transport. Average arrival 35 to 50 minutes from your call.',
        routeBlurb:
          'Lanark and the upper Clyde Valley are regular territory for us. We cover the A73 through Lanark and Carstairs, the A70 towards Ayrshire, the A72 down the valley to Kirkfieldbank and Crossford, and the M74 junctions 9 to 11 at Lesmahagow and Douglas. New Lanark, Forth, Carnwath and Rigside are all on the same dispatch. The rural roads out here can be slow going in winter, so we give an honest arrival time rather than an optimistic one.',
        responseTime: '35 to 50 mins',
        nearbyAreas: ['Carluke', 'Larkhall', 'Hamilton', 'Abington', 'Wishaw'],
      }}
    />
  )
}

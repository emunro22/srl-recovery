import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Falkirk | 24/7 Car & Van Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Falkirk. Covering FK1 and FK2, the M9 and M876. Cars, vans and commercials. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/falkirk' },
}

export default function FalkirkPage() {
  return (
    <AreaPage
      area={{
        name: 'Falkirk',
        slug: 'falkirk',
        postcodes: ['FK1', 'FK2'],
        introBlurb:
          'Broken down in Falkirk? SRL Recovery covers FK1 and FK2 24 hours a day for breakdowns, accidents, commercial vehicles and transport. Average arrival 35 to 55 minutes from your call.',
        routeBlurb:
          'Falkirk is well within reach of our base and we cover it daily. The M9 junctions 5 to 7, the M876 towards the Kincardine Bridge, the A9 through Camelon and Larbert, and the A803 towards Bonnybridge and Banknock. In town we work Grahamston, Bainsford, Hallglen and the Middlefield and Grangemouth industrial estates, where a good share of our commercial vehicle work comes from. Grangemouth, Bo’ness and Denny are covered on the same dispatch.',
        responseTime: '35 to 55 mins',
        nearbyAreas: ['Cumbernauld', 'Stirling', 'Alloa', 'Airdrie', 'Kirkintilloch'],
      }}
    />
  )
}

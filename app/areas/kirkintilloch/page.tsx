import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Kirkintilloch | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Kirkintilloch and Lenzie. Covering G66 postcodes and the A803 corridor. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/kirkintilloch' },
}

export default function KirkintillochPage() {
  return (
    <AreaPage
      area={{
        name: 'Kirkintilloch',
        slug: 'kirkintilloch',
        postcodes: ['G66'],
        introBlurb:
          '24/7 breakdown recovery in Kirkintilloch and across G66 postcodes. SRL Recovery covers Kirkintilloch, Lenzie, and the wider East Dunbartonshire area — fast dispatch, clear pricing, always available.',
        routeBlurb:
          'Kirkintilloch sits between Glasgow and Cumbernauld on the A803/A806 corridor. We dispatch to Kirkintilloch town centre, Lenzie, Waterside, Twechar, Lennoxtown, and Milton of Campsie. It\'s a well-connected area and we know the local routes. Response times from Motherwell are typically 30–50 minutes depending on traffic conditions.',
        responseTime: '30–50 mins',
        nearbyAreas: ['Cumbernauld', 'Bishopbriggs', 'Bearsden', 'Lenzie', 'Stepps'],
      }}
    />
  )
}

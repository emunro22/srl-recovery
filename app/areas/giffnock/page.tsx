import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Giffnock | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Giffnock and Thornliebank. Covering G46 postcodes and the south Glasgow M77 corridor. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/giffnock' },
}

export default function GiffnockPage() {
  return (
    <AreaPage
      area={{
        name: 'Giffnock',
        slug: 'giffnock',
        postcodes: ['G46'],
        introBlurb:
          '24/7 breakdown recovery in Giffnock, Thornliebank, and G46 postcodes. SRL Recovery covers the south Glasgow suburbs on the M77 corridor fast. Call any time, we dispatch immediately.',
        routeBlurb:
          'Giffnock is on the M77 corridor, south of Glasgow city. We respond daily to the A727 Clarkston Road, Ayr Road, Kilmarnock Road, and residential streets across Giffnock, Thornliebank, Merrylee, and Arden. Good M77 access from our Motherwell base keeps arrival times competitive. Average arrival 30–45 minutes.',
        responseTime: '30–45 mins',
        nearbyAreas: ['Newton Mearns', 'Glasgow', 'Barrhead', 'Clarkston', 'East Kilbride'],
      }}
    />
  )
}

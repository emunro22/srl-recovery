import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Barrhead | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Barrhead and Neilston. Covering G78 postcodes and the A736 corridor. Call 07776 356 556.',
  alternates: { canonical: 'https://srlrecovery.com/areas/barrhead' },
}

export default function BarrheadPage() {
  return (
    <AreaPage
      area={{
        name: 'Barrhead',
        slug: 'barrhead',
        postcodes: ['G78'],
        introBlurb:
          '24/7 breakdown recovery in Barrhead and across G78 postcodes. SRL Recovery covers Barrhead, Neilston, and surrounding South Renfrewshire — fast dispatch, fully insured, always available.',
        routeBlurb:
          'Barrhead sits between Glasgow and the M77 corridor, served by the A736 Barrhead Road. We respond to breakdowns on the A736, the B769, and throughout Barrhead town centre, Neilston, Uplawmoor, and Springhill. A straightforward run from our Motherwell base. Average arrival 30–45 minutes.',
        responseTime: '30–45 mins',
        nearbyAreas: ['Glasgow', 'Newton Mearns', 'Paisley', 'East Kilbride', 'Neilston'],
      }}
    />
  )
}

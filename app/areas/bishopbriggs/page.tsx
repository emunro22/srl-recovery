import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Bishopbriggs | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Bishopbriggs. Covering G64 postcodes, the A803 corridor, and surrounding North Glasgow suburbs. Call 07776 356 556.',
  alternates: { canonical: '/areas/bishopbriggs' },
}

export default function BishopbriggsPage() {
  return (
    <AreaPage
      area={{
        name: 'Bishopbriggs',
        slug: 'bishopbriggs',
        postcodes: ['G64'],
        introBlurb:
          'Fast breakdown recovery across Bishopbriggs and G64 postcodes 24/7. SRL Recovery covers Bishopbriggs, Auchinairn, Cadder, and Torrance — dispatching any time, day or night.',
        routeBlurb:
          'Bishopbriggs is just north of Glasgow, easily reached via the A803 and A8011 corridor. We regularly recover from the A803 Bishopbriggs Road, Springburn Road, and residential streets across Auchinairn, Cadder, Bishopbriggs town centre, and Torrance. Well-known area for our team — average arrival 30–45 minutes.',
        responseTime: '30–45 mins',
        nearbyAreas: ['Glasgow', 'Kirkintilloch', 'Bearsden', 'Milngavie', 'Stepps'],
      }}
    />
  )
}

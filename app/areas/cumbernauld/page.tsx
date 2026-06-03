import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Cumbernauld | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Cumbernauld. Covering G67/G68 postcodes and the M80 corridor. Call 07776 356 556.',
  alternates: { canonical: '/areas/cumbernauld' },
}

export default function CumbernaulddPage() {
  return (
    <AreaPage
      area={{
        name: 'Cumbernauld',
        slug: 'cumbernauld',
        postcodes: ['G67', 'G68'],
        introBlurb:
          'Breakdown recovery across Cumbernauld and G67/G68 postcodes 24/7. SRL Recovery covers the full town and the M80 corridor — including junctions 4 to 6 — with fast dispatch day or night.',
        routeBlurb:
          'Cumbernauld sits on the M80 which we cover every day. We recover from the M80 interchanges at junctions 4–6, the A80, A8011, and throughout Cumbernauld town centre, Kildrum, Abronhill, Condorrat, and Craigmarloch. Whether you're stuck on the motorway or in a housing estate, we know the roads here. Average arrival 30–45 minutes.',
        responseTime: '30–45 mins',
        nearbyAreas: ['Airdrie', 'Coatbridge', 'Kirkintilloch', 'Kilsyth', 'Motherwell'],
      }}
    />
  )
}

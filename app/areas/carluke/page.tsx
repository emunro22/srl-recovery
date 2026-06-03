import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Carluke | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Carluke. Covering ML8 postcodes and the Clyde Valley A73 corridor. Call 07776 356 556.',
  alternates: { canonical: '/areas/carluke' },
}

export default function CarlukePage() {
  return (
    <AreaPage
      area={{
        name: 'Carluke',
        slug: 'carluke',
        postcodes: ['ML8'],
        introBlurb:
          'Breakdown recovery across Carluke and ML8 postcodes 24/7. SRL Recovery dispatches from Motherwell to cover Carluke, the Clyde Valley roads, and surrounding South Lanarkshire villages.',
        routeBlurb:
          'Carluke sits in the Clyde Valley, accessible via the A73 and M74 junction 9. We cover Carluke town centre, the A73 corridor, Lanark Road, and surrounding villages including Law, Braidwood, and Kirkmuirhill. Well within our regular coverage area. Average arrival 30–45 minutes from our Motherwell base.',
        responseTime: '30–45 mins',
        nearbyAreas: ['Motherwell', 'Lanark', 'Larkhall', 'Wishaw', 'Lesmahagow'],
      }}
    />
  )
}

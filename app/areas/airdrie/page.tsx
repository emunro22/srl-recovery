import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Airdrie | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Airdrie. Covering ML6 postcodes, the A73, A89, and surrounding areas. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/airdrie' },
}

export default function AirdriePage() {
  return (
    <AreaPage
      area={{
        name: 'Airdrie',
        slug: 'airdrie',
        postcodes: ['ML6'],
        introBlurb:
          '24/7 breakdown recovery across Airdrie and ML6 postcodes. SRL Recovery dispatches fast from our Motherwell base — covering Airdrie town, Caldercruix, Plains, and the surrounding area with average arrival of 25–40 minutes.',
        routeBlurb:
          'Airdrie is well within our regular coverage. We respond to breakdowns on the A73, A89, and local roads throughout Airdrie town centre, New Monkland, Chapelhall, Greengairs, Caldercruix, and Plains. The A89 Airdrie-Coatbridge corridor is one we attend regularly. Average arrival 25–40 minutes from our Motherwell base.',
        responseTime: '25–40 mins',
        nearbyAreas: ['Coatbridge', 'Motherwell', 'Bellshill', 'Chapelhall', 'Plains'],
      }}
    />
  )
}

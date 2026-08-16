import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Larkhall | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Larkhall. Covering ML9 postcodes, the A72, and south Lanarkshire roads. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/larkhall' },
}

export default function LarkhallPage() {
  return (
    <AreaPage
      area={{
        name: 'Larkhall',
        slug: 'larkhall',
        postcodes: ['ML9'],
        introBlurb:
          '24/7 breakdown recovery across Larkhall and ML9 postcodes. SRL Recovery covers Larkhall and the surrounding South Lanarkshire area with fast dispatch from our Motherwell base.',
        routeBlurb:
          'Larkhall sits south of Hamilton on the A72 corridor. We cover Larkhall town centre, the A72 Larkhall Road, and surrounding villages including Stonehouse, Blackwood, Machan, and Meadowhill. M74 access at junction 7 means quick dispatch from our Motherwell base. Average arrival 25–40 minutes.',
        responseTime: '25–40 mins',
        nearbyAreas: ['Hamilton', 'Motherwell', 'Carluke', 'Stonehouse', 'Strathaven'],
      }}
    />
  )
}

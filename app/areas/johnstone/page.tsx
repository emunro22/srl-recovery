import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Johnstone | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Johnstone and Linwood. Covering PA5 and PA10 postcodes and the A737 corridor. Call 07776 356 556.',
  alternates: { canonical: 'https://srlrecovery.com/areas/johnstone' },
}

export default function JohnstonePage() {
  return (
    <AreaPage
      area={{
        name: 'Johnstone',
        slug: 'johnstone',
        postcodes: ['PA5', 'PA10'],
        introBlurb:
          '24/7 breakdown recovery across Johnstone, Linwood, and PA5/PA10 postcodes. SRL Recovery covers Renfrewshire fast — dispatching any time for roadside, motorway, and local road recovery.',
        routeBlurb:
          'Johnstone is at the far end of the M8/A737 corridor into Renfrewshire. We respond to breakdowns on the A737, the A761, and throughout Johnstone town centre, Linwood, Elderslie, Bridge of Weir, and Kilbarchan. Further from our Motherwell base than some areas, but still well within our regular coverage. Average arrival 30–50 minutes depending on traffic.',
        responseTime: '30–50 mins',
        nearbyAreas: ['Paisley', 'Renfrew', 'Linwood', 'Bridge of Weir', 'Kilbarchan'],
      }}
    />
  )
}

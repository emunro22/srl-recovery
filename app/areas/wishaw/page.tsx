import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Wishaw | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Wishaw. SRL Recovery is based nearby in Motherwell — average arrival under 30 minutes. Call 07776 356 556.',
  alternates: { canonical: 'https://srlrecovery.com/areas/wishaw' },
}

export default function WishawPage() {
  return (
    <AreaPage
      area={{
        name: 'Wishaw',
        slug: 'wishaw',
        postcodes: ['ML2'],
        introBlurb:
          'SRL Recovery covers Wishaw and surrounding ML2 postcodes 24/7. Based nearby in Motherwell, we regularly reach Wishaw calls in under 30 minutes — one of our fastest response areas.',
        routeBlurb:
          'Wishaw sits right in our core patch — just a few miles from our Motherwell base. We regularly recover from the A721, B7011, and residential streets across Wishaw town centre, Cambusnethan, Overtown, Waterloo, and Craigneuk. ML2 jobs are among our quickest responses, day or night.',
        responseTime: '20–35 mins',
        nearbyAreas: ['Motherwell', 'Newmains', 'Overtown', 'Carluke', 'Cleland'],
      }}
    />
  )
}

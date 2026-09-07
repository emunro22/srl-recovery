import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Car Recovery Alloa | 24/7 Vehicle Recovery Clackmannanshire | SRL Recovery',
  description:
    '24/7 car and vehicle recovery in Alloa and Clackmannanshire. Covering FK10, the A907 and A908. Cars, vans and commercials. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/alloa' },
}

export default function AlloaPage() {
  return (
    <AreaPage
      area={{
        name: 'Alloa',
        slug: 'alloa',
        postcodes: ['FK10'],
        introBlurb:
          'Broken down in Alloa? SRL Recovery covers FK10 and the wider Clackmannanshire area around the clock for breakdowns, accidents and vehicle transport. Average arrival 50 to 75 minutes from your call.',
        routeBlurb:
          'Alloa is at the northern edge of our patch and we reach it via the M9 and the A907 through Clackmannan and Tullibody. We cover the town centre, Sauchie, Tillicoultry and the Alloa West and Whins industrial estates. The Clackmannanshire Bridge and the A977 towards Kincardine are regular routes for us. Arrival runs at 50 to 75 minutes and we will always be straight with you about the wait before you commit.',
        responseTime: '50 to 75 mins',
        nearbyAreas: ['Stirling', 'Falkirk', 'Cumbernauld', 'Kirkintilloch'],
      }}
    />
  )
}

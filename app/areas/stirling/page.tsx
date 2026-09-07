import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Stirling | 24 Hour Vehicle Recovery | SRL Recovery',
  description:
    '24 hour breakdown and vehicle recovery in Stirling. Covering FK7, FK8 and FK9, the M9 and the A9. Cars, vans and commercials. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/stirling' },
}

export default function StirlingPage() {
  return (
    <AreaPage
      area={{
        name: 'Stirling',
        slug: 'stirling',
        postcodes: ['FK7', 'FK8', 'FK9'],
        introBlurb:
          'Broken down in Stirling? SRL Recovery covers FK7, FK8 and FK9 around the clock for breakdowns, accidents, commercial vehicles and transport. Average arrival 45 to 70 minutes from your call.',
        routeBlurb:
          'Stirling sits at the junction of two of the busiest routes in the country, and we cover both. The M9 through Bannockburn and Craigforth, the A9 north towards Dunblane and Bridge of Allan, the A91 out to Alloa and the A84 towards Callander. In town we work Raploch, Cornton, St Ninians, Causewayhead and the Springkerse industrial estate. Being north of our core patch, arrival is typically 45 to 70 minutes and we will tell you the real number when you ring rather than a stock figure.',
        responseTime: '45 to 70 mins',
        nearbyAreas: ['Falkirk', 'Alloa', 'Cumbernauld', 'Kirkintilloch', 'Loch Lomond'],
      }}
    />
  )
}

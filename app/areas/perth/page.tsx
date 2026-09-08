import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Perth | 24 Hour Vehicle Recovery | SRL Recovery',
  description:
    '24 hour breakdown and vehicle recovery in Perth. Covering PH1 and PH2, the M90, A9, A85 and A93. Cars, vans and commercials. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/perth' },
}

export default function PerthPage() {
  return (
    <AreaPage
      area={{
        name: 'Perth',
        slug: 'perth',
        postcodes: ['PH1', 'PH2'],
        introBlurb:
          'Broken down in Perth? SRL Recovery covers PH1 and PH2 around the clock for breakdowns, accidents, commercial vehicles and transport. Average arrival 75 to 110 minutes from your call.',
        routeBlurb:
          'Perth is the gateway to the north and we cover the roads that meet there. The M90 up from the Forth, the A9 through Broxden and on towards Dunkeld, the A85 out to Crieff, the A93 to Blairgowrie and the A94 towards Coupar Angus. In town we work Craigie, Letham, Scone, Bridgend and the Inveralmond industrial estate. Perth is outside our core patch, so arrival is typically 75 to 110 minutes and the mileage affects the price. Ring us with your location and we will give you a firm quote and an honest ETA before we set off.',
        responseTime: '75 to 110 mins',
        nearbyAreas: ['Stirling', 'Alloa', 'Dunblane', 'Auchterarder', 'Dundee'],
      }}
    />
  )
}

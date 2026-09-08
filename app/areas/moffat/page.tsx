import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Moffat | M74 & A701 Vehicle Recovery | SRL Recovery',
  description:
    '24 hour breakdown and vehicle recovery in Moffat. Covering DG10, M74 junctions 14 to 16, Beattock and the A701. Cars, vans and commercials. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/moffat' },
}

export default function MoffatPage() {
  return (
    <AreaPage
      area={{
        name: 'Moffat',
        slug: 'moffat',
        postcodes: ['DG10'],
        introBlurb:
          'Broken down at Moffat or on the M74 nearby? SRL Recovery covers DG10 around the clock for breakdowns, accidents, commercial vehicles and transport. Average arrival 60 to 85 minutes from your call.',
        routeBlurb:
          'Moffat is one of the loneliest stretches of the M74 to break down on, and it is a run we do regularly. We cover junctions 14, 15 and 16, the Beattock climb in both directions, Moffat Services, the A701 up to the Devils Beef Tub and the A708 towards St Marys Loch. Phone signal is patchy on parts of this corridor, so if you get through to us once, give us your junction number and direction of travel and we will find you. Arrival is usually 60 to 85 minutes from Motherwell, and we will confirm the real time on the call.',
        responseTime: '60 to 85 mins',
        nearbyAreas: ['Abington', 'Carlisle', 'Lockerbie', 'Beattock', 'Dumfries'],
      }}
    />
  )
}

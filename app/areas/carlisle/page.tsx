import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Carlisle | M6 & A74(M) Vehicle Recovery | SRL Recovery',
  description:
    '24 hour breakdown and vehicle recovery in Carlisle. Covering CA postcodes, M6 junctions 42 to 44, the A74(M) and Gretna. Cross-border recovery to Scotland. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/carlisle' },
}

export default function CarlislePage() {
  return (
    <AreaPage
      area={{
        name: 'Carlisle',
        slug: 'carlisle',
        region: 'England',
        postcodes: ['CA1', 'CA2', 'CA3', 'CA4', 'CA5', 'CA6'],
        introBlurb:
          'Broken down in Carlisle or on the M6 nearby? SRL Recovery runs the cross-border corridor around the clock for breakdowns, accidents, commercial vehicles and transport. Average arrival 90 to 130 minutes from your call.',
        routeBlurb:
          'Carlisle is the far end of our busiest long-distance run, and we are on the M74 and A74(M) most weeks. We cover M6 junctions 42, 43 and 44, the A7 north through Longtown, the A69 east towards Brampton, the A595 west and the border crossing at Gretna. In the city we cover the centre, Harraby, Botcherby, Currock and the Kingstown and Rosehill industrial estates. This is a genuine cross-border service: plenty of our Carlisle work is recovering a Scottish vehicle home, or bringing an English breakdown north. Arrival is typically 90 to 130 minutes, mileage is priced up front, and we will give you a firm figure on the phone.',
        responseTime: '90 to 130 mins',
        nearbyAreas: ['Moffat', 'Abington', 'Gretna', 'Lockerbie', 'Penrith'],
        relatedRoutes: [
          {
            href: '/routes/hamilton-to-carlisle',
            title: 'Hamilton to Carlisle Recovery',
            description: 'The full M74 and A74(M) corridor, including Abington Services and the Beattock climb.',
          },
          {
            href: '/motorways/m74',
            title: 'M74 Recovery',
            description: '24 hour cover on the M74 from Glasgow to the border.',
          },
        ],
      }}
    />
  )
}

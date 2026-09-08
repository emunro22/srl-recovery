import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Stranraer | A75 & A77 Vehicle Recovery | SRL Recovery',
  description:
    '24 hour breakdown and vehicle recovery in Stranraer. Covering DG9, the A75, A77 and Cairnryan ferry port. Ferry and long-distance recovery. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/stranraer' },
}

export default function StranraerPage() {
  return (
    <AreaPage
      area={{
        name: 'Stranraer',
        slug: 'stranraer',
        postcodes: ['DG9'],
        introBlurb:
          'Broken down in Stranraer or heading for the Cairnryan ferry? SRL Recovery covers DG9 for breakdowns, accidents, commercial vehicles and transport. This is a long-distance run, so call us for a firm quote and an honest ETA.',
        routeBlurb:
          'Stranraer is the far south west corner of our map and most of the work here is ferry related. We cover the A77 down through Girvan and Ballantrae, the A75 east towards Newton Stewart and Dumfries, and both Cairnryan terminals for vehicles that have broken down off the Belfast and Larne boats or cannot make the sailing. In town we work the harbour, Sheuchan and the Stranraer industrial estate. Because it is a long run from Motherwell, we will not pretend it is quick: expect 150 to 210 minutes, and we will always agree the price and the timing with you on the phone before we set off.',
        responseTime: '150 to 210 mins',
        nearbyAreas: ['Cairnryan', 'Newton Stewart', 'Girvan', 'Ayr', 'Dumfries'],
        relatedRoutes: [
          {
            href: '/services/vehicle-transport-glasgow',
            title: 'Long Distance Vehicle Transport',
            description: 'Planned, fixed-price moves between Stranraer, Cairnryan and anywhere in the UK.',
          },
        ],
      }}
    />
  )
}

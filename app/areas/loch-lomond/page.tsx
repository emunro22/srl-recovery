import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Loch Lomond | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast breakdown and accident recovery around Loch Lomond, Balloch, Luss, Tarbet, Arrochar. Average arrival 45–65 minutes. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/loch-lomond' },
}

export default function LochLomondPage() {
  return (
    <AreaPage
      area={{
        name: 'Loch Lomond',
        slug: 'loch-lomond',
        postcodes: ['G83'],
        introBlurb:
          'Broken down near Loch Lomond? SRL Recovery covers the loch side and surrounding villages around the clock, Balloch, Luss, Tarbet and Arrochar included. Average arrival 45–65 minutes from your call.',
        routeBlurb:
          'Loch Lomond sits at the edge of our extended coverage area, reached via the A82 past Dumbarton. We regularly attend breakdowns at Balloch, Luss, Tarbet, Arrochar and along the loch-side road up towards Ardlui. This stretch can be exposed and quiet outside peak times, so if you break down here, especially after dark, get off the carriageway where you can and give us a call. We\'ll talk you through what to do while we\'re on our way.',
        responseTime: '45–65 mins',
        nearbyAreas: ['Dumbarton', 'Argyll and Bute', 'Helensburgh', 'Balloch', 'Alexandria'],
      }}
    />
  )
}

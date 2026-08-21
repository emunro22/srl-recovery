import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Anywhere in Scotland | SRL Recovery',
  description:
    'Can\'t see your area listed? SRL Recovery covers anywhere in Scotland — just call for a quote. 24/7 breakdown and accident recovery nationwide.',
  alternates: { canonical: 'https://srlrecovery.com/areas/scotland' },
}

export default function ScotlandPage() {
  return (
    <AreaPage
      area={{
        name: 'Scotland',
        slug: 'scotland',
        postcodes: ['Nationwide'],
        introBlurb:
          'Can\'t find your town in our area list? SRL Recovery isn\'t limited to Central Scotland — we cover the whole country. Call us with your location and we\'ll give you a straight quote and an honest ETA, wherever you are.',
        routeBlurb:
          'Our core coverage sits within 30 miles of Cambuslang, with a well-served extended zone out to about 60 miles — Loch Lomond and Argyll & Bute included. Beyond that, the Highlands, further Argyll, the Borders and everywhere in between are still within reach, and we\'ll take the job on if we can get to you sensibly. Distance affects the price and the wait, so we\'ll always be upfront on the phone about both before you commit. If you\'ve broken down anywhere in Scotland, give us a call — if we can\'t help directly, we\'ll point you in the right direction.',
        responseTime: '60–180 mins',
        nearbyAreas: ['Argyll and Bute', 'Loch Lomond', 'The Highlands', 'The Borders', 'Aberdeenshire'],
      }}
    />
  )
}

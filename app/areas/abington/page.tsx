import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Abington | M74 J13 Services | SRL Recovery',
  description:
    'Broken down at Abington Services or on the M74 near Junction 13? SRL Recovery covers this remote stretch 24/7. Average arrival 45–60 minutes. Call 07776 356 556.',
  alternates: { canonical: '/areas/abington' },
}

export default function AbingtonPage() {
  return (
    <AreaPage
      area={{
        name: 'Abington',
        slug: 'abington',
        postcodes: ['ML12'],
        introBlurb:
          'Broken down near Abington Services or stuck on the M74 near Junction 13? SRL Recovery covers this isolated stretch of the M74 around the clock — one of the most remote sections between Hamilton and the Scottish border. Average arrival 45–60 minutes from your call.',
        routeBlurb:
          'Abington sits at M74 Junction 13/14, roughly halfway between Hamilton and Carlisle. The services here are often the only realistic stopping point for a vehicle in trouble on this stretch — there\'s very little else between Lesmahagow to the north and Beattock to the south. We regularly attend breakdowns at Abington Services and along the carriageway on both sides. If you\'ve limped in and can\'t restart, or you\'re on the hard shoulder between junctions, call us — we\'ll get to you.',
        responseTime: '45–60 mins',
        nearbyAreas: ['Hamilton', 'Larkhall', 'Carluke', 'Lanark', 'Lesmahagow'],
      }}
    />
  )
}

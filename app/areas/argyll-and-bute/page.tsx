import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Argyll & Bute | 24/7 Car Recovery | SRL Recovery',
  description:
    'Breakdown and accident recovery across Argyll & Bute — Helensburgh, Arrochar, Cairndow, Dunoon and beyond. Call 01698 700970 for a quote.',
  alternates: { canonical: 'https://srlrecovery.com/areas/argyll-and-bute' },
}

export default function ArgyllAndButePage() {
  return (
    <AreaPage
      area={{
        name: 'Argyll and Bute',
        slug: 'argyll-and-bute',
        postcodes: ['G84', 'PA23', 'PA24', 'PA25', 'PA26'],
        introBlurb:
          'Broken down in Argyll & Bute? SRL Recovery covers this area on request — Helensburgh, Arrochar, Cairndow and Dunoon are all within reach, with the rest of Argyll covered further out. Call us and we\'ll give you a straight quote and an honest ETA.',
        routeBlurb:
          'Argyll & Bute stretches well beyond our core 30-mile area, so jobs here are quoted individually based on exactly where you are. We\'ve recovered vehicles at Arrochar and the "Rest and Be Thankful" on the A83, through Cairndow and Inveraray, and out towards Helensburgh and Dunoon. The more remote parts of Argyll — Oban, Campbeltown, the Cowal peninsula, and the islands — are still within reach; it just takes a call to confirm timing and price. Wherever you\'ve broken down, ring us and we\'ll tell you straight away whether we can get to you and how long it\'ll take.',
        responseTime: '60–120 mins',
        nearbyAreas: ['Loch Lomond', 'Dumbarton', 'Helensburgh', 'Dunoon', 'Inveraray'],
      }}
    />
  )
}

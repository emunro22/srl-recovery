import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Glasgow City Centre | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Glasgow city centre. Covering G1–G5, the M8, Kingston Bridge and all inner-city roads. Call 07776 356 556.',
  alternates: { canonical: '/areas/glasgow' },
}

export default function GlasgowPage() {
  return (
    <AreaPage
      area={{
        name: 'Glasgow',
        slug: 'glasgow',
        postcodes: ['G1', 'G2', 'G3', 'G4', 'G5'],
        introBlurb:
          'Broken down in Glasgow city centre? SRL Recovery dispatches immediately to all G1–G5 postcodes — from the Merchant City to Finnieston, Charing Cross to the Southside. 24/7 recovery with average arrival of 20–35 minutes.',
        routeBlurb:
          'Glasgow city centre is one of our busiest recovery zones — we\'re on the M8, M74, and inner-city arterials every single day. We recover from the Kingston Bridge, the M8 urban section at Charing Cross, the Clydeside Expressway, and every major street from Sauchiehall to Argyle Street. Car parks, multi-storeys, retail parks, roadside — wherever you\'re stuck in G1 to G5, we\'ll get to you fast.',
        responseTime: '20–35 mins',
        nearbyAreas: ['Govan', 'Partick', 'Gorbals', 'Rutherglen', 'Cambuslang'],
      }}
    />
  )
}

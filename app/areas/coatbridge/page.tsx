import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Coatbridge | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Coatbridge. Average arrival 30–45 minutes. From £50 local recovery. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/coatbridge' },
}

export default function CoatbridgePage() {
  return (
    <AreaPage
      area={{
        name: 'Coatbridge',
        slug: 'coatbridge',
        postcodes: ['ML5'],
        introBlurb:
          'Broken down in Coatbridge? SRL Recovery covers ML5 24 hours a day for breakdowns, accidents, and transport. Average arrival 30–45 minutes from your call.',
        routeBlurb:
          'Coatbridge is well-covered by our team — particularly the M8 junctions 7 to 9, the A89, A752, and A725 routes that run through the area. We handle regular jobs across the town centre, Townhead, Old Monkland, Whifflet, and the surrounding industrial estates. Wherever you are in ML5 we’ll be with you fast.',
        responseTime: '20–40 mins',
        nearbyAreas: ['Airdrie', 'Motherwell', 'Bellshill', 'Glasgow', 'Bargeddie'],
      }}
    />
  )
}
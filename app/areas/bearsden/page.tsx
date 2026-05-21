import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Bearsden | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Bearsden. Average arrival 30–45 minutes. From £60. Call 07776 356 556.',
  alternates: { canonical: '/areas/bearsden' },
}

export default function BearsdenPage() {
  return (
    <AreaPage
      area={{
        name: 'Bearsden',
        slug: 'bearsden',
        postcodes: ['G61'],
        introBlurb:
          'Need recovery in Bearsden? SRL Recovery covers G61 24 hours a day for breakdowns, accidents, and vehicle transport. Average arrival 30–45 minutes from your call.',
        routeBlurb:
          'Bearsden sits on the A809 and A810 corridor — major routes we cover daily. We handle regular work across Bearsden Cross, Westerton, Killermont, and Milngavie Road, plus the A81 toward Milngavie and the A739 down into Anniesland. Whether you’re stuck on a residential street, at Bearsden Academy, or at Westerton train station, we’ll get to you fast.',
        responseTime: '30–45 mins',
        nearbyAreas: ['Milngavie', 'Glasgow', 'Anniesland', 'Maryhill', 'Drumchapel'],
      }}
    />
  )
}
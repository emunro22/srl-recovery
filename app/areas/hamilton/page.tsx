import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Breakdown Recovery Hamilton | 24/7 Car Recovery | SRL Recovery',
  description:
    'Fast 24/7 breakdown and accident recovery in Hamilton. Average arrival 30–45 minutes. From £60 local recovery. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/hamilton' },
}

export default function HamiltonPage() {
  return (
    <AreaPage
      area={{
        name: 'Hamilton',
        slug: 'hamilton',
        postcodes: ['ML3', 'ML9'],
        introBlurb:
          'Need a recovery in Hamilton? SRL Recovery covers ML3 and ML9 around the clock for breakdowns, accidents, and vehicle transport. Average arrival 30–45 minutes from your call.',
        routeBlurb:
          'We work jobs across Hamilton most days — covering the town centre, Burnbank, Hillhouse, Whitehill, Earnock, and Strathaven Road. The M74 (junctions 6 to 9) is a particularly common stretch for our team, along with the A723 and A724. Wherever you are in ML3 or ML9, we’ll get to you fast.',
        responseTime: '25–45 mins',
        nearbyAreas: ['Motherwell', 'East Kilbride', 'Bothwell', 'Strathaven', 'Larkhall'],
        relatedRoutes: [
          {
            href: '/routes/hamilton-to-carlisle',
            title: 'Hamilton to Carlisle Recovery',
            description: 'M74/A74(M) southbound corridor — section-by-section coverage from Hamilton to the English border and beyond.',
          },
        ],
      }}
    />
  )
}
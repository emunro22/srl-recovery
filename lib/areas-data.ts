// Facts for the 30 existing /areas/{slug} hub pages, extracted for reuse by the
// /areas/{slug}/{angle} "near me" sub-pages. The hub pages themselves
// (app/areas/*/page.tsx) are untouched and remain the source of truth for their
// own hero copy — this file only carries the structured facts needed to build
// fresh, area-specific copy for the angle pages.

export type AreaFacts = {
  slug: string
  name: string
  postcodes: string[]
  responseTime: string
  nearbyAreas: string[]
}

export const areasData: AreaFacts[] = [
  {
    slug: 'abington',
    name: 'Abington',
    postcodes: ['ML12'],
    responseTime: '45–60 mins',
    nearbyAreas: ['Hamilton', 'Larkhall', 'Carluke', 'Lanark', 'Lesmahagow'],
  },
  {
    slug: 'airdrie',
    name: 'Airdrie',
    postcodes: ['ML6'],
    responseTime: '25–40 mins',
    nearbyAreas: ['Coatbridge', 'Motherwell', 'Bellshill', 'Chapelhall', 'Plains'],
  },
  {
    slug: 'argyll-and-bute',
    name: 'Argyll and Bute',
    postcodes: ['G84', 'PA23', 'PA24', 'PA25', 'PA26'],
    responseTime: '60–120 mins',
    nearbyAreas: ['Loch Lomond', 'Dumbarton', 'Helensburgh', 'Dunoon', 'Inveraray'],
  },
  {
    slug: 'barrhead',
    name: 'Barrhead',
    postcodes: ['G78'],
    responseTime: '30–45 mins',
    nearbyAreas: ['Glasgow', 'Newton Mearns', 'Paisley', 'East Kilbride', 'Neilston'],
  },
  {
    slug: 'bearsden',
    name: 'Bearsden',
    postcodes: ['G61'],
    responseTime: '30–45 mins',
    nearbyAreas: ['Milngavie', 'Glasgow', 'Anniesland', 'Maryhill', 'Drumchapel'],
  },
  {
    slug: 'bellshill',
    name: 'Bellshill',
    postcodes: ['ML4'],
    responseTime: '20–35 mins',
    nearbyAreas: ['Motherwell', 'Coatbridge', 'Uddingston', 'Hamilton', 'Holytown'],
  },
  {
    slug: 'bishopbriggs',
    name: 'Bishopbriggs',
    postcodes: ['G64'],
    responseTime: '30–45 mins',
    nearbyAreas: ['Glasgow', 'Kirkintilloch', 'Bearsden', 'Milngavie', 'Stepps'],
  },
  {
    slug: 'blantyre',
    name: 'Blantyre',
    postcodes: ['G72'],
    responseTime: '20–30 mins',
    nearbyAreas: ['Hamilton', 'Cambuslang', 'Motherwell', 'East Kilbride', 'Uddingston'],
  },
  {
    slug: 'cambuslang',
    name: 'Cambuslang',
    postcodes: ['G72'],
    responseTime: '25–40 mins',
    nearbyAreas: ['Rutherglen', 'East Kilbride', 'Hamilton', 'Glasgow', 'Uddingston'],
  },
  {
    slug: 'carluke',
    name: 'Carluke',
    postcodes: ['ML8'],
    responseTime: '30–45 mins',
    nearbyAreas: ['Motherwell', 'Lanark', 'Larkhall', 'Wishaw', 'Lesmahagow'],
  },
  {
    slug: 'clydebank',
    name: 'Clydebank',
    postcodes: ['G81'],
    responseTime: '30–45 mins',
    nearbyAreas: ['Glasgow', 'Bearsden', 'Dumbarton', 'Drumchapel', 'Erskine'],
  },
  {
    slug: 'coatbridge',
    name: 'Coatbridge',
    postcodes: ['ML5'],
    responseTime: '20–40 mins',
    nearbyAreas: ['Airdrie', 'Motherwell', 'Bellshill', 'Glasgow', 'Bargeddie'],
  },
  {
    slug: 'cumbernauld',
    name: 'Cumbernauld',
    postcodes: ['G67', 'G68'],
    responseTime: '30–45 mins',
    nearbyAreas: ['Airdrie', 'Coatbridge', 'Kirkintilloch', 'Kilsyth', 'Motherwell'],
  },
  {
    slug: 'dumbarton',
    name: 'Dumbarton',
    postcodes: ['G82'],
    responseTime: '35–50 mins',
    nearbyAreas: ['Clydebank', 'Helensburgh', 'Balloch', 'Erskine', 'Alexandria'],
  },
  {
    slug: 'east-kilbride',
    name: 'East Kilbride',
    postcodes: ['G74', 'G75'],
    responseTime: '30–45 mins',
    nearbyAreas: ['Glasgow', 'Hamilton', 'Rutherglen', 'Cambuslang', 'Strathaven'],
  },
  {
    slug: 'giffnock',
    name: 'Giffnock',
    postcodes: ['G46'],
    responseTime: '30–45 mins',
    nearbyAreas: ['Newton Mearns', 'Glasgow', 'Barrhead', 'Clarkston', 'East Kilbride'],
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    postcodes: ['G1', 'G2', 'G3', 'G4', 'G5'],
    responseTime: '20–35 mins',
    nearbyAreas: ['Govan', 'Partick', 'Gorbals', 'Rutherglen', 'Cambuslang'],
  },
  {
    slug: 'hamilton',
    name: 'Hamilton',
    postcodes: ['ML3', 'ML9'],
    responseTime: '25–45 mins',
    nearbyAreas: ['Motherwell', 'East Kilbride', 'Bothwell', 'Strathaven', 'Larkhall'],
  },
  {
    slug: 'johnstone',
    name: 'Johnstone',
    postcodes: ['PA5', 'PA10'],
    responseTime: '30–50 mins',
    nearbyAreas: ['Paisley', 'Renfrew', 'Linwood', 'Bridge of Weir', 'Kilbarchan'],
  },
  {
    slug: 'kirkintilloch',
    name: 'Kirkintilloch',
    postcodes: ['G66'],
    responseTime: '30–50 mins',
    nearbyAreas: ['Cumbernauld', 'Bishopbriggs', 'Bearsden', 'Lenzie', 'Stepps'],
  },
  {
    slug: 'larkhall',
    name: 'Larkhall',
    postcodes: ['ML9'],
    responseTime: '25–40 mins',
    nearbyAreas: ['Hamilton', 'Motherwell', 'Carluke', 'Stonehouse', 'Strathaven'],
  },
  {
    slug: 'loch-lomond',
    name: 'Loch Lomond',
    postcodes: ['G83'],
    responseTime: '45–65 mins',
    nearbyAreas: ['Dumbarton', 'Argyll and Bute', 'Helensburgh', 'Balloch', 'Alexandria'],
  },
  {
    slug: 'motherwell',
    name: 'Motherwell',
    postcodes: ['ML1', 'ML2', 'ML3', 'ML4'],
    responseTime: '20–40 mins',
    nearbyAreas: ['Wishaw', 'Hamilton', 'Bellshill', 'Coatbridge', 'Cleland'],
  },
  {
    slug: 'newton-mearns',
    name: 'Newton Mearns',
    postcodes: ['G77'],
    responseTime: '30–45 mins',
    nearbyAreas: ['Glasgow', 'Giffnock', 'Barrhead', 'East Kilbride', 'Eaglesham'],
  },
  {
    slug: 'paisley',
    name: 'Paisley',
    postcodes: ['PA1', 'PA2', 'PA3', 'PA4', 'PA5', 'PA6'],
    responseTime: '30–45 mins',
    nearbyAreas: ['Glasgow', 'Renfrew', 'Johnstone', 'Linwood', 'Bishopton'],
  },
  {
    slug: 'renfrew',
    name: 'Renfrew',
    postcodes: ['PA4'],
    responseTime: '25–40 mins',
    nearbyAreas: ['Paisley', 'Glasgow', 'Clydebank', 'Johnstone', 'Glasgow Airport'],
  },
  {
    slug: 'rutherglen',
    name: 'Rutherglen',
    postcodes: ['G73'],
    responseTime: '25–40 mins',
    nearbyAreas: ['Cambuslang', 'Glasgow', 'East Kilbride', 'Hamilton', 'Burnside'],
  },
  {
    slug: 'uddingston',
    name: 'Uddingston',
    postcodes: ['G71'],
    responseTime: '20–35 mins',
    nearbyAreas: ['Motherwell', 'Hamilton', 'Bellshill', 'Cambuslang', 'Blantyre'],
  },
  {
    slug: 'wishaw',
    name: 'Wishaw',
    postcodes: ['ML2'],
    responseTime: '20–35 mins',
    nearbyAreas: ['Motherwell', 'Newmains', 'Overtown', 'Carluke', 'Cleland'],
  },
]

export function getAreaBySlug(slug: string): AreaFacts | undefined {
  return areasData.find((a) => a.slug === slug)
}

// Only nearby-area names that resolve to a real /areas/{slug} hub page are
// useful as cross-links — many nearbyAreas entries are neighbourhoods/villages
// without their own page.
export function getLinkableNearbyAreas(area: AreaFacts, max = 3): AreaFacts[] {
  const matches = area.nearbyAreas
    .map((n) => areasData.find((a) => a.name === n))
    .filter((a): a is AreaFacts => Boolean(a) && a!.slug !== area.slug)
  return matches.slice(0, max)
}

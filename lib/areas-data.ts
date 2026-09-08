// Facts for the 30 existing /areas/{slug} hub pages, extracted for reuse by the
// /areas/{slug}/{angle} "near me" sub-pages. The hub pages themselves
// (app/areas/*/page.tsx) are untouched and remain the source of truth for their
// own hero copy. This file only carries the structured facts needed to build
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
    responseTime: '45 to 60 mins',
    nearbyAreas: ['Hamilton', 'Larkhall', 'Carluke', 'Lanark', 'Lesmahagow'],
  },
  {
    slug: 'airdrie',
    name: 'Airdrie',
    postcodes: ['ML6'],
    responseTime: '25 to 40 mins',
    nearbyAreas: ['Coatbridge', 'Motherwell', 'Bellshill', 'Chapelhall', 'Plains'],
  },
  {
    slug: 'argyll-and-bute',
    name: 'Argyll and Bute',
    postcodes: ['G84', 'PA23', 'PA24', 'PA25', 'PA26'],
    responseTime: '60 to 120 mins',
    nearbyAreas: ['Loch Lomond', 'Dumbarton', 'Helensburgh', 'Dunoon', 'Inveraray'],
  },
  {
    slug: 'barrhead',
    name: 'Barrhead',
    postcodes: ['G78'],
    responseTime: '30 to 45 mins',
    nearbyAreas: ['Glasgow', 'Newton Mearns', 'Paisley', 'East Kilbride', 'Neilston'],
  },
  {
    slug: 'bearsden',
    name: 'Bearsden',
    postcodes: ['G61'],
    responseTime: '30 to 45 mins',
    nearbyAreas: ['Milngavie', 'Glasgow', 'Anniesland', 'Maryhill', 'Drumchapel'],
  },
  {
    slug: 'bellshill',
    name: 'Bellshill',
    postcodes: ['ML4'],
    responseTime: '20 to 35 mins',
    nearbyAreas: ['Motherwell', 'Coatbridge', 'Uddingston', 'Hamilton', 'Holytown'],
  },
  {
    slug: 'bishopbriggs',
    name: 'Bishopbriggs',
    postcodes: ['G64'],
    responseTime: '30 to 45 mins',
    nearbyAreas: ['Glasgow', 'Kirkintilloch', 'Bearsden', 'Milngavie', 'Stepps'],
  },
  {
    slug: 'blantyre',
    name: 'Blantyre',
    postcodes: ['G72'],
    responseTime: '20 to 30 mins',
    nearbyAreas: ['Hamilton', 'Cambuslang', 'Motherwell', 'East Kilbride', 'Uddingston'],
  },
  {
    slug: 'cambuslang',
    name: 'Cambuslang',
    postcodes: ['G72'],
    responseTime: '25 to 40 mins',
    nearbyAreas: ['Rutherglen', 'East Kilbride', 'Hamilton', 'Glasgow', 'Uddingston'],
  },
  {
    slug: 'carluke',
    name: 'Carluke',
    postcodes: ['ML8'],
    responseTime: '30 to 45 mins',
    nearbyAreas: ['Motherwell', 'Lanark', 'Larkhall', 'Wishaw', 'Lesmahagow'],
  },
  {
    slug: 'clydebank',
    name: 'Clydebank',
    postcodes: ['G81'],
    responseTime: '30 to 45 mins',
    nearbyAreas: ['Glasgow', 'Bearsden', 'Dumbarton', 'Drumchapel', 'Erskine'],
  },
  {
    slug: 'coatbridge',
    name: 'Coatbridge',
    postcodes: ['ML5'],
    responseTime: '20 to 40 mins',
    nearbyAreas: ['Airdrie', 'Motherwell', 'Bellshill', 'Glasgow', 'Bargeddie'],
  },
  {
    slug: 'cumbernauld',
    name: 'Cumbernauld',
    postcodes: ['G67', 'G68'],
    responseTime: '30 to 45 mins',
    nearbyAreas: ['Airdrie', 'Coatbridge', 'Kirkintilloch', 'Kilsyth', 'Motherwell'],
  },
  {
    slug: 'dumbarton',
    name: 'Dumbarton',
    postcodes: ['G82'],
    responseTime: '35 to 50 mins',
    nearbyAreas: ['Clydebank', 'Helensburgh', 'Balloch', 'Erskine', 'Alexandria'],
  },
  {
    slug: 'east-kilbride',
    name: 'East Kilbride',
    postcodes: ['G74', 'G75'],
    responseTime: '30 to 45 mins',
    nearbyAreas: ['Glasgow', 'Hamilton', 'Rutherglen', 'Cambuslang', 'Strathaven'],
  },
  {
    slug: 'giffnock',
    name: 'Giffnock',
    postcodes: ['G46'],
    responseTime: '30 to 45 mins',
    nearbyAreas: ['Newton Mearns', 'Glasgow', 'Barrhead', 'Clarkston', 'East Kilbride'],
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    postcodes: ['G1', 'G2', 'G3', 'G4', 'G5'],
    responseTime: '20 to 35 mins',
    nearbyAreas: ['Govan', 'Partick', 'Gorbals', 'Rutherglen', 'Cambuslang'],
  },
  {
    slug: 'hamilton',
    name: 'Hamilton',
    postcodes: ['ML3', 'ML9'],
    responseTime: '25 to 45 mins',
    nearbyAreas: ['Motherwell', 'East Kilbride', 'Bothwell', 'Strathaven', 'Larkhall'],
  },
  {
    slug: 'johnstone',
    name: 'Johnstone',
    postcodes: ['PA5', 'PA10'],
    responseTime: '30 to 50 mins',
    nearbyAreas: ['Paisley', 'Renfrew', 'Linwood', 'Bridge of Weir', 'Kilbarchan'],
  },
  {
    slug: 'kirkintilloch',
    name: 'Kirkintilloch',
    postcodes: ['G66'],
    responseTime: '30 to 50 mins',
    nearbyAreas: ['Cumbernauld', 'Bishopbriggs', 'Bearsden', 'Lenzie', 'Stepps'],
  },
  {
    slug: 'larkhall',
    name: 'Larkhall',
    postcodes: ['ML9'],
    responseTime: '25 to 40 mins',
    nearbyAreas: ['Hamilton', 'Motherwell', 'Carluke', 'Stonehouse', 'Strathaven'],
  },
  {
    slug: 'loch-lomond',
    name: 'Loch Lomond',
    postcodes: ['G83'],
    responseTime: '45 to 65 mins',
    nearbyAreas: ['Dumbarton', 'Argyll and Bute', 'Helensburgh', 'Balloch', 'Alexandria'],
  },
  {
    slug: 'motherwell',
    name: 'Motherwell',
    postcodes: ['ML1', 'ML2', 'ML3', 'ML4'],
    responseTime: '20 to 40 mins',
    nearbyAreas: ['Wishaw', 'Hamilton', 'Bellshill', 'Coatbridge', 'Cleland'],
  },
  {
    slug: 'newton-mearns',
    name: 'Newton Mearns',
    postcodes: ['G77'],
    responseTime: '30 to 45 mins',
    nearbyAreas: ['Glasgow', 'Giffnock', 'Barrhead', 'East Kilbride', 'Eaglesham'],
  },
  {
    slug: 'paisley',
    name: 'Paisley',
    postcodes: ['PA1', 'PA2', 'PA3', 'PA4', 'PA5', 'PA6'],
    responseTime: '30 to 45 mins',
    nearbyAreas: ['Glasgow', 'Renfrew', 'Johnstone', 'Linwood', 'Bishopton'],
  },
  {
    slug: 'renfrew',
    name: 'Renfrew',
    postcodes: ['PA4'],
    responseTime: '25 to 40 mins',
    nearbyAreas: ['Paisley', 'Glasgow', 'Clydebank', 'Johnstone', 'Glasgow Airport'],
  },
  {
    slug: 'rutherglen',
    name: 'Rutherglen',
    postcodes: ['G73'],
    responseTime: '25 to 40 mins',
    nearbyAreas: ['Cambuslang', 'Glasgow', 'East Kilbride', 'Hamilton', 'Burnside'],
  },
  {
    slug: 'uddingston',
    name: 'Uddingston',
    postcodes: ['G71'],
    responseTime: '20 to 35 mins',
    nearbyAreas: ['Motherwell', 'Hamilton', 'Bellshill', 'Cambuslang', 'Blantyre'],
  },
  {
    slug: 'wishaw',
    name: 'Wishaw',
    postcodes: ['ML2'],
    responseTime: '20 to 35 mins',
    nearbyAreas: ['Motherwell', 'Newmains', 'Overtown', 'Carluke', 'Cleland'],
  },
  {
    slug: 'greenock',
    name: 'Greenock',
    postcodes: ['PA15', 'PA16'],
    responseTime: '50 to 75 mins',
    nearbyAreas: ['Port Glasgow', 'Paisley', 'Johnstone', 'Renfrew', 'Clydebank'],
  },
  {
    slug: 'port-glasgow',
    name: 'Port Glasgow',
    postcodes: ['PA14'],
    responseTime: '50 to 70 mins',
    nearbyAreas: ['Greenock', 'Paisley', 'Johnstone', 'Renfrew', 'Clydebank'],
  },
  {
    slug: 'stirling',
    name: 'Stirling',
    postcodes: ['FK7', 'FK8', 'FK9'],
    responseTime: '45 to 70 mins',
    nearbyAreas: ['Falkirk', 'Alloa', 'Cumbernauld', 'Kirkintilloch', 'Loch Lomond'],
  },
  {
    slug: 'falkirk',
    name: 'Falkirk',
    postcodes: ['FK1', 'FK2'],
    responseTime: '35 to 55 mins',
    nearbyAreas: ['Cumbernauld', 'Stirling', 'Alloa', 'Airdrie', 'Kirkintilloch'],
  },
  {
    slug: 'alloa',
    name: 'Alloa',
    postcodes: ['FK10'],
    responseTime: '50 to 75 mins',
    nearbyAreas: ['Stirling', 'Falkirk', 'Cumbernauld', 'Kirkintilloch'],
  },
  {
    slug: 'lanark',
    name: 'Lanark',
    postcodes: ['ML11'],
    responseTime: '35 to 50 mins',
    nearbyAreas: ['Carluke', 'Larkhall', 'Hamilton', 'Abington', 'Wishaw'],
  },
  {
    slug: 'lanarkshire',
    name: 'Lanarkshire',
    postcodes: ['ML1', 'ML2', 'ML3', 'ML4', 'ML5', 'ML6', 'ML8', 'ML9', 'ML11', 'G72', 'G73', 'G74', 'G75'],
    responseTime: '20 to 40 mins',
    nearbyAreas: ['Motherwell', 'Hamilton', 'Coatbridge', 'Airdrie', 'Wishaw'],
  },
  {
    slug: 'shotts',
    name: 'Shotts',
    postcodes: ['ML7'],
    responseTime: '25 to 40 mins',
    nearbyAreas: ['Wishaw', 'Motherwell', 'Airdrie', 'Bathgate', 'Harthill'],
  },
  {
    slug: 'bathgate',
    name: 'Bathgate',
    postcodes: ['EH48'],
    responseTime: '40 to 60 mins',
    nearbyAreas: ['Livingston', 'Shotts', 'Falkirk', 'Airdrie', 'Armadale'],
  },
  {
    slug: 'livingston',
    name: 'Livingston',
    postcodes: ['EH54'],
    responseTime: '45 to 65 mins',
    nearbyAreas: ['Bathgate', 'Edinburgh', 'Shotts', 'Falkirk', 'Broxburn'],
  },
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    postcodes: ['EH1', 'EH2', 'EH3', 'EH4', 'EH6', 'EH7', 'EH8', 'EH11', 'EH12'],
    responseTime: '55 to 80 mins',
    nearbyAreas: ['Livingston', 'Bathgate', 'Falkirk', 'Musselburgh', 'Leith'],
  },
  {
    slug: 'perth',
    name: 'Perth',
    postcodes: ['PH1', 'PH2'],
    responseTime: '75 to 110 mins',
    nearbyAreas: ['Stirling', 'Alloa', 'Dunblane', 'Auchterarder', 'Dundee'],
  },
  {
    slug: 'moffat',
    name: 'Moffat',
    postcodes: ['DG10'],
    responseTime: '60 to 85 mins',
    nearbyAreas: ['Abington', 'Carlisle', 'Lockerbie', 'Beattock', 'Dumfries'],
  },
  {
    slug: 'carlisle',
    name: 'Carlisle',
    postcodes: ['CA1', 'CA2', 'CA3', 'CA4', 'CA5', 'CA6'],
    responseTime: '90 to 130 mins',
    nearbyAreas: ['Moffat', 'Abington', 'Gretna', 'Lockerbie', 'Penrith'],
  },
  {
    slug: 'stranraer',
    name: 'Stranraer',
    postcodes: ['DG9'],
    responseTime: '150 to 210 mins',
    nearbyAreas: ['Cairnryan', 'Newton Stewart', 'Girvan', 'Ayr', 'Dumfries'],
  },
]

export function getAreaBySlug(slug: string): AreaFacts | undefined {
  return areasData.find((a) => a.slug === slug)
}

// Only nearby-area names that resolve to a real /areas/{slug} hub page are
// useful as cross-links: many nearbyAreas entries are neighbourhoods/villages
// without their own page.
export function getLinkableNearbyAreas(area: AreaFacts, max = 3): AreaFacts[] {
  const matches = area.nearbyAreas
    .map((n) => areasData.find((a) => a.name === n))
    .filter((a): a is AreaFacts => Boolean(a) && a!.slug !== area.slug)
  return matches.slice(0, max)
}

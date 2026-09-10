// Coordinates and zone helpers behind the coverage maps.
//
// Both rings are drawn from the Cambuslang yard at G72 7SH, not from the town
// the page is about. A 30-mile ring around Stranraer would say nothing about how
// fast we get there; a 30-mile ring around G72 is exactly the promise being made
// (~30 minute average arrival), and the town's own pin shows which zone it lands
// in. The outer 60-mile ring is the slower-but-still-routine zone, and beyond it
// we still travel, just on a quoted price.

export type LatLng = { lat: number; lng: number }

/** The two yards we dispatch from. Cambuslang (G72 7SH) is the centre of both
 *  coverage rings across the whole site. */
export const BASES: { name: string; postcode: string; lat: number; lng: number }[] = [
  { name: 'Motherwell', postcode: 'ML1', lat: 55.7916, lng: -3.9852 },
  { name: 'Cambuslang', postcode: 'G72 7SH', lat: 55.8217724, lng: -4.1395602 },
]

/** G72 7SH: the point both rings are measured from. */
export const HQ: LatLng = { lat: 55.8217724, lng: -4.1395602 }

/** Green zone: inside this we quote the ~30 minute average arrival. */
export const GREEN_RADIUS_MILES = 30

/** Yellow zone: still routine work, just a longer run. */
export const YELLOW_RADIUS_MILES = 60

export type Zone = 'green' | 'yellow' | 'beyond'

/** Ring colours, shared by the maps and their legends so the two never drift. */
export const ZONE_COLOURS: Record<'green' | 'yellow', string> = {
  green: '#1fbf6b',
  yellow: '#e8a704',
}

export const MILES_TO_METRES = 1609.344

/** Pin position for each /areas/{slug} page, used to show where the town sits
 *  relative to the two rings. `scotland` is deliberately absent: the nationwide
 *  page has no single point to pin. */
export const AREA_COORDS: Record<string, LatLng> = {
  abington: { lat: 55.4923, lng: -3.6928 },
  airdrie: { lat: 55.8657, lng: -3.98 },
  alloa: { lat: 56.1165, lng: -3.79 },
  'argyll-and-bute': { lat: 56.231, lng: -5.073 },
  barrhead: { lat: 55.8, lng: -4.393 },
  bathgate: { lat: 55.902, lng: -3.6417 },
  bearsden: { lat: 55.9203, lng: -4.3338 },
  bellshill: { lat: 55.8146, lng: -4.0214 },
  bishopbriggs: { lat: 55.9, lng: -4.22 },
  blantyre: { lat: 55.796, lng: -4.093 },
  cambuslang: { lat: 55.8217724, lng: -4.1395602 },
  carlisle: { lat: 54.8925, lng: -2.9329 },
  carluke: { lat: 55.737, lng: -3.84 },
  clydebank: { lat: 55.9018, lng: -4.4001 },
  coatbridge: { lat: 55.8624, lng: -4.0289 },
  cumbernauld: { lat: 55.945, lng: -3.993 },
  dumbarton: { lat: 55.9456, lng: -4.5662 },
  'east-kilbride': { lat: 55.7644, lng: -4.1769 },
  edinburgh: { lat: 55.9533, lng: -3.1883 },
  falkirk: { lat: 56.0019, lng: -3.7839 },
  giffnock: { lat: 55.805, lng: -4.295 },
  glasgow: { lat: 55.8642, lng: -4.2518 },
  greenock: { lat: 55.95, lng: -4.76 },
  hamilton: { lat: 55.7775, lng: -4.053 },
  johnstone: { lat: 55.834, lng: -4.51 },
  kirkintilloch: { lat: 55.939, lng: -4.155 },
  lanark: { lat: 55.675, lng: -3.777 },
  lanarkshire: { lat: 55.77, lng: -3.98 },
  larkhall: { lat: 55.737, lng: -3.97 },
  livingston: { lat: 55.8862, lng: -3.5169 },
  'loch-lomond': { lat: 56.1009, lng: -4.6394 },
  moffat: { lat: 55.3325, lng: -3.44 },
  motherwell: { lat: 55.7916, lng: -3.9852 },
  'newton-mearns': { lat: 55.772, lng: -4.335 },
  paisley: { lat: 55.8467, lng: -4.4239 },
  perth: { lat: 56.395, lng: -3.4308 },
  'port-glasgow': { lat: 55.933, lng: -4.69 },
  renfrew: { lat: 55.872, lng: -4.39 },
  rutherglen: { lat: 55.8266, lng: -4.2128 },
  shotts: { lat: 55.8199, lng: -3.7996 },
  stirling: { lat: 56.1165, lng: -3.9369 },
  stranraer: { lat: 54.9046, lng: -5.027 },
  uddingston: { lat: 55.818, lng: -4.093 },
  wishaw: { lat: 55.773, lng: -3.92 },
}

export function getAreaCoords(slug: string): LatLng | undefined {
  return AREA_COORDS[slug]
}

/** Great-circle distance in miles. */
export function distanceMiles(a: LatLng, b: LatLng): number {
  const R = 3958.7613 // mean Earth radius in miles
  const toRad = (d: number) => (d * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const lat1 = toRad(a.lat)
  const lat2 = toRad(b.lat)
  const h =
    Math.sin(dLat / 2) ** 2 + Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2)
  return 2 * R * Math.asin(Math.sqrt(h))
}

/** Distance from a point to whichever of our two yards is closer. */
export function milesFromNearestBase(point: LatLng): number {
  return Math.min(...BASES.map((b) => distanceMiles(point, b)))
}

/** Straight-line miles from G72 7SH, which is what the rings are drawn against. */
export function milesFromHQ(point: LatLng): number {
  return distanceMiles(HQ, point)
}

/** Which coverage ring a point falls in. */
export function zoneFor(point: LatLng): Zone {
  const miles = milesFromHQ(point)
  if (miles <= GREEN_RADIUS_MILES) return 'green'
  if (miles <= YELLOW_RADIUS_MILES) return 'yellow'
  return 'beyond'
}

/** Turns a page's "20 to 40 mins" response window into the single average
 *  figure shown on the coverage map ("About 30 mins", "About 3 hrs"). Falls
 *  back to the raw string if the window is not in the expected format. */
export function averageArrivalLabel(responseTime: string): string {
  const match = responseTime.match(/(\d+)\s*to\s*(\d+)/i)
  if (!match) return responseTime

  const midpoint = (Number(match[1]) + Number(match[2])) / 2
  if (midpoint < 90) return `About ${Math.round(midpoint / 5) * 5} mins`

  // Long-haul pages read better in hours than in three-figure minute counts.
  const rounded = Math.round(midpoint / 15) * 15
  const hours = Math.floor(rounded / 60)
  const mins = rounded % 60
  const hourPart = `${hours} ${hours === 1 ? 'hr' : 'hrs'}`
  return mins ? `About ${hourPart} ${mins} mins` : `About ${hourPart}`
}

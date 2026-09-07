import AreaPage from '@/components/AreaPage'

export const metadata = {
  title: 'Car Recovery Lanarkshire | 24/7 Breakdown Recovery | SRL Recovery',
  description:
    'Car recovery across Lanarkshire, 24/7. Motherwell, Hamilton, Coatbridge, Airdrie, Wishaw, Bellshill, East Kilbride and the M74 corridor. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/areas/lanarkshire' },
}

export default function LanarkshirePage() {
  return (
    <AreaPage
      area={{
        name: 'Lanarkshire',
        slug: 'lanarkshire',
        postcodes: ['ML1', 'ML2', 'ML3', 'ML4', 'ML5', 'ML6', 'ML8', 'ML9', 'ML11', 'G72', 'G73', 'G74', 'G75'],
        introBlurb:
          'SRL Recovery is a Lanarkshire based recovery operator, which is why our fastest response times anywhere are here. We cover North and South Lanarkshire around the clock for breakdowns, accidents, commercial vehicles and transport, with an average arrival of 20 to 40 minutes.',
        routeBlurb:
          'Our base sits in the middle of Lanarkshire, so the towns here get the quickest dispatch we offer. We cover Motherwell, Hamilton, Bellshill, Coatbridge, Airdrie, Wishaw, Larkhall, Carluke, Lanark, Blantyre, Uddingston, East Kilbride, Cambuslang and Rutherglen, along with the M74 junctions 1 to 11, the M8 junctions 6 to 9, the M73, and the A725 and A726 expressways. Between the Eurocentral and Bellshill industrial estates and the M74 freight corridor this is heavy commercial vehicle territory, and vans and light commercials make up a large share of what we recover here.',
        responseTime: '20 to 40 mins',
        nearbyAreas: ['Motherwell', 'Hamilton', 'Coatbridge', 'Airdrie', 'Wishaw'],
      }}
    />
  )
}

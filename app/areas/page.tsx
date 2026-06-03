import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Areas We Cover | 24/7 Breakdown Recovery Glasgow & Central Scotland | SRL Recovery',
  description:
    'SRL Recovery covers Glasgow and Central Scotland 24/7 — Motherwell, Hamilton, Paisley, East Kilbride, Wishaw, Airdrie, Cumbernauld, and 20+ more areas. Find your area.',
  alternates: { canonical: '/areas' },
}

const AREAS = [
  {
    name: 'Bearsden',
    slug: 'bearsden',
    postcodes: ['G61'],
    desc: '30–45 min average response. Coverage across Bearsden Cross, Westerton, Killermont and the A809/A810 corridor.',
  },
  {
    name: 'Bellshill',
    slug: 'bellshill',
    postcodes: ['ML4'],
    desc: 'Fast response to Bellshill, Mossend and Orbiston. Handy for the M74 and M8 interchange at Raith.',
  },
  {
    name: 'Cambuslang',
    slug: 'cambuslang',
    postcodes: ['G72'],
    desc: 'Covering Cambuslang, Rutherglen Rd and Newton corridors day and night.',
  },
  {
    name: 'Clydebank',
    slug: 'clydebank',
    postcodes: ['G81'],
    desc: 'Quick access via the A814 and Dumbarton Road. Great Dunbarton Road and Clydeside Expressway covered.',
  },
  {
    name: 'Coatbridge',
    slug: 'coatbridge',
    postcodes: ['ML5'],
    desc: 'M8 and A89 corridor — fast dispatch to Coatbridge, Whifflet and Blairhill.',
  },
  {
    name: 'Dumbarton',
    slug: 'dumbarton',
    postcodes: ['G82'],
    desc: 'Covering Dumbarton, Alexandria and the Vale of Leven. A82 dual carriageway regularly served.',
  },
  {
    name: 'East Kilbride',
    slug: 'east-kilbride',
    postcodes: ['G74', 'G75'],
    desc: 'Major hub south of Glasgow. Covers East Kilbride town centre, Hairmyres, Nerston and M77 access.',
  },
  {
    name: 'Hamilton',
    slug: 'hamilton',
    postcodes: ['ML3'],
    desc: 'Central Scotland coverage — Hamilton, Blantyre, Larkhall and the M74 J5-J6 corridor.',
  },
  {
    name: 'Motherwell',
    slug: 'motherwell',
    postcodes: ['ML1'],
    desc: '24/7 recovery across Motherwell, Wishaw and Newarthill, with fast M74/M8 access.',
  },
  {
    name: 'Paisley',
    slug: 'paisley',
    postcodes: ['PA1', 'PA2', 'PA3'],
    desc: 'Serving Paisley, Renfrew, Johnstone and Glasgow Airport corridor on the M8.',
  },
  {
    name: 'Rutherglen',
    slug: 'rutherglen',
    postcodes: ['G73'],
    desc: 'Close to Glasgow city centre — Rutherglen main street, Fernhill and Cambuslang Road covered.',
  },
  {
    name: 'Glasgow City Centre',
    slug: 'glasgow',
    postcodes: ['G1', 'G2', 'G3', 'G4', 'G5'],
    desc: 'Full inner-city coverage — M8 urban section, Kingston Bridge, Charing Cross and all city-centre roads.',
  },
  {
    name: 'Wishaw',
    slug: 'wishaw',
    postcodes: ['ML2'],
    desc: 'Right next to our Motherwell base — one of our fastest response areas across the ML2 postcode.',
  },
  {
    name: 'Airdrie',
    slug: 'airdrie',
    postcodes: ['ML6'],
    desc: 'Covering Airdrie, Chapelhall and Caldercruix via the A73 and A89 corridors.',
  },
  {
    name: 'Cumbernauld',
    slug: 'cumbernauld',
    postcodes: ['G67', 'G68'],
    desc: 'M80 junctions 4–6 and full town coverage — Kildrum, Abronhill, Condorrat and more.',
  },
  {
    name: 'Kirkintilloch',
    slug: 'kirkintilloch',
    postcodes: ['G66'],
    desc: 'East Dunbartonshire coverage — Kirkintilloch, Lenzie, Lennoxtown and the A803 corridor.',
  },
  {
    name: 'Bishopbriggs',
    slug: 'bishopbriggs',
    postcodes: ['G64'],
    desc: 'North Glasgow suburbs — Bishopbriggs, Auchinairn, Cadder and Torrance covered.',
  },
  {
    name: 'Uddingston',
    slug: 'uddingston',
    postcodes: ['G71'],
    desc: 'M74 corridor town — fast response to Uddingston, Bothwell, Tannochside and Viewpark.',
  },
  {
    name: 'Newton Mearns',
    slug: 'newton-mearns',
    postcodes: ['G77'],
    desc: 'Busy M77 commuter corridor — Newton Mearns, Crookfur, Waterfoot and Eaglesham.',
  },
  {
    name: 'Barrhead',
    slug: 'barrhead',
    postcodes: ['G78'],
    desc: 'South Renfrewshire coverage — Barrhead, Neilston and surrounding villages on the A736.',
  },
  {
    name: 'Renfrew',
    slug: 'renfrew',
    postcodes: ['PA4'],
    desc: 'Glasgow Airport corridor — Renfrew, Braehead and Clydeside on the M8 J26/27.',
  },
  {
    name: 'Johnstone',
    slug: 'johnstone',
    postcodes: ['PA5', 'PA10'],
    desc: 'Western Renfrewshire — Johnstone, Linwood, Elderslie and Bridge of Weir on the A737.',
  },
  {
    name: 'Blantyre',
    slug: 'blantyre',
    postcodes: ['G72'],
    desc: 'M74 J5 corridor — fast access to Blantyre, Stonefield and High Blantyre from our Motherwell base.',
  },
  {
    name: 'Larkhall',
    slug: 'larkhall',
    postcodes: ['ML9'],
    desc: 'South Lanarkshire coverage — Larkhall, Stonehouse and surrounding villages via the A72.',
  },
  {
    name: 'Carluke',
    slug: 'carluke',
    postcodes: ['ML8'],
    desc: 'Clyde Valley coverage — Carluke, Law and Braidwood on the A73 and M74 J9 corridor.',
  },
  {
    name: 'Giffnock',
    slug: 'giffnock',
    postcodes: ['G46'],
    desc: 'South Glasgow suburbs — Giffnock, Thornliebank and Merrylee on the M77 corridor.',
  },
]

export default function AreasPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className="section-subtitle">Coverage</p>
            <h1 className={styles.title}>Areas We Cover</h1>
            <p className={styles.lead}>
              SRL Recovery operates 24 hours a day, 7 days a week across Glasgow
              and the surrounding Central Scotland area. Select your location below
              for local response times, postcodes and more. Can&apos;t find your
              area?{' '}
              <a href="tel:+447776356556" className={styles.phoneLink}>
                Call us on 07776 356 556
              </a>{' '}
              — we likely cover you.
            </p>
          </div>
        </section>

        <section className={styles.areas}>
          <div className="container">
            <div className={styles.grid}>
              {AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardHeader}>
                    <span className="material-symbols-rounded">location_on</span>
                    <h2>{area.name}</h2>
                  </div>
                  <p className={styles.postcodes}>{area.postcodes.join(' · ')}</p>
                  <p className={styles.desc}>{area.desc}</p>
                  <span className={styles.cta}>
                    View {area.name}
                    <span className="material-symbols-rounded">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

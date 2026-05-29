import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Areas We Cover | 24/7 Breakdown Recovery Glasgow | SRL Recovery',
  description:
    'SRL Recovery covers Glasgow and surrounding areas 24/7 — Bearsden, Hamilton, Paisley, East Kilbride, Motherwell, and more. Find your area and call for fast recovery.',
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

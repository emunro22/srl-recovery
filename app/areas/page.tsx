import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CoverageMap from '@/components/CoverageMap'
import styles from './page.module.css'

export const metadata = {
  title: 'Areas We Cover | SRL Recovery — 24/7 Breakdown Recovery',
  description:
    'SRL Recovery covers Glasgow, Paisley, East Kilbride, Motherwell, Hamilton, Clydebank, Coatbridge, Bearsden, Rutherglen, Cambuslang, Bellshill, and Dumbarton 24/7.',
}

const areas = [
  { name: 'Paisley', slug: 'paisley', postcodes: 'PA1–PA6', desc: 'Town centre, Glasgow Airport, Linwood, Foxbar' },
  { name: 'East Kilbride', slug: 'east-kilbride', postcodes: 'G74, G75', desc: 'Town centre, Calderwood, Westwood, Greenhills' },
  { name: 'Motherwell', slug: 'motherwell', postcodes: 'ML1–ML4', desc: 'Our base — fastest response in this area' },
  { name: 'Hamilton', slug: 'hamilton', postcodes: 'ML3, ML9', desc: 'Town centre, Burnbank, Hillhouse, Earnock' },
  { name: 'Clydebank', slug: 'clydebank', postcodes: 'G81', desc: 'Town centre, Drumchapel, Faifley, Old Kilpatrick' },
  { name: 'Coatbridge', slug: 'coatbridge', postcodes: 'ML5', desc: 'Town centre, Townhead, Whifflet, industrial estates' },
  { name: 'Bearsden', slug: 'bearsden', postcodes: 'G61', desc: 'Bearsden Cross, Westerton, Killermont' },
  { name: 'Rutherglen', slug: 'rutherglen', postcodes: 'G73', desc: 'Town centre, Burnside, Cathkin, Fernhill' },
  { name: 'Cambuslang', slug: 'cambuslang', postcodes: 'G72', desc: 'Main Street, Halfway, Whitlawburn, Newton' },
  { name: 'Bellshill', slug: 'bellshill', postcodes: 'ML4', desc: 'Town centre, Mossend, Orbiston, Tannochside' },
  { name: 'Dumbarton', slug: 'dumbarton', postcodes: 'G82', desc: 'Town centre, Bellsmyre, Brucehill, Castlehill' },
]

export default function AreasIndex() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className="section-subtitle">Service Areas</p>
            <h1 className={styles.title}>Where We Cover</h1>
            <p className={styles.lead}>
              SRL Recovery covers Glasgow and the surrounding areas 24 hours a day, 7 days
              a week. Pick your area below for details, or call us on{' '}
              <a href="tel:+447776356556" className={styles.phoneLink}>07776 356 556</a>{' '}
              and we&apos;ll come straight to you.
            </p>
          </div>
        </div>

        <CoverageMap />

        <section className={styles.areas}>
          <div className="container">
            <div className={styles.grid}>
              {areas.map((a) => (
                <Link key={a.slug} href={`/areas/${a.slug}`} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className="material-symbols-rounded">location_on</span>
                    <h2>{a.name}</h2>
                  </div>
                  <p className={styles.postcodes}>{a.postcodes}</p>
                  <p className={styles.desc}>{a.desc}</p>
                  <span className={styles.cta}>
                    View {a.name} recovery
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

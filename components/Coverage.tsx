import Link from 'next/link'
import styles from './Coverage.module.css'

const areas = [
  { name: 'Glasgow City Centre', slug: null },
  { name: 'Paisley', slug: 'paisley' },
  { name: 'East Kilbride', slug: 'east-kilbride' },
  { name: 'Clydebank', slug: 'clydebank' },
  { name: 'Bearsden', slug: null },
  { name: 'Rutherglen', slug: null },
  { name: 'Hamilton', slug: 'hamilton' },
  { name: 'Motherwell', slug: 'motherwell' },
  { name: 'Coatbridge', slug: 'coatbridge' },
  { name: 'Dumbarton', slug: null },
  { name: 'Cambuslang', slug: null },
  { name: 'Bellshill', slug: null },
]

export default function Coverage() {
  return (
    <section className={`section ${styles.coverage}`} id="areas">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <p className="section-subtitle">Service Area</p>
            <h2 className={`section-title ${styles.title}`}>
              We Cover Glasgow & Surrounding Areas
            </h2>
            <p className="section-text">
              Based in Motherwell, we provide fast breakdown and recovery services across
              the greater Glasgow area and beyond. If you&apos;re not sure we cover your
              location, just call us — we&apos;ll get to you.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/areas" className={`btn ${styles.btn}`}>
                <span className="material-symbols-rounded">map</span>
                View All Areas
              </Link>
              <a href="tel:+447776356556" className={`btn btn-outline ${styles.btn}`}>
                <span className="material-symbols-rounded">call</span>
                Call for Info
              </a>
            </div>
          </div>
          <div className={styles.areaGrid}>
            {areas.map((area) =>
              area.slug ? (
                <Link key={area.name} href={`/areas/${area.slug}`} className={`${styles.areaChip} ${styles.linked}`}>
                  <span className="material-symbols-rounded">location_on</span>
                  {area.name}
                </Link>
              ) : (
                <div key={area.name} className={styles.areaChip}>
                  <span className="material-symbols-rounded">location_on</span>
                  {area.name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

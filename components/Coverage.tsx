import styles from './Coverage.module.css'

const areas = [
  'Glasgow City Centre',
  'Paisley',
  'East Kilbride',
  'Clydebank',
  'Bearsden',
  'Rutherglen',
  'Hamilton',
  'Motherwell',
  'Coatbridge',
  'Dumbarton',
  'Cambuslang',
  'Bellshill',
]

export default function Coverage() {
  return (
    <section className={`section ${styles.coverage}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <p className="section-subtitle">Service Area</p>
            <h2 className={`section-title ${styles.title}`}>
              We Cover Glasgow & Surrounding Areas
            </h2>
            <p className="section-text">
              Based in Glasgow, we provide fast breakdown and recovery services
              across the greater Glasgow area and beyond. If you&apos;re not sure
              we cover your location, just call us — we&apos;ll get to you.
            </p>
            <a href="tel:+447776356556" className={`btn ${styles.btn}`}>
              <span className="material-symbols-rounded">call</span>
              Call for Coverage Info
            </a>
          </div>

          <div className={styles.areaGrid}>
            {areas.map((area) => (
              <div key={area} className={styles.areaChip}>
                <span className="material-symbols-rounded">location_on</span>
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

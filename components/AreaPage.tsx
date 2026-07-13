import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import styles from './AreaPage.module.css'

export type AreaInfo = {
  name: string
  slug: string
  postcodes: string[]
  introBlurb: string
  routeBlurb: string
  responseTime: string
  nearbyAreas: string[]
  relatedRoutes?: { href: string; title: string; description: string }[]
}

export default function AreaPage({ area }: { area: AreaInfo }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `24/7 Breakdown Recovery ${area.name}`,
    description: area.introBlurb,
    provider: {
      '@type': 'AutoRepair',
      '@id': 'https://srlrecovery.com/#business',
      name: 'SRL Recovery',
      telephone: '+447776356556',
      url: 'https://srlrecovery.com',
    },
    areaServed: {
      '@type': 'City',
      name: area.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Scotland' },
    },
    url: `https://srlrecovery.com/areas/${area.slug}`,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '60.00',
        priceCurrency: 'GBP',
        description: 'Local recovery call-out from £50 + £1.50/mile',
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srlrecovery.com/' },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://srlrecovery.com/areas' },
      { '@type': 'ListItem', position: 3, name: `${area.name} Recovery`, item: `https://srlrecovery.com/areas/${area.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className="section-subtitle">{area.name} Recovery</p>
            <h1 className={styles.title}>
              24/7 Breakdown Recovery <span className={styles.gradient}>{area.name}</span>
            </h1>
            <p className={styles.lead}>{area.introBlurb}</p>
            <div className={styles.heroActions}>
              <a href="tel:+447776356556" className="btn">
                <span className="material-symbols-rounded">call</span>
                Call 07776 356 556
              </a>
              <a href="#pricing" className="btn btn-outline">
                See Pricing
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <strong>{area.responseTime}</strong>
                <span>Average arrival in {area.name}</span>
              </div>
              <div className={styles.heroStat}>
                <strong>24/7</strong>
                <span>Always available</span>
              </div>
              <div className={styles.heroStat}>
                <strong>5.0★</strong>
                <span>58+ Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.info}`}>
          <div className="container">
            <div className={styles.infoGrid}>
              <div>
                <h2 className="section-title">Local Recovery You Can Rely On</h2>
                <p className="section-text">{area.routeBlurb}</p>
                <p className="section-text" style={{ marginTop: '1.6rem' }}>
                  Whether you&apos;ve broken down at home, on a commute, or after an
                  accident, our team gets to {area.name} fast — typically within{' '}
                  {area.responseTime} of your call. We cover cars, vans, light
                  commercial vehicles, and prestige cars with the right equipment
                  for each job.
                </p>
                <ul className={styles.checks}>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    24/7 emergency dispatch — nights, weekends, holidays
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Clear price quoted on the phone — no hidden fees
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Fully insured, professional service
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Accident claims handled at no upfront cost
                  </li>
                </ul>
              </div>
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>{area.name} Coverage</h3>
                <p className={styles.sideLabel}>Postcodes served</p>
                <div className={styles.chips}>
                  {area.postcodes.map((pc) => (
                    <span key={pc} className={styles.chip}>{pc}</span>
                  ))}
                </div>
                <p className={styles.sideLabel} style={{ marginTop: '2rem' }}>Nearby areas we cover</p>
                <ul className={styles.nearbyList}>
                  {area.nearbyAreas.map((n) => (
                    <li key={n}>
                      <span className="material-symbols-rounded">location_on</span>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Pricing />
        <Testimonials />
        <FAQ />

        {area.relatedRoutes && area.relatedRoutes.length > 0 && (
          <section className={`section ${styles.info}`}>
            <div className="container">
              <h2 className="section-title">Route Guides from {area.name}</h2>
              <div className={styles.routeLinks}>
                {area.relatedRoutes.map((r) => (
                  <Link key={r.href} href={r.href} className={styles.routeCard}>
                    <strong>{r.title}</strong>
                    <span>{r.description}</span>
                    <span className={styles.routeCta}>
                      View route guide <span className="material-symbols-rounded">arrow_forward</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <h2>Need Recovery in {area.name} Right Now?</h2>
              <p>Available 24/7 — we&apos;ll dispatch immediately.</p>
              <a href="tel:+447776356556" className="btn">
                <span className="material-symbols-rounded">call</span>
                Call 07776 356 556
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

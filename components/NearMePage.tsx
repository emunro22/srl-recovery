import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallbackForm from '@/components/CallbackForm'
import WhatsAppLink from '@/components/WhatsAppLink'
import { getGoogleReviews } from '@/lib/googleReviews'
import type { AreaFacts } from '@/lib/areas-data'
import { getLinkableNearbyAreas } from '@/lib/areas-data'
import type { NearMeAngle } from '@/lib/near-me-data'
import { services } from '@/lib/services-data'
import styles from './ServicePage.module.css'

export default async function NearMePage({
  area,
  angle,
}: {
  area: AreaFacts
  angle: NearMeAngle
}) {
  const data = angle.build(area)
  const nearbyAreas = getLinkableNearbyAreas(area, 4)
  const relatedService = services.find((s) => s.slug === data.relatedServiceSlug)
  const live = await getGoogleReviews()
  const rating = live?.rating ?? 5.0
  const totalReviews = live?.totalReviews ?? 102

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    description: data.metaDescription,
    provider: {
      '@type': 'AutoRepair',
      '@id': 'https://srlrecovery.com/#business',
      name: 'SRL Recovery',
      telephone: '+441698700970',
      url: 'https://srlrecovery.com',
    },
    areaServed: {
      '@type': 'City',
      name: area.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Scotland' },
    },
    url: `https://srlrecovery.com/areas/${area.slug}/${angle.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srlrecovery.com/' },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://srlrecovery.com/areas' },
      { '@type': 'ListItem', position: 3, name: area.name, item: `https://srlrecovery.com/areas/${area.slug}` },
      {
        '@type': 'ListItem',
        position: 4,
        name: data.h1,
        item: `https://srlrecovery.com/areas/${area.slug}/${angle.slug}`,
      },
    ],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/areas">Areas</Link>
              <span>›</span>
              <Link href={`/areas/${area.slug}`}>{area.name}</Link>
              <span>›</span>
              <span>{data.navLabel}</span>
            </nav>
            <p className="section-subtitle">{area.name}</p>
            <h1 className={styles.title}>{data.h1}</h1>
            <p className={styles.lead}>{data.subheading}</p>
            <div className={styles.heroActions}>
              <a href="tel:+441698700970" className="btn">
                <span className="material-symbols-rounded">call</span>
                Call 01698 700970
              </a>
              <a href="#enquire" className="btn btn-outline">
                Request Callback
              </a>
            </div>
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <span className="material-symbols-rounded">star</span>
                <strong>{rating.toFixed(1)}</strong> · {totalReviews}+ Google reviews
              </div>
              <div className={styles.trustItem}>
                <span className="material-symbols-rounded">schedule</span>
                {area.responseTime} avg arrival
              </div>
              <div className={styles.trustItem}>
                <span className="material-symbols-rounded">verified</span>
                Fully insured
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.body}`}>
          <div className="container">
            <div className={styles.contentGrid}>
              <article className={styles.article}>
                <p className={styles.intro}>{data.intro}</p>

                <div className={styles.section}>
                  {data.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className={styles.section}>
                  <h2>Why choose SRL Recovery in {area.name}</h2>
                  <ul className={styles.features}>
                    {data.features.map((f) => (
                      <li key={f}>
                        <span className="material-symbols-rounded">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.section}>
                  <h2>Common questions</h2>
                  <div className={styles.faqList}>
                    {data.faqs.map((f, i) => (
                      <details key={i} className={styles.faqItem}>
                        <summary>{f.q}</summary>
                        <p>{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </article>

              <aside className={styles.sidebar}>
                <div className={styles.sideCard}>
                  <h3>Need help right now?</h3>
                  <p>We dispatch immediately — 24/7 across {area.name} and surrounding areas.</p>
                  <a href="tel:+441698700970" className={`btn ${styles.sideBtn}`}>
                    <span className="material-symbols-rounded">call</span>
                    01698 700970
                  </a>
                  <WhatsAppLink
                    source={`near-me-sidebar-${area.slug}-${angle.slug}`}
                    className={`${styles.sideBtn} ${styles.whatsBtn}`}
                  >
                    WhatsApp Us
                  </WhatsAppLink>
                </div>

                <div className={styles.sideCard}>
                  <h3>More about {area.name}</h3>
                  <ul className={styles.relatedList}>
                    <li>
                      <Link href={`/areas/${area.slug}`}>
                        <span className="material-symbols-rounded">location_on</span>
                        Full {area.name} coverage details
                      </Link>
                    </li>
                    {relatedService && (
                      <li>
                        <Link href={`/services/${relatedService.slug}`}>
                          <span className="material-symbols-rounded">arrow_forward</span>
                          {data.relatedServiceLabel}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>

                {nearbyAreas.length > 0 && (
                  <div className={styles.sideCard}>
                    <h3>{data.navLabel} in nearby areas</h3>
                    <ul className={styles.relatedList}>
                      {nearbyAreas.map((n) => (
                        <li key={n.slug}>
                          <Link href={`/areas/${n.slug}/${angle.slug}`}>
                            <span className="material-symbols-rounded">location_on</span>
                            {n.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        <div id="enquire">
          <CallbackForm />
        </div>
      </main>
      <Footer />
    </>
  )
}

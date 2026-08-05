import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallbackForm from '@/components/CallbackForm'
import { services, type ServicePageData } from '@/lib/services-data'
import WhatsAppLink from '@/components/WhatsAppLink'
import { getGoogleReviews } from '@/lib/googleReviews'
import styles from './ServicePage.module.css'

export default async function ServicePage({ data }: { data: ServicePageData }) {
  const related = services.filter((s) => data.relatedServices.includes(s.slug))
  const live = await getGoogleReviews()
  const rating = live?.rating ?? 5.0
  const totalReviews = live?.totalReviews ?? 102

  // FAQ schema for this page
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    description: data.metaDescription,
    provider: {
      '@type': 'AutoRepair',
      name: 'SRL Recovery',
      telephone: '+447776356556',
      url: 'https://srlrecovery.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Glasgow',
    },
    url: `https://srlrecovery.com/services/${data.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srlrecovery.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://srlrecovery.com/services' },
      { '@type': 'ListItem', position: 3, name: data.h1, item: `https://srlrecovery.com/services/${data.slug}` },
    ],
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/services">Services</Link>
              <span>›</span>
              <span>{data.h1}</span>
            </nav>
            <p className="section-subtitle">{data.serviceCategory === 'pricing' ? 'Pricing' : 'Service'}</p>
            <h1 className={styles.title}>{data.h1}</h1>
            <p className={styles.lead}>{data.subheading}</p>
            <div className={styles.heroActions}>
              <a href="tel:+447776356556" className="btn">
                <span className="material-symbols-rounded">call</span>
                Call 07776 356 556
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
                30–45 min avg arrival
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
                <p className={styles.intro}>{data.introParagraph}</p>

                {data.bodySections.map((sec, i) => (
                  <div key={i} className={styles.section}>
                    <h2>{sec.heading}</h2>
                    {sec.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                ))}

                {data.pricingNote && (
                  <div className={styles.pricingNote}>
                    <span className="material-symbols-rounded">payments</span>
                    <p>{data.pricingNote}</p>
                  </div>
                )}

                <div className={styles.section}>
                  <h2>Why choose SRL Recovery</h2>
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
                  <p>We dispatch immediately — 24/7 across Glasgow and surrounding areas.</p>
                  <a href="tel:+447776356556" className={`btn ${styles.sideBtn}`}>
                    <span className="material-symbols-rounded">call</span>
                    07776 356 556
                  </a>
                  <WhatsAppLink source={`service-sidebar-${data.slug}`} className={`${styles.sideBtn} ${styles.whatsBtn}`}>
                    WhatsApp Us
                  </WhatsAppLink>
                </div>

                {related.length > 0 && (
                  <div className={styles.sideCard}>
                    <h3>Related services</h3>
                    <ul className={styles.relatedList}>
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link href={`/services/${r.slug}`}>
                            <span className="material-symbols-rounded">arrow_forward</span>
                            {r.h1}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={styles.sideCard}>
                  <h3>Areas we cover</h3>
                  <p className={styles.sideListLabel}>Pick your area for local info:</p>
                  <ul className={styles.relatedList}>
                    {[
                      'paisley',
                      'east-kilbride',
                      'motherwell',
                      'hamilton',
                      'clydebank',
                      'coatbridge',
                    ].map((a) => (
                      <li key={a}>
                        <Link href={`/areas/${a}`}>
                          <span className="material-symbols-rounded">location_on</span>
                          {a.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
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

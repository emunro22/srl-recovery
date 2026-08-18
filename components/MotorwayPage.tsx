import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallbackForm from '@/components/CallbackForm'
import { motorways, type MotorwayPageData } from '@/lib/motorways-data'
import WhatsAppLink from '@/components/WhatsAppLink'
import styles from './MotorwayPage.module.css'

export default function MotorwayPage({ data }: { data: MotorwayPageData }) {
  const others = motorways.filter((m) => m.slug !== data.slug)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${data.fullName} Recovery`,
    description: data.metaDescription,
    provider: {
      '@type': 'AutoRepair',
      name: 'SRL Recovery',
      telephone: '+441698700970',
    },
    areaServed: { '@type': 'Place', name: data.fullName },
    url: `https://srlrecovery.com/motorways/${data.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srlrecovery.com/' },
      { '@type': 'ListItem', position: 2, name: 'Motorways', item: 'https://srlrecovery.com/motorways' },
      { '@type': 'ListItem', position: 3, name: `${data.name} Recovery`, item: `https://srlrecovery.com/motorways/${data.slug}` },
    ],
  }

  return (
    <>
      <Header />
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
              <Link href="/motorways">Motorways</Link>
              <span>›</span>
              <span>{data.name}</span>
            </nav>
            <p className="section-subtitle">Motorway Recovery</p>
            <h1 className={styles.title}>
              {data.name} <span className={styles.gradient}>Breakdown Recovery</span>
            </h1>
            <p className={styles.lead}>
              24/7 recovery on the {data.fullName} — {data.route}
            </p>

            <div className={styles.factGrid}>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Coverage</span>
                <strong>{data.junctionsCovered}</strong>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Length</span>
                <strong>{data.length}</strong>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Avg arrival</span>
                <strong>{data.responseTime}</strong>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Availability</span>
                <strong>24/7</strong>
              </div>
            </div>

            <div className={styles.urgentBox}>
              <span className="material-symbols-rounded">emergency</span>
              <div>
                <strong>Broken down on the {data.name} right now?</strong>
                <p>Call 999 first if you&apos;re in a live lane. Then call us.</p>
              </div>
              <a href="tel:+441698700970" className={`btn ${styles.urgentBtn}`}>
                Call 01698 700970
              </a>
            </div>
          </div>
        </section>

        <section className={`section ${styles.body}`}>
          <div className="container">
            <article className={styles.article}>
              <p className={styles.intro}>{data.introParagraph}</p>

              <div className={styles.section}>
                <h2>Junction-by-junction coverage</h2>
                <div className={styles.junctionList}>
                  {data.keySections.map((s, i) => (
                    <div key={i} className={styles.junctionItem}>
                      <h3>{s.junction}</h3>
                      <p>{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.section}>
                <h2>Known problem areas on the {data.name}</h2>
                <ul className={styles.problems}>
                  {data.knownProblemAreas.map((p) => (
                    <li key={p}>
                      <span className="material-symbols-rounded">warning</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.section} ${styles.safetyBox}`}>
                <h2>
                  <span className="material-symbols-rounded">health_and_safety</span>
                  If you&apos;ve just broken down — do this first
                </h2>
                <ol className={styles.safetyList}>
                  {data.safetyAdvice.map((a, i) => (
                    <li key={i}>
                      <strong>{i + 1}.</strong> {a}
                    </li>
                  ))}
                </ol>
              </div>

              <div className={styles.section}>
                <h2>Pricing for {data.name} recovery</h2>
                <p>
                  Motorway and live-lane recovery is charged at our standard motorway rate:
                  <strong> £120 flat call-out + £1.50 per mile</strong> (plus VAT). This rate
                  applies regardless of time of day — there are no out-of-hours or holiday
                  surcharges.
                </p>
                <p>
                  Why the flat rate vs local? Motorway work requires extra safety equipment,
                  coordination with Traffic Scotland or Police Scotland, and significantly higher
                  risk to our staff. The flat rate also means you know exactly what you&apos;re
                  paying before we set off — no &quot;motorway surcharge&quot; surprises.
                </p>
              </div>

              <div className={styles.ctaBox}>
                <h2>Call now — we&apos;re on the way</h2>
                <p>
                  Phone {data.responseTime.split('–')[0].trim()} minutes from now, you could be
                  off the {data.name} and on your way.
                </p>
                <div className={styles.ctaActions}>
                  <a href="tel:+441698700970" className="btn">
                    <span className="material-symbols-rounded">call</span>
                    Call 01698 700970
                  </a>
                  <WhatsAppLink source={`motorway-cta-${data.slug}`} className={styles.whatsBtn}>
                    WhatsApp Us
                  </WhatsAppLink>
                </div>
              </div>
            </article>
          </div>
        </section>

        {data.routes && data.routes.length > 0 && (
          <section className={`section ${styles.routes}`}>
            <div className="container">
              <h2 className={`section-title ${styles.othersTitle}`}>Route guides on the {data.name}</h2>
              <div className={styles.othersGrid}>
                {data.routes.map((r) => (
                  <Link key={r.href} href={r.href} className={styles.otherCard}>
                    <strong>{r.title}</strong>
                    <span>{r.description}</span>
                    <span className={styles.otherCta}>
                      View route guide <span className="material-symbols-rounded">arrow_forward</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={`section ${styles.others}`}>
          <div className="container">
            <h2 className={`section-title ${styles.othersTitle}`}>Other motorways we cover</h2>
            <div className={styles.othersGrid}>
              {others.map((m) => (
                <Link key={m.slug} href={`/motorways/${m.slug}`} className={styles.otherCard}>
                  <strong>{m.name}</strong>
                  <span>{m.route}</span>
                  <span className={styles.otherCta}>
                    View {m.name} recovery <span className="material-symbols-rounded">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CallbackForm />
      </main>
      <Footer />
    </>
  )
}

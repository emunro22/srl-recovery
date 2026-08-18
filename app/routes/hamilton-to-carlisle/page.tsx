import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppLink from '@/components/WhatsAppLink'
import CallbackForm from '@/components/CallbackForm'
import styles from './page.module.css'

export const metadata = {
  title: 'Hamilton to Carlisle Recovery | M74/A74(M) Breakdown Recovery | SRL Recovery',
  description:
    'Broken down between Hamilton and Carlisle on the M74 or A74(M)? SRL Recovery covers this remote corridor 24/7. Abington Services, Beattock, and everything in between. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/routes/hamilton-to-carlisle' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hamilton to Carlisle M74 Breakdown Recovery',
  description:
    '24/7 breakdown and accident recovery on the M74/A74(M) corridor between Hamilton and Carlisle, covering Abington Services, Beattock, and the full southbound stretch.',
  provider: {
    '@type': 'AutoRepair',
    name: 'SRL Recovery',
    telephone: '+441698700970',
  },
  areaServed: { '@type': 'Place', name: 'M74/A74(M) Hamilton to Carlisle' },
  url: 'https://srlrecovery.com/routes/hamilton-to-carlisle',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srlrecovery.com/' },
    { '@type': 'ListItem', position: 2, name: 'Hamilton to Carlisle Recovery', item: 'https://srlrecovery.com/routes/hamilton-to-carlisle' },
  ],
}

export default function HamiltonCarlislePage() {
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
              <Link href="/motorways/m74">M74 Recovery</Link>
              <span>›</span>
              <span>Hamilton to Carlisle</span>
            </nav>
            <p className="section-subtitle">Route Recovery</p>
            <h1 className={styles.title}>
              Hamilton to Carlisle{' '}
              <span className={styles.gradient}>Breakdown Recovery</span>
            </h1>
            <p className={styles.lead}>
              24/7 recovery on the M74 and A74(M) southbound corridor — from Hamilton all the way to the English border at Gretna and beyond to Carlisle.
            </p>

            <div className={styles.factGrid}>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Route</span>
                <strong>M74 / A74(M)</strong>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Distance</span>
                <strong>~70 miles</strong>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Avg arrival</span>
                <strong>45–70 mins</strong>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Availability</span>
                <strong>24/7</strong>
              </div>
            </div>

            <div className={styles.urgentBox}>
              <span className="material-symbols-rounded">emergency</span>
              <div>
                <strong>Broken down on the M74 or A74(M) right now?</strong>
                <p>Call 999 first if you&apos;re in a live lane, then call us immediately.</p>
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
              <p className={styles.intro}>
                The M74 and its A74(M) continuation is the main route between Central Scotland and England — and one of the most isolated stretches of motorway in Scotland. Between Hamilton and Carlisle there are very few service stations, limited mobile coverage in places, and long gaps between exits. If you break down here, the wrong decision (staying in a live lane, walking on the carriageway) can be extremely dangerous. We cover the full corridor 24/7 and are used to attending some very remote jobs on this road.
              </p>

              <div className={styles.section}>
                <h2>
                  <span className="material-symbols-rounded">route</span>
                  Section-by-section coverage
                </h2>
                <div className={styles.stopList}>
                  <div className={styles.stopItem}>
                    <h3>Hamilton — M74 J5/J6</h3>
                    <p>The northern end of this corridor. Hamilton, Bothwell, and the M73 interchange are all within easy reach. This is our strongest part of the route. Average arrival: 25–40 minutes from our Motherwell base.</p>
                  </div>
                  <div className={styles.stopItem}>
                    <h3>Larkhall / Lesmahagow — M74 J8–J10</h3>
                    <p>Through Larkhall and approaching Lesmahagow — still manageable response times but the road becomes more open and isolated. Average arrival: 35–50 minutes.</p>
                  </div>
                  <div className={styles.stopItem}>
                    <h3>Abington Services — M74 J13</h3>
                    <p>Roughly the halfway point between Hamilton and Carlisle. Abington Services is often the only realistic safe haven for vehicles in trouble on this stretch. We attend breakdowns here regularly — both at the services themselves and on the carriageway between J10 and J15. Average arrival: 45–60 minutes.</p>
                  </div>
                  <div className={styles.stopItem}>
                    <h3>Beattock Summit — M74 J15/J16</h3>
                    <p>The long climb at Beattock catches overloaded vehicles, older cars, and anything running hot in summer. Overheating and transmission failures are common here. This is an exposed, rural stretch with limited shelter. Average arrival: 50–70 minutes.</p>
                  </div>
                  <div className={styles.stopItem}>
                    <h3>Lockerbie / Moffat — A74(M) J17–J19</h3>
                    <p>Crossing into Dumfries and Galloway — response times lengthen significantly from here. Average arrival: 65–85 minutes. If you&apos;re closer to Lockerbie than Hamilton, call us and we&apos;ll be honest about timing.</p>
                  </div>
                  <div className={styles.stopItem}>
                    <h3>Gretna / English Border — A74(M) J22+</h3>
                    <p>At the Scottish border and beyond into Carlisle, response times from our Motherwell base are 80–100+ minutes. For Carlisle breakdowns, a local Cumbrian operator may reach you faster — we&apos;ll tell you honestly when to use one. But if you can&apos;t get anyone else, we&apos;ll come.</p>
                  </div>
                </div>
              </div>

              <div className={styles.section}>
                <h2>
                  <span className="material-symbols-rounded">warning</span>
                  Known problem spots on this route
                </h2>
                <ul className={styles.problems}>
                  {[
                    'Abington Services southbound — vehicles limping in and unable to restart',
                    'The Beattock climb southbound — overheating and transmission failures, especially in summer',
                    'M74/M73 interchange (J4/J5) — high-traffic merge incidents near Hamilton',
                    'Open A74(M) stretch in winter — ice, black ice, and high winds between Beattock and Gretna',
                    'Low-coverage areas between J10 and J13 — limited mobile signal, call when you can',
                  ].map((p) => (
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
                  {[
                    'If you can keep moving safely, aim for Abington Services or the next junction — even at crawling speed.',
                    'Hard shoulder: hazards on, exit passenger side, get well behind the barrier — not next to the car.',
                    'Live lane or smart motorway section: stay in the vehicle, seatbelts on, hazards on, call 999 immediately.',
                    'Call us as soon as you\'re safe — the sooner we dispatch, the sooner we arrive on this long route.',
                    'Stay visible: use your hi-vis if you have one. On this road, traffic is fast.',
                  ].map((a, i) => (
                    <li key={i}>
                      <strong>{i + 1}.</strong> {a}
                    </li>
                  ))}
                </ol>
              </div>

              <div className={styles.section}>
                <h2>
                  <span className="material-symbols-rounded">payments</span>
                  Pricing for M74/A74(M) recovery
                </h2>
                <p>
                  Recovery on this corridor is charged at our standard motorway rate:{' '}
                  <strong>£120 flat call-out + £1.50 per mile</strong> (plus VAT). No out-of-hours
                  surcharges — the rate is the same at 2pm or 2am.
                </p>
                <p>
                  Given the distances involved on this route, the mileage charge can add up — we&apos;ll
                  give you an honest estimate before we set off so there are no surprises. For very remote
                  recoveries toward the border we may also recommend a closer operator if one exists.
                </p>
              </div>

              <div className={styles.ctaBox}>
                <h2>
                  <span className="material-symbols-rounded">call</span>
                  Call now — we&apos;re dispatching immediately
                </h2>
                <p>
                  The sooner you call, the sooner we can get someone heading your way on this long corridor.
                </p>
                <div className={styles.ctaActions}>
                  <a href="tel:+441698700970" className="btn">
                    <span className="material-symbols-rounded">call</span>
                    Call 01698 700970
                  </a>
                  <WhatsAppLink source="hamilton-to-carlisle-cta" className={styles.whatsBtn}>
                    WhatsApp Us
                  </WhatsAppLink>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className={`section ${styles.related}`}>
          <div className="container">
            <h2 className={`section-title ${styles.relatedTitle}`}>Related coverage pages</h2>
            <div className={styles.relatedGrid}>
              <Link href="/motorways/m74" className={styles.relatedCard}>
                <strong>M74</strong>
                <span>Full M74 junction-by-junction coverage</span>
                <span className={styles.relatedCta}>
                  View M74 recovery <span className="material-symbols-rounded">arrow_forward</span>
                </span>
              </Link>
              <Link href="/areas/abington" className={styles.relatedCard}>
                <strong>Abington</strong>
                <span>M74 J13 — Abington Services and surrounding area</span>
                <span className={styles.relatedCta}>
                  View Abington recovery <span className="material-symbols-rounded">arrow_forward</span>
                </span>
              </Link>
              <Link href="/areas/hamilton" className={styles.relatedCard}>
                <strong>Hamilton</strong>
                <span>Northern end of this route — fast response times</span>
                <span className={styles.relatedCta}>
                  View Hamilton recovery <span className="material-symbols-rounded">arrow_forward</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <CallbackForm />
      </main>
      <Footer />
    </>
  )
}

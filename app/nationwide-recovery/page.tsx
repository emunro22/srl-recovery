import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppLink from '@/components/WhatsAppLink'
import CallbackForm from '@/components/CallbackForm'
import styles from './page.module.css'

export const metadata = {
  title: 'Nationwide Vehicle Recovery | UK Wide Breakdown & Transport | SRL Recovery',
  description:
    'Nationwide vehicle recovery and long distance transport from Scotland to anywhere in the UK. Cross-border breakdowns, dealer and auction moves, ferry ports. Fixed price quoted before we set off. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/nationwide-recovery' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Nationwide Vehicle Recovery and Transport',
  description:
    'UK wide vehicle recovery and long distance transport. Cross-border breakdown recovery, planned vehicle moves, dealer and auction deliveries and ferry port collections, operating from Central Scotland to anywhere in the UK.',
  provider: {
    '@type': 'AutoRepair',
    '@id': 'https://srlrecovery.com/#business',
    name: 'SRL Recovery',
    telephone: '+441698700970',
    url: 'https://srlrecovery.com',
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  url: 'https://srlrecovery.com/nationwide-recovery',
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'GBP',
      description: 'Long distance recovery priced per job on mileage, quoted in full before dispatch',
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srlrecovery.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nationwide Recovery', item: 'https://srlrecovery.com/nationwide-recovery' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you really cover the whole UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are based in Motherwell and Cambuslang and run long distance jobs the length of the country, England and Wales included. Anything beyond our Central Scotland patch is quoted as a planned job with a fixed price and an agreed collection window.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does nationwide recovery cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Long distance work is priced on mileage rather than a flat call-out. Give us the collection and delivery postcodes and the vehicle details and we will give you one all-in figure on the phone. That figure is what you pay, subject to VAT.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you recover a vehicle from England back to Scotland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it is a large part of what we do. Cross-border work in both directions is routine for us, most often down the M74 and M6 through Carlisle, and we handle the whole job from collection to delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you get to a long distance breakdown?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends entirely on where you are. Central Scotland is 20 to 60 minutes. The border is around two hours. Further south is a half day job. We will tell you the honest timing when you call, and if a closer operator would genuinely reach you faster we will say so.',
      },
    },
  ],
}

export default function NationwideRecoveryPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/areas">Areas</Link>
              <span>›</span>
              <span>Nationwide Recovery</span>
            </nav>
            <p className="section-subtitle">UK Wide Coverage</p>
            <h1 className={styles.title}>
              Nationwide Vehicle{' '}
              <span className={styles.gradient}>Recovery &amp; Transport</span>
            </h1>
            <p className={styles.lead}>
              We are based in Central Scotland but we do not stop at the county line. Breakdowns,
              accident recoveries and planned vehicle moves to and from anywhere in the UK, priced
              up front and handled by one team from collection to delivery.
            </p>

            <div className={styles.factGrid}>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Coverage</span>
                <strong>UK wide</strong>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Based</span>
                <strong>Motherwell &amp; Cambuslang</strong>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Pricing</span>
                <strong>Fixed before dispatch</strong>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Availability</span>
                <strong>24/7</strong>
              </div>
            </div>

            <div className={styles.urgentBox}>
              <span className="material-symbols-rounded">emergency</span>
              <div>
                <strong>Stranded away from home right now?</strong>
                <p>Call 999 first if you&apos;re in a live lane, then call us and we&apos;ll sort the rest.</p>
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
                Most recovery firms will quote you happily for a ten mile tow and then go quiet when
                you say the vehicle is in Birmingham. We do the long jobs. A car that has failed its
                MOT four hundred miles from home, a van recovered off the hard shoulder in Cumbria, a
                bought-at-auction vehicle that needs collecting in Yorkshire, a customer who has come
                off the Cairnryan ferry and cannot go any further. If it needs to be moved and it is
                in the UK, ring us and we will price it.
              </p>

              <div className={styles.section}>
                <h2>
                  <span className="material-symbols-rounded">public</span>
                  What nationwide actually means for us
                </h2>
                <div className={styles.stopList}>
                  <div className={styles.stopItem}>
                    <h3>Central Scotland: our home patch</h3>
                    <p>Glasgow, Lanarkshire, Renfrewshire, Dunbartonshire and the Forth Valley. Emergency dispatch with 20 to 60 minute arrival, every hour of every day. See <Link href="/areas">the full area list</Link> for local response times.</p>
                  </div>
                  <div className={styles.stopItem}>
                    <h3>The rest of Scotland</h3>
                    <p>Edinburgh and the Lothians, Perth and Tayside, the Borders, Dumfries and Galloway, Argyll and the west coast, and up into the Highlands on request. Typically one to three hours out, quoted on the call. See <Link href="/areas/scotland">Scotland-wide recovery</Link>.</p>
                  </div>
                  <div className={styles.stopItem}>
                    <h3>Cross-border: the M74 and M6</h3>
                    <p>Our busiest long distance corridor by a distance. Carlisle, Penrith, Lancaster, Preston, Manchester and Liverpool are all regular runs. See <Link href="/areas/carlisle">Carlisle recovery</Link> and the <Link href="/routes/hamilton-to-carlisle">Hamilton to Carlisle route guide</Link>.</p>
                  </div>
                  <div className={styles.stopItem}>
                    <h3>England and Wales</h3>
                    <p>The Midlands, East Anglia, the South West, London and the South East, and across into Wales. These are planned jobs rather than emergency dispatch: we agree a collection window, a fixed price and a delivery day with you before anything moves.</p>
                  </div>
                  <div className={styles.stopItem}>
                    <h3>Ferry ports and terminals</h3>
                    <p>Cairnryan for the Belfast and Larne sailings, plus Stranraer, Troon and the Clyde terminals. Vehicles that will not start off the boat, or that need collecting because the driver has to fly home, are a job we do often. See <Link href="/areas/stranraer">Stranraer recovery</Link>.</p>
                  </div>
                </div>
              </div>

              <div className={styles.section}>
                <h2>
                  <span className="material-symbols-rounded">inventory_2</span>
                  The long distance work we take on
                </h2>
                <ul className={styles.problems}>
                  {[
                    'Emergency breakdown recovery back to your home address, wherever you broke down',
                    'Non-fault and accident recovery, with the claim handled at no upfront cost to you',
                    'Dealer, trade and auction deliveries and collections across the UK',
                    'Prestige, classic and low-clearance vehicles moved on the right equipment',
                    'Vans, light commercials and fleet vehicles off-road and back to base',
                    'Ferry port collections at Cairnryan and the Clyde terminals',
                  ].map((item) => (
                    <li key={item}>
                      <span className="material-symbols-rounded">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h2>
                  <span className="material-symbols-rounded">payments</span>
                  How we price a nationwide job
                </h2>
                <p>
                  Long distance work is not a flat call-out. It is priced on the mileage and the
                  vehicle, so the only way to get a real number is to tell us the two postcodes.
                  Give us the collection point, the delivery address, the make and model, and
                  whether it rolls and steers, and we will give you{' '}
                  <strong>one all-in figure on the phone</strong>. That figure is what you pay,
                  subject to VAT. No arrival surcharge, no out-of-hours premium, no renegotiating
                  once the truck is loaded.
                </p>
                <p>
                  For reference, our local rate is <strong>from £60 + £1.50 per mile</strong> and our
                  motorway rate is <strong>£120 + £1.50 per mile</strong>. Genuinely long runs are
                  quoted as a job price rather than off that table, because a round trip to the
                  Midlands is a different thing from a tow across Motherwell. See{' '}
                  <Link href="/services/vehicle-transport-glasgow">vehicle transport</Link> for
                  planned, non-emergency moves.
                </p>
              </div>

              <div className={`${styles.section} ${styles.safetyBox}`}>
                <h2>
                  <span className="material-symbols-rounded">call</span>
                  What to have ready when you ring
                </h2>
                <ol className={styles.safetyList}>
                  {[
                    'Where the vehicle is now: a postcode, a junction number and direction, or a what3words if you are somewhere rural.',
                    'Where it needs to go: the full delivery address, not just the town.',
                    'The vehicle: make, model, and whether it rolls, steers and brakes.',
                    'Whether it is an emergency or can wait for a planned slot. Planned jobs are cheaper.',
                    'If it is a non-fault accident, tell us. We can handle the claim so there is nothing to pay up front.',
                  ].map((a, i) => (
                    <li key={i}>
                      <strong>{i + 1}.</strong> {a}
                    </li>
                  ))}
                </ol>
              </div>

              <div className={styles.section}>
                <h2>
                  <span className="material-symbols-rounded">handshake</span>
                  Straight answers about distance
                </h2>
                <p>
                  We would rather turn a job down than take your money and arrive five hours later
                  than you expected. If you are two hundred miles away and a local operator would
                  genuinely have you moving sooner, we will tell you that on the phone. What we will
                  not do is quote you a stock ETA we have no intention of hitting.
                </p>
                <p>
                  Equally, distance on its own does not put us off. A lot of our long distance work
                  comes from people who have already been let down by someone closer, and the whole
                  point of running our own trucks is that we can commit to a job and see it through.
                </p>
              </div>

              <div className={styles.ctaBox}>
                <h2>
                  <span className="material-symbols-rounded">call</span>
                  Tell us the two postcodes and we&apos;ll price it
                </h2>
                <p>
                  One call, one fixed figure, one team from collection to delivery. Available 24/7.
                </p>
                <div className={styles.ctaActions}>
                  <a href="tel:+441698700970" className="btn">
                    <span className="material-symbols-rounded">call</span>
                    Call 01698 700970
                  </a>
                  <WhatsAppLink source="nationwide-recovery-cta" className={styles.whatsBtn}>
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
              <Link href="/areas/scotland" className={styles.relatedCard}>
                <strong>Anywhere in Scotland</strong>
                <span>Scotland-wide cover for towns not on our area list</span>
                <span className={styles.relatedCta}>
                  View Scotland recovery <span className="material-symbols-rounded">arrow_forward</span>
                </span>
              </Link>
              <Link href="/areas/carlisle" className={styles.relatedCard}>
                <strong>Carlisle</strong>
                <span>Cross-border cover on the M6 and A74(M)</span>
                <span className={styles.relatedCta}>
                  View Carlisle recovery <span className="material-symbols-rounded">arrow_forward</span>
                </span>
              </Link>
              <Link href="/services/vehicle-transport-glasgow" className={styles.relatedCard}>
                <strong>Vehicle Transport</strong>
                <span>Planned, fixed-price moves rather than emergency dispatch</span>
                <span className={styles.relatedCta}>
                  View vehicle transport <span className="material-symbols-rounded">arrow_forward</span>
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

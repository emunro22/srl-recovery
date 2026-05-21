import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motorways } from '@/lib/motorways-data'
import styles from './page.module.css'

export const metadata = {
  title: 'Motorway Recovery Glasgow | M8, M74, M77, M73, M80 | SRL Recovery',
  description:
    'Motorway breakdown recovery across all major Glasgow motorways. 24/7 dispatch on the M8, M74, M77, M73, and M80. Call 07776 356 556.',
  alternates: { canonical: '/motorways' },
}

export default function MotorwaysIndex() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className="section-subtitle">Motorway Recovery</p>
            <h1 className={styles.title}>Every Glasgow Motorway, 24/7</h1>
            <p className={styles.lead}>
              SRL Recovery covers the M8, M74, M77, M73, and M80 around the clock. Pick your
              motorway below for junction-by-junction coverage info, safety advice, and the
              best way to reach us if you&apos;re broken down right now.
            </p>
            <a href="tel:+447776356556" className={`btn ${styles.btn}`}>
              <span className="material-symbols-rounded">call</span>
              Call 07776 356 556
            </a>
          </div>
        </section>

        <section className={styles.body}>
          <div className="container">
            <div className={styles.grid}>
              {motorways.map((m) => (
                <Link key={m.slug} href={`/motorways/${m.slug}`} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <strong className={styles.motorwayName}>{m.name}</strong>
                    <span className={styles.responseTime}>{m.responseTime}</span>
                  </div>
                  <p className={styles.route}>{m.route}</p>
                  <p className={styles.coverage}>
                    Coverage: {m.junctionsCovered} · {m.length}
                  </p>
                  <span className={styles.cta}>
                    {m.name} recovery info
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
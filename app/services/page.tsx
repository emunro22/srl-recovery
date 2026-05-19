import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { services } from '@/lib/services-data'
import styles from './page.module.css'

export const metadata = {
  title: 'Recovery Services Glasgow | SRL Recovery',
  description:
    'All recovery services from SRL Recovery — breakdown, accident, motorway, van, motorbike, classic, prestige, transport, and more across Glasgow.',
}

const categoryLabels: Record<string, string> = {
  urgency: 'Urgent & 24/7',
  vehicle: 'By Vehicle Type',
  situation: 'By Situation',
  addon: 'Transport & Add-ons',
  pricing: 'Pricing',
}

export default function ServicesIndex() {
  // Group by category preserving the order defined in services-data.ts
  const grouped: Record<string, typeof services> = {}
  for (const s of services) {
    if (!grouped[s.serviceCategory]) grouped[s.serviceCategory] = []
    grouped[s.serviceCategory].push(s)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className="section-subtitle">Services</p>
            <h1 className={styles.title}>Every Recovery Service You Need</h1>
            <p className={styles.lead}>
              Whatever the situation — local breakdown, motorway accident, prestige transport,
              scrap collection — we have a dedicated page that covers exactly what you need to
              know. Pick the one that matches your situation.
            </p>
          </div>
        </section>

        <section className={styles.body}>
          <div className="container">
            {Object.entries(grouped).map(([cat, items]) => (
              <div key={cat} className={styles.group}>
                <h2 className={styles.groupTitle}>{categoryLabels[cat]}</h2>
                <div className={styles.grid}>
                  {items.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className={styles.card}>
                      <h3>{s.h1}</h3>
                      <p>{s.subheading}</p>
                      <span className={styles.cta}>
                        Learn more
                        <span className="material-symbols-rounded">arrow_forward</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Blog – SRL Recovery Glasgow',
  description:
    'News, advice, and updates from Glasgow\'s trusted 24/7 breakdown and recovery specialists.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className="section-subtitle">Latest Updates</p>
            <h1 className={styles.title}>The SRL Recovery Blog</h1>
            <p className={styles.lead}>
              News, advice, and recovery tips from Glasgow&apos;s trusted 24/7
              breakdown and recovery team.
            </p>
          </div>
        </div>

        <section className={styles.content}>
          <div className="container">
            <div id="soro-blog" className={styles.soroEmbed}></div>
            <Script
              src="https://app.trysoro.com/api/embed/0361cda8-25ec-4ac0-9b5f-29cb7646620d"
              strategy="afterInteractive"
            />
          </div>
        </section>

        <div className={styles.cta}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h2>Need Recovery Right Now?</h2>
                <p>Available 24/7 across Glasgow and surrounding areas</p>
              </div>
              <a href="tel:+447776356556" className="btn">
                <span className="material-symbols-rounded">call</span>
                Call 07776 356 556
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
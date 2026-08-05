import Image from 'next/image'
import styles from './Hero.module.css'
import { getGoogleReviews } from '@/lib/googleReviews'

export default async function Hero() {
  const live = await getGoogleReviews()
  const rating = live?.rating ?? 5.0
  const totalReviews = live?.totalReviews ?? 102

  return (
    <section className={styles.hero} id="home">
      <div className={styles.truckWrap}>
        <Image
          src="/images/hero-truck.png"
          alt="SRL Recovery truck in Glasgow"
          fill
          sizes="100vw"
          className={styles.truckImg}
          priority
        />
        <div className={styles.fadeLeft} />
        <div className={styles.fadeBottom} />
        <div className={styles.fadeTop} />
        <div className={styles.fadeRight} />
        <div className={styles.fadeOverall} />
      </div>

      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>
          <span className="material-symbols-rounded">emergency</span>
          24/7 Emergency Response
        </div>
        <h1 className={styles.title}>
          24/7
          <br />
          <span className={styles.gradient}>Breakdown &amp; Recovery</span>
          <br />
          Glasgow
        </h1>
        <p className={styles.tagline}>
          Broken down? Accident? Immobilised? We dispatch immediately — day or
          night — with an average arrival time of 30–45 minutes across Glasgow
          and surrounding areas.
        </p>

        <div className={styles.actions}>
          <a href="tel:+447776356556" className="btn">
            <span className="material-symbols-rounded">call</span>
            Call Now – Immediate Dispatch
          </a>
          <a href="#pricing" className="btn btn-outline">
            See Pricing
            <span className="material-symbols-rounded">arrow_downward</span>
          </a>
        </div>

        {/* Reviews badge moved up next to the CTA — biggest trust signal at the point of decision */}
        <a
          href="https://www.google.com/search?q=SRL+recovery+24%2F7+breakdown+recovery+Glasgow"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.reviewBadge}
        >
          <span className={styles.reviewStars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="material-symbols-rounded">star</span>
            ))}
          </span>
          <span>
            <strong>{rating.toFixed(1)}</strong> from <strong>{totalReviews}+ reviews</strong> on Google
          </span>
          <span className={`material-symbols-rounded ${styles.reviewArrow}`}>arrow_outward</span>
        </a>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>30–45</strong>
            <span>Min Avg Arrival</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <strong>250+</strong>
            <span>Jobs Monthly</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <strong>24/7</strong>
            <span>Always Available</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <strong>Fully</strong>
            <span>Insured</span>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span />
      </div>
    </section>
  )
}

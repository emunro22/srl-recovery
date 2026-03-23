import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">

      {/* Full-bleed background truck image */}
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

      {/* Glow orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <div className={styles.badge}>
          <span className="material-symbols-rounded">emergency</span>
          24/7 Emergency Response
        </div>

        <h1 className={styles.title}>
          Glasgow&apos;s
          <br />
          <span className={styles.gradient}>Fastest Recovery</span>
          <br />
          Service
        </h1>

        <p className={styles.tagline}>
          Broken down? Accident? Immobilised? We dispatch immediately — day or
          night — across Glasgow and surrounding areas.
        </p>

        <div className={styles.actions}>
          <a href="tel:+447776356556" className="btn">
            <span className="material-symbols-rounded">call</span>
            Call Now – Immediate Dispatch
          </a>
          <a href="#services" className="btn btn-outline">
            Our Services
            <span className="material-symbols-rounded">arrow_downward</span>
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>24/7</strong>
            <span>Always Available</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <strong>100+</strong>
            <span>Happy Clients</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <strong>Fast</strong>
            <span>Response Times</span>
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
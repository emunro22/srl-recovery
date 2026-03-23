import Image from 'next/image'
import styles from './About.module.css'

const features = [
  { icon: 'speed', label: 'Rapid Response', desc: 'Fast dispatch across Glasgow and surrounding areas' },
  { icon: 'verified', label: 'Fully Insured', desc: 'Compliant, insured recovery you can trust' },
  { icon: 'support_agent', label: '24/7 Available', desc: 'Round-the-clock cover — nights, weekends, holidays' },
  { icon: 'price_check', label: 'Transparent Pricing', desc: 'No hidden fees, no surprises' },
]

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/logo.png"
              width={420}
              height={420}
              alt="SRL Recovery Logo"
              className={styles.logo}
            />
            <div className={styles.badge}>
              <span className="material-symbols-rounded">emoji_events</span>
              <div>
                <strong>15+ Years</strong>
                <span>In the Industry</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <p className="section-subtitle">About Us</p>
          <h2 className={`section-title ${styles.title}`}>
            Glasgow&apos;s Most Trusted Recovery Specialists
          </h2>
          <p className="section-text">
            Few things are more stressful than breaking down. Whether you&apos;re
            commuting to work or on a family trip, SRL Recovery is the team that
            moves fast, works professionally, and gets you out of trouble without
            excuses.
          </p>
          <p className={`section-text ${styles.spacer}`}>
            We&apos;re experienced recovery specialists serving Glasgow and surrounding
            areas — available 24 hours a day, 7 days a week, 365 days a year.
          </p>

          <div className={styles.features}>
            {features.map((f) => (
              <div key={f.label} className={styles.feature}>
                <div className={styles.icon}>
                  <span className="material-symbols-rounded">{f.icon}</span>
                </div>
                <div>
                  <strong>{f.label}</strong>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>100+</strong>
              <span>Happy Clients</span>
            </div>
            <div className={styles.stat}>
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <strong>24/7</strong>
              <span>Always On</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

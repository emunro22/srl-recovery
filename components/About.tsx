import Image from 'next/image'
import styles from './About.module.css'

const features = [
  { icon: 'speed', label: 'Avg 30–45 Mins', desc: 'Average arrival time across our coverage area' },
  { icon: 'verified', label: 'Fully Insured', desc: 'Compliant, insured recovery you can trust' },
  { icon: 'support_agent', label: '24/7 Available', desc: 'Round-the-clock cover — nights, weekends, holidays' },
  { icon: 'price_check', label: 'Transparent Pricing', desc: 'Clear quote on the phone, no hidden fees' },
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
                <strong>17 Years</strong>
                <span>In the Motor Trade</span>
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
            Founded in 2023 by William — with 17 years in the motor trade behind him —
            SRL Recovery has grown rapidly to complete <strong>250+ recovery jobs every month</strong>
            {' '}across Glasgow and surrounding areas. Thousands of happy customers later,
            we&apos;re available 24 hours a day, 7 days a week, 365 days a year.
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
              <strong>250+</strong>
              <span>Jobs Per Month</span>
            </div>
            <div className={styles.stat}>
              <strong>17</strong>
              <span>Years in Trade</span>
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

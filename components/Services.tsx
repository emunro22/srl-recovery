import styles from './Services.module.css'

const services = [
  {
    icon: 'local_shipping',
    title: '24/7 Breakdown Recovery',
    desc: 'Round-the-clock vehicle recovery in Glasgow, whenever you need it. Cars, vans, and light commercial vehicles.',
    highlight: true,
  },
  {
    icon: 'car_crash',
    title: 'Accident Recovery Glasgow',
    desc: 'Fast, careful recovery following road traffic accidents. We handle both fault and non-fault claims.',
  },
  {
    icon: 'directions_car',
    title: 'Vehicle Transport',
    desc: 'Secure, insured transport for vehicles across Glasgow and the UK. Specialist and prestige vehicles welcome.',
  },
  {
    icon: 'build',
    title: 'Roadside Assistance',
    desc: 'Quick fixes to get you moving without needing full recovery where possible — saving you time and money.',
  },
  {
    icon: 'gavel',
    title: 'Accident Claim Handling',
    desc: 'We manage your claim from start to finish at no upfront cost. Fault and non-fault accident support available.',
  },
  {
    icon: 'swap_horiz',
    title: 'Vehicle Replacement',
    desc: 'Assistance sourcing a replacement vehicle where applicable during your accident claim process.',
  },
]

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <div className={styles.header}>
          <p className="section-subtitle">What We Do</p>
          <h2 className={`section-title ${styles.title}`}>
            Complete Recovery & <br />Accident Services
          </h2>
          <p className={`section-text ${styles.lead}`}>
            From emergency breakdowns to full accident claim management — SRL
            Recovery handles it all so you don&apos;t have to.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div
              key={s.title}
              className={`${styles.card} ${s.highlight ? styles.highlighted : ''}`}
            >
              <div className={styles.iconWrap}>
                <span className="material-symbols-rounded">{s.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              {s.highlight && (
                <div className={styles.badge}>Most Requested</div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaInner}>
            <div>
              <h3>Need Help Right Now?</h3>
              <p>We dispatch immediately across Glasgow — 24 hours a day.</p>
            </div>
            <a href="tel:+447776356556" className="btn">
              <span className="material-symbols-rounded">call</span>
              Call 07776 356 556
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

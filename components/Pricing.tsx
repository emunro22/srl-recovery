import styles from './Pricing.module.css'

const tiers = [
  {
    title: 'Local Recovery',
    price: 'From £60',
    note: 'Call out',
    detail: '+ £1.50 per mile',
    icon: 'local_shipping',
    items: [
      'Glasgow and surrounding areas',
      'Cars, vans, and light commercial',
      'Clear price quoted on the phone',
    ],
  },
  {
    title: 'Motorway & Live Lane',
    price: '£120',
    note: 'Flat rate',
    detail: '+ £1.50 per mile',
    icon: 'speed',
    items: [
      'M8, M73, M74, M77, M80',
      'Live lane and hard shoulder',
      'Priority dispatch for safety',
    ],
    featured: true,
  },
  {
    title: 'Additional Services',
    price: '£40',
    note: 'Each',
    detail: 'Winch fee or skate fee',
    icon: 'build',
    items: [
      'Winch fee where required',
      'Skate fee for immobilised vehicles',
      'Applied only when needed',
    ],
  },
]

export default function Pricing() {
  return (
    <section className={`section ${styles.pricing}`} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <p className="section-subtitle">Pricing</p>
          <h2 className={`section-title ${styles.title}`}>Transparent, Up-Front Pricing</h2>
          <p className={`section-text ${styles.lead}`}>
            No hidden fees, no surprises. Every job is quoted clearly on the phone before we
            dispatch — you’ll know exactly what you’re paying before we set off.
          </p>
        </div>

        <div className={styles.grid}>
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`${styles.card} ${tier.featured ? styles.featured : ''}`}
            >
              <div className={styles.iconWrap}>
                <span className="material-symbols-rounded">{tier.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{tier.title}</h3>
              <div className={styles.priceBlock}>
                <strong className={styles.price}>{tier.price}</strong>
                <span className={styles.note}>{tier.note}</span>
              </div>
              <p className={styles.detail}>{tier.detail}</p>
              <ul className={styles.items}>
                {tier.items.map((it) => (
                  <li key={it}>
                    <span className="material-symbols-rounded">check_circle</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footnote}>
          <span className="material-symbols-rounded">info</span>
          <p>
            All prices subject to VAT. Final quote depends on location, distance, and vehicle
            type — call us for an exact price before we dispatch.
          </p>
        </div>

        <div className={styles.cta}>
          <a href="tel:+447776356556" className="btn">
            <span className="material-symbols-rounded">call</span>
            Get a Quote — 07776 356 556
          </a>
        </div>
      </div>
    </section>
  )
}

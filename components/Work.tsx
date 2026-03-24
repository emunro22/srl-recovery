import Image from 'next/image'
import styles from './Work.module.css'

const projects = [
  {
    src: '/images/work-10.jpg',
    title: 'Classic Car Recovery',
    subtitle: 'Vehicle Transport',
    tag: 'Prestige',
  },
  {
    src: '/images/work-14.jpg',
    title: 'Van Recovery – Night Call',
    subtitle: 'Emergency Breakdown',
    tag: '24/7',
  },
  {
    src: '/images/work-11.jpg',
    title: 'SUV Recovery',
    subtitle: 'Roadside Recovery',
    tag: 'Fast Response',
  },
  {
    src: '/images/work-12.jpg',
    title: 'Night-Time Recovery',
    subtitle: 'Emergency Breakdown',
    tag: '24/7',
  },
  {
    src: '/images/work-13.jpg',
    title: 'Car Transport',
    subtitle: 'Vehicle Transport',
    tag: 'Insured',
  },
  {
    src: '/images/work-15.jpg',
    title: 'Saloon Recovery',
    subtitle: 'Breakdown Recovery',
    tag: 'Glasgow',
  },
  {
    src: '/images/work-16.jpg',
    title: 'Flatbed Recovery',
    subtitle: 'Vehicle Transport',
    tag: 'Commercial',
  },
  {
    src: '/images/work-17.jpg',
    title: 'Performance Car Recovery',
    subtitle: 'Specialist Recovery',
    tag: 'Prestige',
  },
]

export default function Work() {
  return (
    <section className={`section ${styles.work}`} id="work">
      <div className="container">
        <div className={styles.header}>
          <p className="section-subtitle">Recent Jobs</p>
          <h2 className={`section-title ${styles.title}`}>
            Latest Work We&apos;ve Done
          </h2>
          <p className={`section-text ${styles.lead}`}>
            Every job is handled with care and professionalism. Here&apos;s a look at some of our recent recovery and transport jobs across Glasgow.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
              <figure className={styles.figure}>
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.img}
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              </figure>
              <div className={styles.overlay}>
                <span className={styles.tag}>{p.tag}</span>
                <div className={styles.info}>
                  <p className={styles.cardSubtitle}>{p.subtitle}</p>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <a href="/work" className="btn btn-outline">
            View All Our Work
            <span className="material-symbols-rounded">arrow_forward</span>
          </a>
        </div>

        <div className={styles.callout}>
          <span className="material-symbols-rounded">photo_camera</span>
          <p>Follow us on <a href="https://www.facebook.com/profile.php?id=100091314683575" target="_blank" rel="noopener noreferrer">Facebook</a> for our latest jobs</p>
        </div>
      </div>
    </section>
  )
}

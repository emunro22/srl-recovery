import Image from 'next/image'
import Link from 'next/link'
import styles from './Work.module.css'
import { getGalleryImages } from '@/lib/db'

export default async function Work() {
  let images: Awaited<ReturnType<typeof getGalleryImages>> = []
  try {
    images = await getGalleryImages()
  } catch (err) {
    console.error('Work: failed to load gallery images', err)
  }

  // Show the 8 most recent images on the homepage
  const projects = images.slice(0, 8)

  // If the DB is empty (e.g. before seeding), don't render the section at all
  if (projects.length === 0) return null

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
            <div key={p.id} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>
              <figure className={styles.figure}>
                <Image
                  src={p.url}
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
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link href="/work" className="btn btn-outline">
            View All Our Work
            <span className="material-symbols-rounded">arrow_forward</span>
          </Link>
        </div>
        <div className={styles.callout}>
          <span className="material-symbols-rounded">photo_camera</span>
          <p>Follow us on <a href="https://www.facebook.com/profile.php?id=100091314683575" target="_blank" rel="noopener noreferrer">Facebook</a> for our latest jobs</p>
        </div>
      </div>
    </section>
  )
}

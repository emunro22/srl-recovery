import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getGalleryImages } from '@/lib/db'

export const metadata = {
  title: 'Photos & Videos – SRL Recovery Glasgow',
  description:
    'Browse recent breakdown recovery and vehicle transport photos and videos across Glasgow and surrounding areas.',
  alternates: { canonical: 'https://srlrecovery.com/work' },
}

export const dynamic = 'force-dynamic'

export default async function WorkPage() {
  let images: Awaited<ReturnType<typeof getGalleryImages>> = []
  try {
    images = await getGalleryImages()
  } catch (err) {
    console.error('Failed to load gallery images', err)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className="section-subtitle">Portfolio</p>
            <h1 className={styles.title}>Photos &amp; Videos of Our Work</h1>
            <p className={styles.lead}>
              Every job handled with care and professionalism. Browse recent
              recovery and transport photos and videos across Glasgow and surrounding areas.
              New jobs added regularly.
            </p>
          </div>
        </div>

        <section className={styles.gallery}>
          <div className="container">
            {images.length === 0 ? (
              <p className={styles.empty}>
                Gallery coming soon — check back shortly.
              </p>
            ) : (
              <div className={styles.grid}>
                {images.map((img, i) => (
                  <div key={img.id} className={styles.card}>
                    <figure className={styles.figure}>
                      {img.media_type === 'video' ? (
                        <video
                          src={img.url}
                          className={styles.img}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <Image
                          src={img.url}
                          alt={img.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className={styles.img}
                          loading={i < 6 ? 'eager' : 'lazy'}
                        />
                      )}
                    </figure>
                    <div className={styles.overlay}>
                      <span className={styles.tag}>{img.tag}</span>
                      <div>
                        <p className={styles.cardTitle}>{img.title}</p>
                        {img.description && <p className={styles.cardDesc}>{img.description}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <div className={styles.cta}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h2>Need Recovery Right Now?</h2>
                <p>Available 24/7 across Glasgow and surrounding areas</p>
              </div>
              <a href="tel:+441698700970" className="btn">
                <span className="material-symbols-rounded">call</span>
                Call 01698 700970
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
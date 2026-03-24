import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const images = [
  { src: '/images/work-1.jpg', title: 'Classic Car Recovery', tag: 'Prestige' },
  { src: '/images/work-2.jpg', title: 'Van Recovery', tag: '24/7' },
  { src: '/images/work-3.jpg', title: 'SUV Recovery', tag: 'Roadside' },
  { src: '/images/work-4.jpg', title: 'Night Recovery', tag: '24/7' },
  { src: '/images/work-5.jpg', title: 'Car Transport', tag: 'Transport' },
  { src: '/images/work-6.jpg', title: 'Saloon Recovery', tag: 'Glasgow' },
  { src: '/images/work-7.jpg', title: 'Flatbed Recovery', tag: 'Commercial' },
  { src: '/images/work-8.jpg', title: 'Performance Car', tag: 'Prestige' },
  { src: '/images/work-9.jpg', title: 'Classic Car Recovery', tag: 'Prestige' },
  { src: '/images/work-10.jpg', title: 'Van Recovery', tag: '24/7' },
  { src: '/images/work-11.jpg', title: 'SUV Recovery', tag: 'Roadside' },
  { src: '/images/work-12.jpg', title: 'Night Recovery', tag: '24/7' },
  { src: '/images/work-13.jpg', title: 'Car Transport', tag: 'Transport' },
  { src: '/images/work-14.jpg', title: 'Saloon Recovery', tag: 'Glasgow' },
  { src: '/images/work-15.jpg', title: 'Flatbed Recovery', tag: 'Commercial' },
  { src: '/images/work-16.jpg', title: 'Performance Car', tag: 'Prestige' },
  { src: '/images/work-17.jpg', title: 'Saloon Recovery', tag: 'Glasgow' },
  { src: '/images/work-18.jpg', title: 'Flatbed Recovery', tag: 'Commercial' },
  { src: '/images/work-19.jpg', title: 'Performance Car', tag: 'Prestige' },


]

export const metadata = {
  title: 'Our Work – SRL Recovery Glasgow',
  description: 'Browse our recent breakdown recovery and vehicle transport jobs across Glasgow and surrounding areas.',
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        <div className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className="section-subtitle">Portfolio</p>
            <h1 className={styles.title}>All Our Recent Work</h1>
            <p className={styles.lead}>
              Every job handled with care and professionalism. Browse our recent
              recovery and transport jobs across Glasgow and surrounding areas.
              New jobs added regularly.
            </p>
          </div>
        </div>

        <section className={styles.gallery}>
          <div className="container">
            <div className={styles.grid}>
              {images.map((img, i) => (
                <div key={i} className={styles.card}>
                  <figure className={styles.figure}>
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.img}
                      loading={i < 6 ? 'eager' : 'lazy'}
                    />
                  </figure>
                  <div className={styles.overlay}>
                    <span className={styles.tag}>{img.tag}</span>
                    <p className={styles.cardTitle}>{img.title}</p>
                  </div>
                </div>
              ))}
            </div>

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
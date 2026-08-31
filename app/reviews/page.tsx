import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleLogo from '@/components/GoogleLogo'
import { getGoogleReviews } from '@/lib/googleReviews'
import { reviews } from '@/lib/reviews-data'
import styles from './page.module.css'

export const metadata = {
  title: 'Customer Reviews | SRL Recovery',
  description: `Read all of SRL Recovery's ${reviews.length}+ verified customer reviews from Google — 24/7 breakdown and accident recovery across Glasgow.`,
  alternates: { canonical: 'https://srlrecovery.com/reviews' },
  robots: { index: true, follow: true },
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=SRL+recovery+24%2F7+breakdown+recovery+Glasgow'

function initials(name: string) {
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('')
}

export default async function ReviewsPage() {
  const live = await getGoogleReviews()
  const rating = live?.rating ?? 5.0
  const totalReviews = Math.max(live?.totalReviews ?? 0, reviews.length)

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>Customer Reviews</h1>
            <p className={styles.subtitle}>
              Every review counts — here&apos;s what our customers have said after we&apos;ve
              recovered their vehicle.
            </p>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={styles.googleBadge}>
              <GoogleLogo size={20} />
              <span className={styles.googleStars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-rounded">star</span>
                ))}
              </span>
              <span><strong>{rating.toFixed(1)}</strong> from <strong>{totalReviews}+ reviews</strong> on Google</span>
              <span className="material-symbols-rounded">arrow_outward</span>
            </a>
          </div>
        </section>

        <section className={styles.body}>
          <div className="container">
            <div className={styles.grid}>
              {reviews.map((r, i) => (
                <div className={styles.card} key={i}>
                  <div className={styles.cardHead}>
                    <div className={styles.avatar}>{initials(r.author)}</div>
                    <div className={styles.authorMeta}>
                      <div className={styles.authorRow}>
                        <strong>{r.author}</strong>
                        {r.localGuide && <span className={styles.localGuide}>Local Guide</span>}
                      </div>
                      <div className={styles.meta}>
                        <div className={styles.stars}>
                          {Array.from({ length: 5 }).map((_, s) => (
                            <span key={s} className="material-symbols-rounded">star</span>
                          ))}
                        </div>
                        <span>&middot;</span>
                        <span>{r.relativeTime}</span>
                        <GoogleLogo size={12} />
                      </div>
                    </div>
                  </div>
                  <p className={styles.quote}>{r.text}</p>
                </div>
              ))}
            </div>
            <p className={styles.note}>
              Reviews are copied from our public Google Business Profile and updated by hand as new ones come in.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

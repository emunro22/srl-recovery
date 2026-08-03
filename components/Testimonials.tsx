import styles from './Testimonials.module.css'
import { getGoogleReviews } from '@/lib/googleReviews'

// Used only until GOOGLE_PLACE_ID is set (see lib/googleReviews.ts) — remove once
// live reviews are confirmed working.
const fallbackTestimonials = [
  {
    quote: 'So pleased with William at SRL recovery who was so helpful. Provided a quote on the call and was able to recover our vehicle same day. Most competitive price (I had phoned around a lot of recovery services) and great service.',
    author: 'Grace Brady',
    stars: 5,
  },
  {
    quote: 'Excellent service provided. A recovery truck appeared within 20 mins of my call and I was dropped off at the local garage. The previous company I had called had quoted a wait time of 2 hours. Good pricing too!',
    author: 'Alanna Hagan',
    stars: 5,
  },
  {
    quote: 'Contacted SRL and William was very helpful and kept communication lines open throughout the process. Van was recovered within 50 mins and Lewis (Driver) was a pleasure to deal with. Highly recommended!',
    author: 'Brian Wilson',
    stars: 5,
  },
  {
    quote: 'Absolutely brilliant service. I broke down in Renfrewshire and they were there in under 30 minutes.',
    author: 'Michael MacDonald',
    stars: 5,
  },
  {
    quote: 'Collected my keys from me at home, recovered my car and dropped it at the garage. Fast, friendly and efficient service. Thank you William, much appreciated — made a stressful situation much easier.',
    author: 'Emily Harding',
    stars: 5,
  },
  {
    quote: 'Broke down on Friday afternoon and called William at SRL who recovered the vehicle within an hour of calling and dropped it off in Glasgow for repair. First class service.',
    author: 'Wilson Rankin',
    stars: 5,
  },
  {
    quote: 'We were so happy with William. He rescued us in the middle of nowhere, dropped our car at a garage and took us to our hotel. Saved our vacation. He went well above and beyond his duty.',
    author: 'Emiliano Achaval',
    stars: 5,
  },
  {
    quote: 'They really looked after my wife and mother-in-law after an accident yesterday and went above and beyond, all with a smile. Big relief for me to know they were looked after.',
    author: 'Scott Tait',
    stars: 5,
  },
  {
    quote: 'Brilliant service — to the rescue within minutes and very careful and professional putting my Chevy Astro van on the truck. All round brilliant fast service.',
    author: 'Jason Burgess',
    stars: 5,
  },
]

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=SRL+recovery+24%2F7+breakdown+recovery+Glasgow'

function initials(name: string) {
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('')
}

export default async function Testimonials() {
  const live = await getGoogleReviews()

  const displayTestimonials = live && live.reviews.length > 0
    ? live.reviews.map((r) => ({ quote: r.text, author: r.author, stars: r.rating }))
    : fallbackTestimonials
  const rating = live?.rating ?? 5.0
  const totalReviews = live?.totalReviews ?? 58

  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-subtitle">Testimonials</p>
          <h2 className={`section-title ${styles.title}`}>What Our Customers Say</h2>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={styles.googleBadge}>
            <span className={styles.googleStars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="material-symbols-rounded">star</span>
              ))}
            </span>
            <span><strong>{rating.toFixed(1)}</strong> from <strong>{totalReviews}+ reviews</strong> on Google</span>
            <span className="material-symbols-rounded">arrow_outward</span>
          </a>
        </div>

        <div className={styles.grid}>
          {displayTestimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="material-symbols-rounded">star</span>
                ))}
              </div>
              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{initials(t.author)}</div>
                <div className={styles.authorMeta}>
                  <strong>{t.author}</strong>
                  <span>Verified Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
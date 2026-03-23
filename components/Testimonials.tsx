import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'Arrived quickly and handled everything professionally — couldn\'t ask for better.',
    author: 'Glasgow Customer',
    stars: 5,
  },
  {
    quote: 'Reliable, fast, and straight to the point. Highly recommended in Glasgow.',
    author: 'Glasgow Customer',
    stars: 5,
  },
  {
    quote: 'Helped me after an accident and took care of everything. Massive relief.',
    author: 'Glasgow Customer',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-subtitle">Testimonials</p>
          <h2 className={`section-title ${styles.title}`}>
            What Our Customers Say
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="material-symbols-rounded">star</span>
                ))}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <span className="material-symbols-rounded">person</span>
                </div>
                <div>
                  <strong>{t.author}</strong>
                  <span>Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

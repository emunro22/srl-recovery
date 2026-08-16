import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getBlogPosts } from '@/lib/db'
import styles from './page.module.css'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Blog – SRL Recovery Glasgow',
  description:
    "News, advice, and updates from Glasgow's trusted 24/7 breakdown and recovery specialists.",
  alternates: { canonical: 'https://srlrecovery.com/blog' },
}

export default async function BlogPage() {
  const posts = await getBlogPosts(true)

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className="section-subtitle">Latest Updates</p>
            <h1 className={styles.title}>The SRL Recovery Blog</h1>
            <p className={styles.lead}>
              News, advice, and recovery tips from Glasgow&apos;s trusted 24/7
              breakdown and recovery team.
            </p>
          </div>
        </div>

        <section className={styles.content}>
          <div className="container">
            {posts.length === 0 ? (
              <p className={styles.empty}>
                No posts published yet — check back soon.
              </p>
            ) : (
              <div className={styles.grid}>
                {posts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
                    {post.cover_image_url && (
                      <div className={styles.cardThumb}>
                        <Image
                          src={post.cover_image_url}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                          className={styles.cardImg}
                        />
                      </div>
                    )}
                    <div className={styles.cardBody}>
                      <p className={styles.cardCategory}>{post.category}</p>
                      <h2 className={styles.cardTitle}>{post.title}</h2>
                      {post.excerpt && (
                        <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      )}
                      <p className={styles.cardDate}>{formatDate(post.created_at)}</p>
                    </div>
                  </Link>
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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

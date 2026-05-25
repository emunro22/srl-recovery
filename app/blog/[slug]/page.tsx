import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getBlogPostBySlug } from '@/lib/db'
import styles from './page.module.css'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post || !post.published) return {}
  return {
    title: `${post.title} – SRL Recovery Blog`,
    description: post.excerpt || undefined,
    openGraph: post.cover_image_url
      ? { images: [{ url: post.cover_image_url }] }
      : undefined,
    alternates: { canonical: `/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post || !post.published) notFound()

  const paragraphs = post.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <>
      <Header />
      <main className={styles.main}>
        {post.cover_image_url && (
          <div className={styles.cover}>
            <Image
              src={post.cover_image_url}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className={styles.coverImg}
            />
            <div className={styles.coverOverlay} />
          </div>
        )}

        <article className={`container ${styles.article}`}>
          <Link href="/blog" className={styles.back}>
            <span className="material-symbols-rounded">arrow_back</span>
            All posts
          </Link>

          <header className={styles.header}>
            <p className={styles.category}>{post.category}</p>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.meta}>{formatDate(post.created_at)}</p>
          </header>

          {post.excerpt && (
            <p className={styles.lead}>{post.excerpt}</p>
          )}

          <div className={styles.body}>
            {paragraphs.length > 0 ? (
              paragraphs.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p className={styles.noContent}>No content yet.</p>
            )}
          </div>
        </article>

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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

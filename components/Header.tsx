'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100091314683575'
const INSTAGRAM_URL = 'https://www.instagram.com/srl_recovery_'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/areas', label: 'Areas' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
    { href: '/accident-claim', label: 'Free Accident Claim', prominent: true },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            width={120}
            height={59}
            alt="SRL Recovery Glasgow"
            priority
          />
        </Link>
        <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={link.prominent ? styles.navLinkAccident : styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials inside the mobile menu */}
          <div className={styles.mobileSocials}>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Desktop socials — sit between nav and the call button */}
        <div className={styles.desktopSocials}>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <a href="tel:+447776356556" className={`btn ${styles.ctaBtn}`}>
          <span className="material-symbols-rounded">call</span>
          <span>07776 356 556</span>
        </a>
        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      {/* Emergency CTA Banner */}
      <div className={styles.emergency}>
        <div className={`container ${styles.emergencyInner}`}>
          <div className={styles.emergencyText}>
            <span className="material-symbols-rounded">emergency</span>
            <div>
              <strong>Broken Down Right Now?</strong>
              <p>Call us for immediate dispatch — we respond 24/7</p>
            </div>
          </div>
          <a href="tel:+447776356556" className={`btn ${styles.emergencyBtn}`}>
            <span className="material-symbols-rounded">call</span>
            07776 356 556
          </a>
        </div>
      </div>

      <div className={`section ${styles.footerBody}`}>
        <div className={`container ${styles.grid}`}>

          {/* Brand */}
          <div className={styles.brand}>
            <Image
              src="/images/logo.png"
              width={140}
              height={69}
              alt="SRL Recovery"
              className={styles.logo}
            />
            <p className={styles.tagline}>
              Glasgow&apos;s trusted 24/7 breakdown and recovery service. Fast,
              professional, and always available for private and commercial clients.
            </p>
            <div className={styles.socials}>
              <a
                href="https://www.facebook.com/profile.php?id=100091314683575"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className={styles.social} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Our Services</h3>
            <ul className={styles.links}>
              {[
                '24/7 Breakdown Recovery',
                'Accident Recovery',
                'Vehicle Transport',
                'Roadside Assistance',
                'Accident Claim Handling',
                'Non-Fault Accident Support',
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className={styles.link}>
                    <span className="material-symbols-rounded">arrow_forward_ios</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact & Hours</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className="material-symbols-rounded">call</span>
                <a href="tel:+447776356556">07776 356 556</a>
              </li>
              <li className={styles.contactItem}>
                <span className="material-symbols-rounded">mail</span>
                <a href="mailto:srlautos@icloud.com">srlautos@icloud.com</a>
              </li>
              <li className={styles.contactItem}>
                <span className="material-symbols-rounded">location_on</span>
                <address>Glasgow, Scotland</address>
              </li>
            </ul>
            <div className={styles.hours}>
              <div className={styles.hoursRow}>
                <span>Monday – Sunday</span>
                <strong>24 Hours</strong>
              </div>
              <div className={`${styles.hoursRow} ${styles.highlight}`}>
                <span>Emergency Line</span>
                <strong>Always Open</strong>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>Copyright &copy; {new Date().getFullYear()} SRL Recovery. All Rights Reserved.</p>
          <p className={styles.legal}>
            Fully insured &amp; compliant service · Glasgow, Scotland
          </p>
        </div>
      </div>
    </footer>
  )
}

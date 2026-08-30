import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Privacy Policy | SRL Recovery',
  description: 'How SRL Recovery collects, uses, and protects your personal data.',
  alternates: { canonical: 'https://srlrecovery.com/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: 30 August 2026</p>
          </div>
        </section>

        <section className={styles.body}>
          <div className="container">
            <div className={styles.content}>
              <p>
                SRL Recovery (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides breakdown and
                accident recovery services across Glasgow and the surrounding area. This policy explains what
                personal data we collect when you contact us or use this website, how we use it, and your
                rights under UK data protection law (the UK GDPR and the Data Protection Act 2018).
              </p>

              <h2>Who we are</h2>
              <p>
                SRL Recovery, Glasgow, Scotland. You can contact us about this policy or any data request at{' '}
                <a href="mailto:enquiries@srlrecovery.com">enquiries@srlrecovery.com</a> or on{' '}
                <a href="tel:+441698700970">01698 700970</a>.
              </p>

              <h2>What data we collect</h2>
              <ul>
                <li>
                  <strong>Contact and callback requests</strong> — your name, phone number, email address
                  (if provided), vehicle details, and any message you send us through the website or WhatsApp.
                </li>
                <li>
                  <strong>Booking and job details</strong> — if you become a customer, we keep a record of your
                  name, phone number, job date, and any notes needed to carry out and follow up on the recovery.
                </li>
                <li>
                  <strong>Website usage data</strong> — we use privacy-friendly, cookieless analytics to see
                  which pages are visited and how the site performs. This does not identify you personally.
                </li>
              </ul>

              <h2>How we use your data</h2>
              <ul>
                <li>To respond to callback requests and enquiries, and to arrange and carry out recovery jobs.</li>
                <li>To send you a confirmation or thank-you message after you contact us.</li>
                <li>
                  To ask for a review after a completed job, where you&apos;ve given us your contact details
                  as a customer.
                </li>
                <li>To understand how our website is used, so we can improve it.</li>
                <li>To meet our legal, insurance, and accounting obligations.</li>
              </ul>

              <h2>Who we share it with</h2>
              <p>
                We use a small number of trusted service providers to run our business and this website:
              </p>
              <ul>
                <li>Resend, to send email notifications and confirmations.</li>
                <li>WhatsApp (Meta), if you choose to contact us via WhatsApp.</li>
                <li>Our website hosting and database providers, to store enquiry, job, and site content data securely.</li>
              </ul>
              <p>
                Where an accident claim involves an insurer or repairer, we share only the information needed
                to progress your claim, with your knowledge. We do not sell your personal data.
              </p>

              <h2>How long we keep it</h2>
              <p>
                We keep enquiry and job records for as long as needed to provide our services, meet accounting
                and legal requirements, and handle any related insurance claim, and then delete or anonymise it.
              </p>

              <h2>Your rights</h2>
              <p>Under UK data protection law, you have the right to:</p>
              <ul>
                <li>Ask what personal data we hold about you and get a copy of it.</li>
                <li>Ask us to correct inaccurate data.</li>
                <li>Ask us to delete your data, where we don&apos;t need to keep it for legal reasons.</li>
                <li>Object to or restrict how we use your data.</li>
              </ul>
              <p>
                To exercise any of these rights, email{' '}
                <a href="mailto:enquiries@srlrecovery.com">enquiries@srlrecovery.com</a>. If you&apos;re not
                satisfied with our response, you can complain to the{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
                  Information Commissioner&apos;s Office (ICO)
                </a>.
              </p>

              <h2>Cookies</h2>
              <p>
                This site uses a minimal set of cookies and similar technologies. See our{' '}
                <a href="/terms">Terms &amp; Conditions</a> or the cookie banner shown on your first visit for
                details and to manage your preferences.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top of
                this page shows when it was last revised.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

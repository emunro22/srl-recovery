import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Terms & Conditions | SRL Recovery',
  description: 'Terms and conditions for SRL Recovery breakdown, accident, and vehicle transport services.',
  alternates: { canonical: 'https://srlrecovery.com/terms' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>Terms &amp; Conditions</h1>
            <p className={styles.updated}>Last updated: 30 August 2026</p>
          </div>
        </section>

        <section className={styles.body}>
          <div className="container">
            <div className={styles.content}>
              <p>
                These terms apply whenever you use SRL Recovery for breakdown recovery, accident recovery,
                vehicle transport, or roadside assistance. By requesting or accepting our service, you agree
                to them. If anything here is unclear, call us on{' '}
                <a href="tel:+441698700970">01698 700970</a> before booking.
              </p>

              <h2>Our service</h2>
              <p>
                We provide 24/7 breakdown recovery, accident recovery, vehicle transport, and roadside
                assistance across Glasgow and the surrounding areas we list on this site. Quoted prices are
                based on the information you give us when you call or message, vehicle type, location, and
                job details. The final price may change if the job turns out to be different once our driver
                arrives (for example, a different vehicle size, access issues, or extra distance).
              </p>

              <h2>Booking and cancellation</h2>
              <p>
                A job is confirmed once we&apos;ve agreed dispatch with you by phone, WhatsApp, or our website
                callback form. If you need to cancel, tell us as soon as possible, if our vehicle is already
                en route or on scene, a call-out charge may still apply.
              </p>

              <h2>Payment</h2>
              <p>
                Payment is due on completion of the job unless we&apos;ve agreed otherwise, such as with
                non-fault accident claims where costs are recovered from the at-fault driver&apos;s insurer.
                See our <a href="/accident-claim">accident claims</a> page for how that process works.
              </p>

              <h2>Liability</h2>
              <p>
                We take reasonable care when recovering, transporting, and storing your vehicle. We&apos;re
                fully insured for our recovery operations. We&apos;re not responsible for pre-existing damage,
                mechanical faults, or loss of personal items left in the vehicle. Please remove valuables
                before recovery where it&apos;s safe to do so. Nothing in these terms limits liability that
                cannot be limited by law, such as liability for death or personal injury caused by negligence.
              </p>

              <h2>Storage</h2>
              <p>
                Where a vehicle is placed into storage as part of an accident claim, storage fees accrue from
                the date of storage and are recovered as part of the claims process for non-fault customers,
                or payable by you for at-fault or private storage arrangements agreed in advance.
              </p>

              <h2>Website use</h2>
              <p>
                Content on this website is provided for general information about our services and is not a
                guarantee of exact pricing or response time, actual arrival times depend on traffic, weather,
                and vehicle location. You may not copy or reuse content from this site without our permission.
              </p>

              <h2>Governing law</h2>
              <p>
                These terms are governed by Scots law, and any disputes are subject to the exclusive
                jurisdiction of the Scottish courts.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms? Email{' '}
                <a href="mailto:enquiries@srlrecovery.com">enquiries@srlrecovery.com</a> or call{' '}
                <a href="tel:+441698700970">01698 700970</a>. See also our{' '}
                <a href="/privacy">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

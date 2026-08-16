import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppLink from '@/components/WhatsAppLink'
import styles from './page.module.css'

export const metadata = {
  title: 'Accident Recovery Glasgow | Non-Fault & At-Fault Claims | SRL Recovery',
  description:
    'Had an accident? SRL Recovery handles everything start to finish at zero upfront cost — free recovery, hire car within 24 hours, full claim management. Average £3,000 non-fault settlement. Call 01698 700970.',
  alternates: { canonical: 'https://srlrecovery.com/accident-claim' },
}

export default function AccidentClaimPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Should I call my insurance company after a non-fault accident?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "If the accident was not your fault, call SRL Recovery before you call your own insurer. Calling your insurer first can trigger your own policy, affect your no-claims bonus, and reduce your compensation. We deal with the at-fault driver's insurer directly — protecting your policy completely.",
        },
      },
      {
        '@type': 'Question',
        name: 'How much does non-fault accident recovery cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nothing upfront. We handle your recovery, hire car, and full claim management at zero cost to you. We recover our fees from the at-fault driver's insurance at the end of the claim.",
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can I get a hire car after a non-fault accident?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We aim to arrange a like-for-like replacement vehicle within 24 hours of the non-fault claim being lodged. You get a vehicle matching yours in size and specification — not a basic courtesy car.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the average non-fault accident settlement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SRL Recovery secures an average of £3,000 per non-fault customer through the claims process, covering recovery, storage, hire car costs, and other losses from the accident.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if the accident was my fault?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At-fault recovery is also handled at no upfront cost. We deal directly with your insurance company, arrange secure storage, coordinate repairs, and manage the claim on your behalf. Standard policy excess applies as per your agreement.',
        },
      },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Accident Recovery and Claims Management Glasgow',
    description:
      'Non-fault and at-fault accident recovery in Glasgow. Free recovery, hire car within 24 hours, full insurance claim management at no upfront cost.',
    provider: {
      '@type': 'AutoRepair',
      '@id': 'https://srlrecovery.com/#business',
      name: 'SRL Recovery',
      telephone: '+441698700970',
      url: 'https://srlrecovery.com',
    },
    areaServed: { '@type': 'City', name: 'Glasgow' },
    url: 'https://srlrecovery.com/accident-claim',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Zero upfront cost for non-fault accident recovery and claim management',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srlrecovery.com/' },
      { '@type': 'ListItem', position: 2, name: 'Accident Claims', item: 'https://srlrecovery.com/accident-claim' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className={styles.main}>

        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.warningBanner}>
              <span className="material-symbols-rounded">warning</span>
              Important — read before calling your insurer
            </div>
            <h1 className={styles.title}>
              Had an Accident?<br />
              <span className={styles.gradient}>Don&apos;t Call Your Insurance Yet</span>
            </h1>
            <p className={styles.lead}>
              If the accident wasn&apos;t your fault, SRL Recovery handles everything start
              to finish — recovery from the scene, a like-for-like hire car (we aim to arrange
              within 24 hours), and full claim management at{' '}<strong>zero cost to non-fault customers</strong>.
              {' '}Most people don&apos;t know what they&apos;re entitled to. We do.
            </p>
            <div className={styles.heroActions}>
              <a href="tel:+441698700970" className="btn">
                <span className="material-symbols-rounded">call</span>
                Call 01698 700970
              </a>
              <WhatsAppLink source="accident-claim-hero" className="btn btn-outline">
                WhatsApp Us
              </WhatsAppLink>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <strong>£0</strong>
                <span>Cost to non-fault customers</span>
              </div>
              <div className={styles.heroStat}>
                <strong>24 hrs</strong>
                <span>Hire car arranged</span>
              </div>
              <div className={styles.heroStat}>
                <strong>£3,000</strong>
                <span>Average per person in the vehicle (non-fault)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Warning ── */}
        <section className={styles.warningSection}>
          <div className="container">
            <div className={styles.warningInner}>
              <h2 className={styles.warningHeading}>
                <span className="material-symbols-rounded">warning</span>
                Why You Should NOT Call Your Insurer First
              </h2>
              <p className={styles.warningText}>
                Most people&apos;s instinct after an accident is to call their own insurance company.
                If the accident was not your fault, this is one of the most common — and costly —
                mistakes we see people make every single day.
              </p>
              <ul className={styles.warningList}>
                <li>
                  <span className="material-symbols-rounded">close</span>
                  Calling your own insurer can trigger your own policy — even if the other driver was
                  at fault. This can affect your no-claims bonus and increase your premium at renewal.
                </li>
                <li>
                  <span className="material-symbols-rounded">close</span>
                  Your insurer will provide a basic courtesy car, not a like-for-like replacement.
                  You&apos;re legally entitled to a vehicle matching yours in size and specification.
                </li>
                <li>
                  <span className="material-symbols-rounded">close</span>
                  They will direct your car to their preferred repairer — which may not deliver the
                  best repair quality or timescale for you.
                </li>
                <li>
                  <span className="material-symbols-rounded">close</span>
                  Going through your own insurer often significantly reduces the total compensation
                  you&apos;re able to recover for the accident.
                </li>
              </ul>
              <div className={styles.warningResolution}>
                <strong>What to do instead</strong>
                Call SRL Recovery on 01698 700970 — before anyone else. We deal directly with the
                at-fault driver&apos;s insurance company on your behalf, protecting your own policy
                completely. You get a proper like-for-like replacement car, immediate recovery,
                and the full claim handled from start to finish.
              </div>
            </div>
          </div>
        </section>

        {/* ── Claims cards ── */}
        <section className={styles.claimsSection}>
          <div className="container">
            <div className={styles.claimsHeading}>
              <p className="section-subtitle">Full coverage</p>
              <h2 className="section-title">
                Non-Fault or At-Fault —<br />We Handle Both
              </h2>
            </div>
            <div className={styles.claimsGrid}>

              <div className={`${styles.claimCard} ${styles.featured}`}>
                <span className={styles.claimBadge}>Non-Fault — Not Your Fault</span>
                <h2>Zero Cost. Full Entitlement.</h2>
                <p>
                  The other driver caused the accident — their insurer pays for everything. Most
                  people don&apos;t realise the full extent of what they&apos;re entitled to recover.
                  We make sure you get every penny.
                </p>
                <ul className={styles.claimIncludes}>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Immediate vehicle recovery from the scene
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Like-for-like hire car — we aim to arrange within 24 hours
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Secure vehicle storage
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Vehicle repaired to pre-accident condition
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Full claim managed against the at-fault insurer
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    No-claims bonus fully protected
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Your own insurer never contacted
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Free legal advice included
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Stress-free experience — call for free advice
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Historic personal injury claims up to 3 years — we can help
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Help with your policy excess
                  </li>
                </ul>
                <div className={styles.payoutBadge}>
                  <strong>£3,000 average</strong>
                  <span>per person in the vehicle (non-fault)</span>
                </div>
              </div>

              <div className={styles.claimCard}>
                <span className={styles.claimBadge}>At-Fault — Your Fault</span>
                <h2>No Upfront Cost. No Hassle.</h2>
                <p>
                  Even when the accident was your fault, you shouldn&apos;t have to spend hours on
                  hold with your insurer. We handle everything directly — from recovery to repair —
                  so you don&apos;t have to.
                </p>
                <ul className={styles.claimIncludes}>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Immediate vehicle recovery from the scene
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Secure storage arranged
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    We deal directly with your insurance company for you
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Full claim administration handled on your behalf
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    Stress-free experience — call for free advice
                  </li>
                  <li>
                    <span className="material-symbols-rounded">check_circle</span>
                    No hours on the phone — we do it all
                  </li>
                </ul>
                <p className={styles.atFaultNote}>
                  Passengers in an at-fault vehicle can still claim personal injury compensation
                  — average £3,000 per person. The at-fault driver cannot claim personal injury.
                  Standard policy excess applies as per your insurance agreement.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── What we handle ── */}
        <section className={styles.handleSection}>
          <div className="container">
            <p className="section-subtitle">Every stage covered</p>
            <h2 className="section-title">We Handle It All — Start to Finish</h2>
            <div className={styles.handleGrid}>
              <div className={styles.handleCard}>
                <span className="material-symbols-rounded">local_shipping</span>
                <h3>Scene Recovery</h3>
                <p>
                  We recover your vehicle from the accident scene immediately, 24/7. Day or night,
                  anywhere in Glasgow — we dispatch straight away and handle Police Scotland
                  coordination if needed.
                </p>
              </div>
              <div className={styles.handleCard}>
                <span className="material-symbols-rounded">warehouse</span>
                <h3>Secure Storage</h3>
                <p>
                  Your vehicle goes into secure, covered storage while the claim is processed.
                  Storage costs are claimed back from the relevant insurer — you pay nothing
                  upfront.
                </p>
              </div>
              <div className={styles.handleCard}>
                <span className="material-symbols-rounded">directions_car</span>
                <h3>Like-for-Like Hire Car</h3>
                <p>
                  Non-fault customers get a replacement vehicle matching theirs in size and
                  specification — we aim to arrange within 24 hours. Not a small runabout. A proper,
                  like-for-like car at no cost to you.
                </p>
              </div>
              <div className={styles.handleCard}>
                <span className="material-symbols-rounded">build</span>
                <h3>Repair Through Insurance</h3>
                <p>
                  We coordinate repairs through approved repairers to return your vehicle to
                  pre-accident condition. For non-fault claims, all repair costs are billed
                  directly to the at-fault insurer.
                </p>
              </div>
              <div className={styles.handleCard}>
                <span className="material-symbols-rounded">description</span>
                <h3>Full Claim Management</h3>
                <p>
                  The paperwork, chasing, calls, and admin — all handled by our team. You&apos;ll
                  be kept informed at every step without having to deal with insurers yourself.
                </p>
              </div>
              <div className={styles.handleCard}>
                <span className="material-symbols-rounded">verified</span>
                <h3>No-Claims Protection</h3>
                <p>
                  For non-fault claims, we ensure your own policy is never triggered. Your
                  no-claims bonus stays intact and your premium is completely unaffected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className={styles.processSection}>
          <div className="container">
            <div className={styles.processHeader}>
              <p className="section-subtitle">Step by step</p>
              <h2 className="section-title">What Happens After You Call Us</h2>
            </div>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Call SRL Recovery</h3>
                  <p>
                    Call 01698 700970 from the accident scene. Tell us where you are, what happened,
                    and whether you were at fault. We&apos;ll take it from there — no need to call
                    anyone else first.
                  </p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>We recover your vehicle</h3>
                  <p>
                    Our truck arrives, recovers your vehicle safely from the scene, and transports it
                    to secure storage. We handle any Police Scotland coordination if required.
                  </p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Hire car arranged (non-fault)</h3>
                  <p>
                    For non-fault claims, we aim to arrange a like-for-like replacement vehicle within
                    24 hours so you&apos;re never stranded. This is provided at zero cost to you —
                    claimed back from the at-fault insurer.
                  </p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>We manage the claim</h3>
                  <p>
                    We deal directly with the relevant insurer on your behalf — the at-fault
                    driver&apos;s insurer for non-fault claims, your own insurer for at-fault.
                    You don&apos;t spend hours on hold.
                  </p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>5</div>
                <div className={styles.stepContent}>
                  <h3>Your vehicle is repaired or settled</h3>
                  <p>
                    Your car is repaired to pre-accident condition through our approved repairer
                    network, or written off with a fair settlement. Either way, you get the outcome
                    you&apos;re entitled to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={styles.faqSection}>
          <div className="container">
            <p className="section-subtitle">Questions answered</p>
            <h2 className="section-title">Accident Claims — What You Need to Know</h2>
            <div className={styles.faqList}>
              <details className={styles.faqItem}>
                <summary>Should I call my insurance company after a non-fault accident?</summary>
                <p>
                  If the accident was not your fault, call SRL Recovery <em>before</em> you call your
                  own insurer. Calling your insurer first can trigger your own policy, affect your
                  no-claims bonus, and reduce your total compensation. We deal directly with the
                  at-fault driver&apos;s insurer — your own policy stays completely untouched.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>How much does non-fault accident recovery cost me?</summary>
                <p>
                  Nothing. Zero. We handle your recovery, hire car, storage, and full claim management
                  at no upfront cost to you. Our fees are recovered from the at-fault driver&apos;s
                  insurance at the end of the process.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>How quickly can I get a hire car?</summary>
                <p>
                  For non-fault claims, we aim to arrange a like-for-like replacement vehicle within
                  24 hours. This isn&apos;t a basic courtesy car — you get a vehicle matching yours in
                  type and size. If you drive an SUV, you get an SUV. If you drive a BMW, you get an
                  equivalent BMW.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>What does &ldquo;like-for-like&rdquo; hire car actually mean?</summary>
                <p>
                  It means your replacement vehicle matches what you normally drive. Your insurer would
                  give you a small courtesy car regardless of what you own. We get you a proper
                  equivalent — the same class and size — so you&apos;re not inconvenienced any more
                  than necessary.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>What&apos;s the average non-fault settlement?</summary>
                <p>
                  SRL Recovery secures an average of £3,000 per person in the vehicle for non-fault
                  customers. This covers recovery costs, storage, hire car, personal injury, and any
                  additional losses incurred as a direct result of the accident.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>What if the accident was my fault?</summary>
                <p>
                  At-fault recovery is also handled at no upfront cost to you. We deal directly with
                  your insurance company, arrange secure storage, coordinate your vehicle&apos;s repair,
                  and manage all the paperwork. Standard policy excess applies per your insurance agreement.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Where will my car be stored after the accident?</summary>
                <p>
                  Your vehicle goes into secure, covered storage immediately after recovery. We
                  coordinate with the relevant insurer to ensure all storage costs are covered as part
                  of the claim — you pay nothing upfront for this.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Will my no-claims bonus be affected?</summary>
                <p>
                  For non-fault claims handled correctly through us, your no-claims bonus should not be
                  affected at all. Because we deal directly with the at-fault insurer rather than going
                  through your own policy, your insurer has no grounds to adjust your premium.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Can I claim for personal injury after a non-fault accident?</summary>
                <p>
                  Yes. If you were injured in a non-fault accident, you may be entitled to personal
                  injury compensation — averaging £3,000 per person in the vehicle. We can help you
                  pursue historic personal injury claims up to 3 years after the accident. Call us for
                  free advice on what you&apos;re entitled to.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Can at-fault passengers claim personal injury?</summary>
                <p>
                  Yes. Passengers in an at-fault vehicle can still make a personal injury claim —
                  average £3,000 per person. The at-fault driver cannot claim personal injury
                  compensation, but passengers are not considered at fault and retain their right
                  to claim.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Can you help with my policy excess?</summary>
                <p>
                  Yes. We can advise on and help you recover your policy excess as part of the claims
                  process. Call us for free advice on your specific situation.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaInner}>
              <h2>Been in an Accident in Glasgow?</h2>
              <p>
                Call us before you call anyone else. We&apos;ll tell you exactly what you&apos;re
                entitled to and get everything moving — at zero cost to you, 24 hours a day.
              </p>
              <div className={styles.ctaActions}>
                <a href="tel:+441698700970" className="btn">
                  <span className="material-symbols-rounded">call</span>
                  Call 01698 700970
                </a>
                <WhatsAppLink source="accident-claim-cta" className="btn btn-outline">
                  WhatsApp Us
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── Disclaimer ── */}
        <section className={styles.disclaimerSection}>
          <div className="container">
            <p className={styles.disclaimer}>
              Terms and conditions apply. All services are subject to eligibility and the specific
              circumstances of your claim. Personal injury claims are subject to relevant limitation
              periods (typically 3 years from the date of the accident). Settlement figures are
              averages and individual outcomes may vary.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

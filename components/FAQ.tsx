'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'How quickly can you get to me?',
    a: 'Our average arrival time across Glasgow and surrounding areas is 30 to 45 minutes. This can vary depending on where your vehicle is and traffic conditions, but for urgent breakdowns we dispatch immediately.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We cover Glasgow, Paisley, East Kilbride, Motherwell, Hamilton, Coatbridge, Bearsden, Rutherglen, Clydebank, Cambuslang, Bellshill, Dumbarton, and surrounding areas. If you’re not sure we cover your location, just call us — we usually do.',
  },
  {
    q: 'Do you operate 24 hours a day?',
    a: 'Yes — 24 hours a day, 7 days a week, 365 days a year. Nights, weekends, bank holidays, Christmas Day — we’re always available.',
  },
  {
    q: 'Do you cover motorways?',
    a: 'Yes — we recover from the M8, M73, M74, M77, M80 and surrounding routes. Motorway and live-lane recoveries are a flat £120 plus £1.50 per mile. If you’ve broken down or had an accident on a motorway, call us straight away and stay in your vehicle with hazards on until we arrive.',
  },
  {
    q: 'How much does breakdown recovery cost?',
    a: 'Local jobs start from £60 call-out plus £1.50 per mile. Motorway and live-lane jobs are £120 flat plus £1.50 per mile. A £40 winch fee or £40 skate fee applies only where required. All prices subject to VAT, and we’ll quote a clear final price on the phone before we dispatch.',
  },
  {
    q: 'What if I’m in a non-fault accident?',
    a: 'We handle non-fault accident claims from start to finish at no upfront cost to you. We’ll recover your vehicle, manage the claim, and can help arrange a replacement vehicle while yours is being repaired.',
  },
  {
    q: 'Do I need to be a member or have breakdown cover?',
    a: 'No — you don’t need a membership or subscription. We’re a pay-as-you-go service available to anyone, anytime.',
  },
  {
    q: 'What types of vehicles can you recover?',
    a: 'Cars, vans, light commercial vehicles, SUVs, and classic or prestige cars. We handle everything from city runabouts to performance vehicles, with the right equipment for each.',
  },
  {
    q: 'How do I pay?',
    a: 'We accept cash, card, and bank transfer. Payment is taken once the job is complete.',
  },
  {
    q: 'What information do you need when I call?',
    a: 'Just your location (a postcode or nearby landmark), what’s happened (breakdown, accident, won’t start, etc.), the vehicle make and model, and a contact number. We’ll handle the rest.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className={`section ${styles.faq}`} id="faq">
      <div className="container">
        <div className={styles.header}>
          <p className="section-subtitle">FAQ</p>
          <h2 className={`section-title ${styles.title}`}>Common Questions</h2>
          <p className={`section-text ${styles.lead}`}>
            The things people most often ask before calling. Don’t see your question? Just call us — we’re happy to help.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className={`material-symbols-rounded ${styles.icon}`}>
                    {isOpen ? 'remove' : 'add'}
                  </span>
                </button>
                <div className={styles.answerWrap} aria-hidden={!isOpen}>
                  <div className={styles.answer}>{f.a}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.cta}>
          <p>Still have questions?</p>
          <a href="tel:+441698700970" className="btn">
            <span className="material-symbols-rounded">call</span>
            Call 01698 700970
          </a>
        </div>
      </div>
    </section>
  )
}

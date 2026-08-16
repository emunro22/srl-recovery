'use client'

import { useState } from 'react'
import styles from './CallbackForm.module.css'

export default function CallbackForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, vehicle, message }),
      })
      if (!res.ok) {
        const { error: msg } = await res.json().catch(() => ({ error: 'Failed to send' }))
        setError(msg || 'Failed to send')
        setStatus('error')
        return
      }
      setStatus('success')
      setName(''); setPhone(''); setEmail(''); setVehicle(''); setMessage('')
    } catch {
      setError('Network error. Please call us directly on 01698 700970.')
      setStatus('error')
    }
  }

  return (
    <section className={`section ${styles.callback}`} id="callback">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.intro}>
            <p className="section-subtitle">Request a Callback</p>
            <h2 className={`section-title ${styles.title}`}>Prefer We Call You?</h2>
            <p className="section-text">
              Leave your details and we&apos;ll call you straight back. For
              urgent breakdowns please phone us directly on{' '}
              <a href="tel:+441698700970" className={styles.phoneLink}>01698 700970</a>{' '}
              — but a callback works great for quotes, accident claim questions,
              or non-urgent jobs.
            </p>
            <ul className={styles.list}>
              <li>
                <span className="material-symbols-rounded">schedule</span>
                We call back fast — usually within minutes during the day
              </li>
              <li>
                <span className="material-symbols-rounded">verified</span>
                No obligation, no upfront fees
              </li>
              <li>
                <span className="material-symbols-rounded">support_agent</span>
                Speak directly to William or one of the team
              </li>
            </ul>
          </div>

          <div className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.successCard}>
                <span className={`material-symbols-rounded ${styles.successIcon}`}>check_circle</span>
                <h3>Request received</h3>
                <p>
                  Thanks — we&apos;ve got your callback request and will be in touch shortly.
                  For urgent breakdowns please call us directly on 01698 700970.
                </p>
                <button type="button" className={styles.againBtn} onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="cb-name" className={styles.label}>Name</label>
                  <input id="cb-name" type="text" value={name}
                    onChange={(e) => setName(e.target.value)} required maxLength={100}
                    placeholder="Your full name" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cb-phone" className={styles.label}>Phone</label>
                  <input id="cb-phone" type="tel" value={phone}
                    onChange={(e) => setPhone(e.target.value)} required maxLength={30}
                    placeholder="07XXX XXXXXX" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cb-email" className={styles.label}>
                    Email <span className={styles.optional}>(optional)</span>
                  </label>
                  <input id="cb-email" type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} maxLength={200}
                    placeholder="you@example.com" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cb-vehicle" className={styles.label}>
                    Vehicle <span className={styles.optional}>(optional)</span>
                  </label>
                  <input id="cb-vehicle" type="text" value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)} maxLength={120}
                    placeholder="e.g. 2019 Ford Transit" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cb-msg" className={styles.label}>
                    Details <span className={styles.optional}>(optional)</span>
                  </label>
                  <textarea id="cb-msg" value={message}
                    onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={3}
                    placeholder="Where are you and what's happened?" className={styles.textarea} />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={`btn ${styles.submitBtn}`} disabled={status === 'loading'}>
                  <span className="material-symbols-rounded">send</span>
                  {status === 'loading' ? 'Sending...' : 'Request Callback'}
                </button>
                <p className={styles.urgent}>
                  Broken down right now? <a href="tel:+441698700970">Call 01698 700970</a> instead.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
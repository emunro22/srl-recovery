'use client'

import { useEffect, useState } from 'react'
import styles from './CookieConsent.module.css'

const STORAGE_KEY = 'srl-cookie-consent'
export const CONSENT_EVENT = 'srl-consent-change'

export type ConsentValue = 'accepted' | 'rejected'

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null
  const value = window.localStorage.getItem(STORAGE_KEY)
  return value === 'accepted' || value === 'rejected' ? value : null
}

function setStoredConsent(value: ConsentValue) {
  window.localStorage.setItem(STORAGE_KEY, value)
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }))
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getStoredConsent() === null)
  }, [])

  if (!visible) return null

  const choose = (value: ConsentValue) => {
    setStoredConsent(value)
    setVisible(false)
  }

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className={styles.text}>
        We use a small number of cookies for site analytics, so we can see which pages help people the
        most. No marketing cookies. See our <a href="/privacy">Privacy Policy</a>.
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.reject} onClick={() => choose('rejected')}>
          Reject
        </button>
        <button type="button" className={styles.accept} onClick={() => choose('accepted')}>
          Accept
        </button>
      </div>
    </div>
  )
}

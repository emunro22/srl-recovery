'use client'

import { useState } from 'react'
import styles from './admin.module.css'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        const { error: msg } = await res.json().catch(() => ({ error: 'Login failed' }))
        setError(msg || 'Login failed')
        setLoading(false)
        return
      }
      window.location.reload()
    } catch {
      setError('Network error')
      setLoading(false)
    }
  }

  return (
    <div className={styles.loginShell}>
      <form onSubmit={onSubmit} className={styles.loginCard}>
        <h1 className={styles.loginTitle}>SRL Recovery Admin</h1>
        <p className={styles.loginLead}>Enter the admin password to continue</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin password"
          className={styles.input}
          autoFocus
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={`btn ${styles.submitBtn}`} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
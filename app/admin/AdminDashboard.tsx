'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { upload } from '@vercel/blob/client'
import styles from './admin.module.css'
import type { GalleryImage, BlogPost, Customer } from '@/lib/db'
import BlogPostManager from './BlogPostManager'

type QueueItem = {
  id: string
  file: File
  title: string
  description: string
  mediaType: 'image' | 'video'
  status: 'pending' | 'uploading' | 'success' | 'error'
  progress: number
  error?: string
  preview: string
}

export default function AdminDashboard({
  initialImages,
  initialPosts,
  initialCustomers,
}: {
  initialImages: GalleryImage[]
  initialPosts: BlogPost[]
  initialCustomers: Customer[]
}) {
  const [activeTab, setActiveTab] = useState<'gallery' | 'blog' | 'customers'>('gallery')
  const [images, setImages] = useState<GalleryImage[]>(initialImages)
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [tag, setTag] = useState('Glasgow')
  const [isUploading, setIsUploading] = useState(false)
  const [seeding, setSeeding] = useState(false)
  const [seedingBlog, setSeedingBlog] = useState(false)

  // Customers tab state
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers)
  const [custName, setCustName] = useState('')
  const [custPhone, setCustPhone] = useState('')
  const [custDate, setCustDate] = useState(todayStr())
  const [custNotes, setCustNotes] = useState('')
  const [custSaving, setCustSaving] = useState(false)
  const [custError, setCustError] = useState('')
  const [filterMonth, setFilterMonth] = useState(currentMonthStr())
  const [copied, setCopied] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendResult, setSendResult] = useState<{ sent: number; failed: number; month: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.reload()
  }

  async function seedStaticImages() {
    if (seeding) return
    if (!confirm('Add the original 19 gallery images to your database so you can manage them here? Existing ones will be skipped — this is safe to run more than once.')) {
      return
    }
    setSeeding(true)
    try {
      const res = await fetch('/api/admin/seed-static', { method: 'POST' })
      const data = await res.json()
      if (!res.ok) {
        alert(data.error || 'Seed failed')
      } else {
        alert(
          `Done — added ${data.inserted} image${data.inserted === 1 ? '' : 's'}.` +
          (data.skipped > 0 ? ` ${data.skipped} already in database.` : '')
        )
        window.location.reload()
      }
    } catch {
      alert('Network error')
    }
    setSeeding(false)
  }

  async function seedBlogPosts() {
    if (seedingBlog) return
    if (!confirm('Add 25 pre-written SEO blog posts? Any posts with the same slug will be skipped — safe to run more than once.')) return
    setSeedingBlog(true)
    try {
      const res = await fetch('/api/admin/seed-blog', { method: 'POST' })
      const data = await res.json()
      if (!res.ok) {
        alert(data.error || 'Seed failed')
      } else {
        alert(
          `Done — added ${data.inserted} post${data.inserted === 1 ? '' : 's'}.` +
          (data.skipped > 0 ? ` ${data.skipped} already existed.` : '')
        )
        window.location.reload()
      }
    } catch {
      alert('Network error')
    }
    setSeedingBlog(false)
  }

  async function addCustomer(e: React.FormEvent) {
    e.preventDefault()
    if (!custPhone.trim()) { setCustError('Phone number is required'); return }
    setCustSaving(true)
    setCustError('')
    try {
      const res = await fetch('/api/admin/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: custName, phone: custPhone, job_date: custDate, notes: custNotes }),
      })
      const data = await res.json()
      if (!res.ok) { setCustError(data.error || 'Failed to save'); return }
      setCustomers((prev) => [data.customer, ...prev])
      setCustName('')
      setCustPhone('')
      setCustDate(todayStr())
      setCustNotes('')
    } catch {
      setCustError('Network error')
    }
    setCustSaving(false)
  }

  async function deleteCustomer(id: number) {
    if (!confirm('Remove this customer?')) return
    const previous = customers
    setCustomers((prev) => prev.filter((c) => c.id !== id))
    try {
      const res = await fetch(`/api/admin/customers/${id}`, { method: 'DELETE' })
      if (!res.ok) setCustomers(previous)
    } catch {
      setCustomers(previous)
    }
  }

  async function bulkSendReviews(month: string, count: number) {
    if (!confirm(`Send review requests to ${count} customer${count !== 1 ? 's' : ''} from ${formatMonthLabel(month)} via WhatsApp? This cannot be undone.`)) return
    setSending(true)
    setSendResult(null)
    try {
      const res = await fetch('/api/admin/send-monthly-reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ month }),
      })
      const data = await res.json()
      if (!res.ok) { alert(data.error || 'Send failed'); return }
      setSendResult({ sent: data.sent, failed: data.failed, month })
    } catch {
      alert('Network error — check your connection and try again.')
    }
    setSending(false)
  }

  function copyNumbers(list: Customer[]) {
    const text = list.map((c) => c.phone).join('\n')
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  function onFilesChosen(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    if (!files.length) return
    const items: QueueItem[] = files.map((f) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      file: f,
      title: stripExt(f.name), // auto-populate from filename, user can edit
      description: '',
      mediaType: f.type.startsWith('video/') ? 'video' : 'image',
      status: 'pending',
      progress: 0,
      preview: URL.createObjectURL(f),
    }))
    setQueue((prev) => [...prev, ...items])
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function updateTitle(id: string, title: string) {
    setQueue((prev) =>
      prev.map((q) => (q.id === id ? { ...q, title } : q))
    )
  }

  function updateDescription(id: string, description: string) {
    setQueue((prev) =>
      prev.map((q) => (q.id === id ? { ...q, description } : q))
    )
  }

  function removeFromQueue(id: string) {
    setQueue((prev) => {
      const item = prev.find((q) => q.id === id)
      if (item) URL.revokeObjectURL(item.preview)
      return prev.filter((q) => q.id !== id)
    })
  }

  async function uploadOne(item: QueueItem): Promise<GalleryImage | null> {
    try {
      setQueue((prev) =>
        prev.map((q) =>
          q.id === item.id ? { ...q, status: 'uploading', progress: 0 } : q
        )
      )

      const blob = await upload(item.file.name, item.file, {
        access: 'public',
        handleUploadUrl: '/api/admin/images/upload-url',
        contentType: item.file.type,
        onUploadProgress: (e) => {
          setQueue((prev) =>
            prev.map((q) =>
              q.id === item.id ? { ...q, progress: e.percentage } : q
            )
          )
        },
      })

      const res = await fetch('/api/admin/images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: blob.url,
          pathname: blob.pathname,
          title: item.title.trim() || stripExt(item.file.name),
          tag,
          mediaType: item.mediaType,
          description: item.description.trim(),
        }),
      })

      if (!res.ok) {
        const { error: msg } = await res.json().catch(() => ({ error: 'Save failed' }))
        throw new Error(msg || 'Save failed')
      }

      const { image } = await res.json()
      setQueue((prev) =>
        prev.map((q) =>
          q.id === item.id ? { ...q, status: 'success', progress: 100 } : q
        )
      )
      return image as GalleryImage
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Upload failed'
      setQueue((prev) =>
        prev.map((q) =>
          q.id === item.id ? { ...q, status: 'error', error: msg } : q
        )
      )
      return null
    }
  }

  async function uploadAll() {
    if (!queue.length || isUploading) return
    setIsUploading(true)

    const pending = queue.filter((q) => q.status === 'pending' || q.status === 'error')
    const successes: GalleryImage[] = []

    for (const item of pending) {
      const result = await uploadOne(item)
      if (result) successes.push(result)
    }

    if (successes.length) {
      setImages((prev) => [...successes.reverse(), ...prev])
    }

    setIsUploading(false)

    setTimeout(() => {
      setQueue((prev) => {
        prev.forEach((q) => {
          if (q.status === 'success') URL.revokeObjectURL(q.preview)
        })
        return prev.filter((q) => q.status !== 'success')
      })
    }, 1500)
  }

  async function onDelete(id: number) {
    if (!confirm('Delete this image? This cannot be undone.')) return
    const previous = images
    setImages((prev) => prev.filter((img) => img.id !== id))
    try {
      const res = await fetch(`/api/admin/images/${id}`, { method: 'DELETE' })
      if (!res.ok) {
        setImages(previous)
        alert('Failed to delete')
      }
    } catch {
      setImages(previous)
      alert('Network error')
    }
  }

  const pendingCount = queue.filter((q) => q.status === 'pending' || q.status === 'error').length

  return (
    <div className={styles.shell}>
      <header className={styles.topBar}>
        <div>
          <h1 className={styles.topTitle}>Gallery Admin</h1>
          <p className={styles.topSub}>Manage SRL Recovery gallery images</p>
        </div>
        <div className={styles.topActions}>
          <a href="/" className={styles.linkBtn}>View site</a>
          <button onClick={logout} className={styles.linkBtn}>Sign out</button>
        </div>
      </header>

      <div className={styles.tabNav} role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === 'gallery'}
          onClick={() => setActiveTab('gallery')}
          className={`${styles.tabBtn} ${activeTab === 'gallery' ? styles.tabBtnActive : ''}`}
        >
          <span className="material-symbols-rounded">photo_library</span>
          Gallery
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'blog'}
          onClick={() => setActiveTab('blog')}
          className={`${styles.tabBtn} ${activeTab === 'blog' ? styles.tabBtnActive : ''}`}
        >
          <span className="material-symbols-rounded">edit_note</span>
          Blog
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'customers'}
          onClick={() => setActiveTab('customers')}
          className={`${styles.tabBtn} ${activeTab === 'customers' ? styles.tabBtnActive : ''}`}
        >
          <span className="material-symbols-rounded">contacts</span>
          Customers
        </button>
      </div>

      {activeTab === 'blog' && (
        <>
          <section className={styles.seedCard}>
            <div>
              <h3 className={styles.seedTitle}>Add 25 pre-written SEO blog posts</h3>
              <p className={styles.seedDesc}>
                Instantly publish 25 Google-optimised recovery articles covering breakdowns, motorway guides,
                winter tips, prestige recovery, and more. Existing posts are skipped — safe to run more than once.
              </p>
            </div>
            <button
              onClick={seedBlogPosts}
              disabled={seedingBlog}
              className={`${styles.linkBtn} ${styles.seedBtn}`}
            >
              {seedingBlog ? 'Adding posts...' : 'Add SEO blog posts'}
            </button>
          </section>
          <BlogPostManager initialPosts={initialPosts} />
        </>
      )}

      {activeTab === 'customers' && (() => {
        const filtered = customers.filter((c) => c.job_date.slice(0, 7) === filterMonth)

        return (
          <div>
            {/* Add customer form */}
            <section className={styles.reviewCard}>
              <h2 className={styles.sectionTitle}>Log a new customer</h2>
              <p className={styles.reviewDesc}>
                Add each job as it comes in. At the end of the month, switch to the <strong>Send Reviews</strong> section below to bulk-message everyone at once.
              </p>
              <form onSubmit={addCustomer} className={styles.custForm}>
                <div className={styles.custRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="custName">Customer name</label>
                    <input
                      id="custName"
                      type="text"
                      value={custName}
                      onChange={(e) => setCustName(e.target.value)}
                      placeholder="e.g. John Smith"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="custPhone">Mobile number *</label>
                    <input
                      id="custPhone"
                      type="tel"
                      value={custPhone}
                      onChange={(e) => setCustPhone(e.target.value)}
                      placeholder="e.g. 07700 900000"
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="custDate">Job date *</label>
                    <input
                      id="custDate"
                      type="date"
                      value={custDate}
                      onChange={(e) => setCustDate(e.target.value)}
                      className={styles.input}
                      required
                    />
                  </div>
                </div>
                <div className={styles.field} style={{ maxWidth: '480px' }}>
                  <label className={styles.label} htmlFor="custNotes">Notes (optional)</label>
                  <input
                    id="custNotes"
                    type="text"
                    value={custNotes}
                    onChange={(e) => setCustNotes(e.target.value)}
                    placeholder="e.g. M8 breakdown, Honda Civic"
                    className={styles.input}
                  />
                </div>
                {custError && <p className={styles.error}>{custError}</p>}
                <button type="submit" disabled={custSaving} className="btn">
                  <span className="material-symbols-rounded">person_add</span>
                  {custSaving ? 'Saving...' : 'Add customer'}
                </button>
              </form>
            </section>

            {/* Monthly bulk send */}
            <section className={styles.reviewCard}>
              <h2 className={styles.sectionTitle}>
                <span className="material-symbols-rounded" style={{ fontSize: '2rem', verticalAlign: 'middle', marginRight: '0.6rem', color: 'var(--pink-light)' }}>send</span>
                Send monthly review requests
              </h2>
              <p className={styles.reviewDesc}>
                Filter to a month, copy all the phone numbers, then paste them into a <strong>WhatsApp Broadcast List</strong> in your WhatsApp Business App and send the message below — everyone gets it as an individual message in one go.
              </p>

              <div className={styles.monthRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="filterMonth">Month</label>
                  <input
                    id="filterMonth"
                    type="month"
                    value={filterMonth}
                    onChange={(e) => setFilterMonth(e.target.value)}
                    className={styles.input}
                    style={{ maxWidth: '200px' }}
                  />
                </div>
                <p className={styles.custCount}>
                  <strong>{filtered.length}</strong> customer{filtered.length !== 1 ? 's' : ''} this month
                </p>
              </div>

              {filtered.length > 0 ? (
                <>
                  <div className={styles.custList}>
                    {filtered.map((c) => (
                      <div key={c.id} className={styles.custItem}>
                        <div className={styles.custMeta}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap' }}>
                            <span className={styles.custName}>{c.name || 'No name'}</span>
                            {c.source === 'whatsapp'
                              ? <span className={styles.badgeWa}>WhatsApp</span>
                              : <span className={styles.badgeManual}>Manual</span>
                            }
                          </div>
                          <span className={styles.custPhone}>{c.phone}</span>
                          {c.notes && <span className={styles.custNotes}>{c.notes}</span>}
                        </div>
                        <span className={styles.custDateLabel}>{formatJobDate(c.job_date)}</span>
                        <button
                          type="button"
                          onClick={() => deleteCustomer(c.id)}
                          className={styles.postDeleteBtn}
                          aria-label="Remove"
                        >
                          <span className="material-symbols-rounded">close</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  {sendResult && sendResult.month === filterMonth && (
                    <div className={`${styles.reviewNote} ${styles.sendResultNote}`}>
                      <span className="material-symbols-rounded" style={{ color: 'hsl(140,70%,60%)' }}>check_circle</span>
                      <div>
                        <strong>Sent!</strong> {sendResult.sent} message{sendResult.sent !== 1 ? 's' : ''} delivered
                        {sendResult.failed > 0 && `, ${sendResult.failed} failed (check phone numbers).`}
                      </div>
                    </div>
                  )}

                  <div className={styles.bulkActions}>
                    <button
                      type="button"
                      onClick={() => bulkSendReviews(filterMonth, filtered.length)}
                      disabled={sending}
                      className={`btn ${styles.sendAllBtn}`}
                    >
                      <span className="material-symbols-rounded">{sending ? 'hourglass_empty' : 'send'}</span>
                      {sending ? 'Sending...' : `Send to all ${filtered.length} via WhatsApp API`}
                    </button>
                    <button type="button" onClick={() => copyNumbers(filtered)} className={`${styles.linkBtn}`}>
                      <span className="material-symbols-rounded" style={{ fontSize: '1.6rem', verticalAlign: 'middle' }}>{copied ? 'check' : 'content_copy'}</span>
                      {copied ? ' Copied' : ' Copy numbers'}
                    </button>
                  </div>

                  <div className={styles.reviewNote}>
                    <span className="material-symbols-rounded">info</span>
                    <div>
                      <strong>Automatic timer:</strong> A Vercel cron job runs on the <strong>1st of every month at 10am</strong> and sends automatically to the previous month&apos;s customers — no action needed from you once the WhatsApp API env vars are added in Vercel.
                      <br /><br />
                      <strong>Not configured yet?</strong> The button above will show an error until you add <code>WHATSAPP_ACCESS_TOKEN</code>, <code>WHATSAPP_PHONE_NUMBER_ID</code>, and <code>WHATSAPP_REVIEW_LINK</code> to your Vercel environment variables.
                    </div>
                  </div>
                </>
              ) : (
                <p className={styles.empty}>No customers logged for this month yet.</p>
              )}
            </section>
          </div>
        )
      })()}

      {activeTab === 'gallery' && (
      <>

      <section className={styles.uploadCard}>
        <h2 className={styles.sectionTitle}>Upload images</h2>

        <div className={styles.field}>
          <label className={styles.label}>Tag for all uploads</label>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className={styles.input}
            disabled={isUploading}
          >
            <option>Glasgow</option>
            <option>24/7</option>
            <option>Prestige</option>
            <option>Commercial</option>
            <option>Roadside</option>
            <option>Transport</option>
            <option>Accident</option>
          </select>
        </div>

        <label className={styles.dropZone}>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,video/mp4,video/quicktime,video/webm"
            multiple
            onChange={onFilesChosen}
            className={styles.hiddenInput}
            disabled={isUploading}
          />
          <span className={`material-symbols-rounded ${styles.dropIcon}`}>add_a_photo</span>
          <span className={styles.dropTitle}>Tap to choose photos or videos</span>
          <span className={styles.dropHint}>JPEG, PNG, WebP, or MP4/MOV video — up to 200MB each. You can pick multiple.</span>
        </label>

        {queue.length > 0 && (
          <>
            <p className={styles.queueHint}>
              Give each one a title (great place for a keyword, e.g. "M8 Motorway Recovery Glasgow")
              and an optional description before uploading.
            </p>
            <div className={styles.queueList}>
              {queue.map((q) => (
                <div key={q.id} className={styles.queueItem}>
                  <div className={styles.queueThumb}>
                    {q.mediaType === 'video' ? (
                      <video src={q.preview} muted />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={q.preview} alt="" />
                    )}
                  </div>
                  <div className={styles.queueBody}>
                    <input
                      type="text"
                      value={q.title}
                      onChange={(e) => updateTitle(q.id, e.target.value)}
                      disabled={q.status === 'uploading' || q.status === 'success'}
                      placeholder="Title / headline (keyword-friendly)"
                      maxLength={80}
                      className={styles.queueTitleInput}
                    />
                    <input
                      type="text"
                      value={q.description}
                      onChange={(e) => updateDescription(q.id, e.target.value)}
                      disabled={q.status === 'uploading' || q.status === 'success'}
                      placeholder="Description (optional)"
                      maxLength={300}
                      className={styles.queueTitleInput}
                    />
                    <p className={styles.queueMeta}>
                      {formatSize(q.file.size)} · {q.mediaType === 'video' ? 'Video' : 'Photo'} · <span className={styles[`status_${q.status}`]}>
                        {q.status === 'uploading' && `${Math.round(q.progress)}%`}
                        {q.status === 'pending' && 'Ready'}
                        {q.status === 'success' && 'Done ✓'}
                        {q.status === 'error' && (q.error || 'Failed')}
                      </span>
                    </p>
                    {q.status === 'uploading' && (
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${q.progress}%` }} />
                      </div>
                    )}
                  </div>
                  {q.status !== 'uploading' && (
                    <button
                      type="button"
                      onClick={() => removeFromQueue(q.id)}
                      className={styles.queueRemove}
                      aria-label="Remove"
                    >
                      <span className="material-symbols-rounded">close</span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={uploadAll}
              disabled={isUploading || pendingCount === 0}
              className={`btn ${styles.uploadBtn}`}
            >
              {isUploading ? 'Uploading...' : `Upload ${pendingCount} ${pendingCount === 1 ? 'item' : 'items'}`}
            </button>
          </>
        )}
      </section>

      <section className={styles.seedCard}>
        <div>
          <h3 className={styles.seedTitle}>Import the original 19 gallery images</h3>
          <p className={styles.seedDesc}>
            Add the existing static images (work-1 to work-19) to your database so you can delete or
            re-order them from here. Safe to run multiple times — duplicates are skipped automatically.
          </p>
        </div>
        <button
          onClick={seedStaticImages}
          disabled={seeding}
          className={`${styles.linkBtn} ${styles.seedBtn}`}
        >
          {seeding ? 'Importing...' : 'Import original images'}
        </button>
      </section>

      <section className={styles.gallery}>
        <h2 className={styles.sectionTitle}>
          Gallery images <span className={styles.count}>({images.length})</span>
        </h2>
        {images.length === 0 ? (
          <p className={styles.empty}>
            No images in your database yet. Upload your first photo above, or
            click <strong>"Import original images"</strong> to load the existing gallery.
          </p>
        ) : (
          <div className={styles.grid}>
            {images.map((img) => (
              <div key={img.id} className={styles.imageCard}>
                <div className={styles.thumb}>
                  {img.media_type === 'video' ? (
                    <video src={img.url} muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <Image
                      src={img.url}
                      alt={img.title}
                      fill
                      sizes="(max-width: 640px) 50vw, 220px"
                      className={styles.thumbImg}
                    />
                  )}
                </div>
                <div className={styles.imageBody}>
                  <p className={styles.imageTitle}>{img.title}</p>
                  <p className={styles.imageTag}>{img.tag} · {img.media_type === 'video' ? 'Video' : 'Photo'}</p>
                  {img.description && <p className={styles.imageTag}>{img.description}</p>}
                  <button onClick={() => onDelete(img.id)} className={styles.deleteBtn}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      </>
      )}
    </div>
  )
}

function stripExt(name: string) {
  return name.replace(/\.[^.]+$/, '').slice(0, 60) || 'Recovery Job'
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function currentMonthStr() {
  return new Date().toISOString().slice(0, 7)
}

function formatJobDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function formatMonthLabel(yearMonth: string) {
  const [year, month] = yearMonth.split('-')
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  })
}
'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { upload } from '@vercel/blob/client'
import styles from './admin.module.css'
import type { GalleryImage, BlogPost } from '@/lib/db'
import BlogPostManager from './BlogPostManager'

type QueueItem = {
  id: string
  file: File
  title: string
  status: 'pending' | 'uploading' | 'success' | 'error'
  progress: number
  error?: string
  preview: string
}

export default function AdminDashboard({
  initialImages,
  initialPosts,
}: {
  initialImages: GalleryImage[]
  initialPosts: BlogPost[]
}) {
  const [activeTab, setActiveTab] = useState<'gallery' | 'blog'>('gallery')
  const [images, setImages] = useState<GalleryImage[]>(initialImages)
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [tag, setTag] = useState('Glasgow')
  const [isUploading, setIsUploading] = useState(false)
  const [seeding, setSeeding] = useState(false)
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

  function onFilesChosen(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    if (!files.length) return
    const items: QueueItem[] = files.map((f) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      file: f,
      title: stripExt(f.name), // auto-populate from filename, user can edit
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
      </div>

      {activeTab === 'blog' && (
        <BlogPostManager initialPosts={initialPosts} />
      )}

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
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={onFilesChosen}
            className={styles.hiddenInput}
            disabled={isUploading}
          />
          <span className={`material-symbols-rounded ${styles.dropIcon}`}>add_a_photo</span>
          <span className={styles.dropTitle}>Tap to choose photos</span>
          <span className={styles.dropHint}>JPEG, PNG, or WebP — up to 25MB each. You can pick multiple.</span>
        </label>

        {queue.length > 0 && (
          <>
            <p className={styles.queueHint}>
              Give each image a title before uploading (or leave the auto-filled one).
            </p>
            <div className={styles.queueList}>
              {queue.map((q) => (
                <div key={q.id} className={styles.queueItem}>
                  <div className={styles.queueThumb}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={q.preview} alt="" />
                  </div>
                  <div className={styles.queueBody}>
                    <input
                      type="text"
                      value={q.title}
                      onChange={(e) => updateTitle(q.id, e.target.value)}
                      disabled={q.status === 'uploading' || q.status === 'success'}
                      placeholder="Image title"
                      maxLength={80}
                      className={styles.queueTitleInput}
                    />
                    <p className={styles.queueMeta}>
                      {formatSize(q.file.size)} · <span className={styles[`status_${q.status}`]}>
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
              {isUploading ? 'Uploading...' : `Upload ${pendingCount} ${pendingCount === 1 ? 'image' : 'images'}`}
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
                  <Image
                    src={img.url}
                    alt={img.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 220px"
                    className={styles.thumbImg}
                  />
                </div>
                <div className={styles.imageBody}>
                  <p className={styles.imageTitle}>{img.title}</p>
                  <p className={styles.imageTag}>{img.tag}</p>
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
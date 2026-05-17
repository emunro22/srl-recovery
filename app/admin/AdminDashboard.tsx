'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './admin.module.css'
import type { GalleryImage } from '@/lib/db'

export default function AdminDashboard({
  initialImages,
}: {
  initialImages: GalleryImage[]
}) {
  const [images, setImages] = useState<GalleryImage[]>(initialImages)
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('Glasgow')
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.reload()
  }

  async function onUpload(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!file) {
      setError('Please choose an image')
      return
    }
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('title', title || 'Recovery Job')
      fd.append('tag', tag || 'Glasgow')
      const res = await fetch('/api/admin/images', { method: 'POST', body: fd })
      if (!res.ok) {
        const { error: msg } = await res.json().catch(() => ({ error: 'Upload failed' }))
        setError(msg || 'Upload failed')
        setUploading(false)
        return
      }
      const { image } = await res.json()
      setImages((prev) => [image, ...prev])
      setSuccess('Image uploaded successfully')
      setFile(null)
      setTitle('')
      setTag('Glasgow')
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch {
      setError('Network error')
    }
    setUploading(false)
  }

  async function onDelete(id: number) {
    if (!confirm('Delete this image? This cannot be undone.')) return
    const previous = images
    setImages((prev) => prev.filter((img) => img.id !== id))
    try {
      const res = await fetch(`/api/admin/images/${id}`, { method: 'DELETE' })
      if (!res.ok) {
        setImages(previous)
        setError('Failed to delete')
      }
    } catch {
      setImages(previous)
      setError('Network error')
    }
  }

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

      <section className={styles.uploadCard}>
        <h2 className={styles.sectionTitle}>Upload new image</h2>
        <form onSubmit={onUpload} className={styles.uploadForm}>
          <div className={styles.field}>
            <label className={styles.label}>Image (JPEG, PNG, WebP — max 8MB)</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className={styles.fileInput}
            />
          </div>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label}>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Van Recovery"
                className={styles.input}
                maxLength={80}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Tag</label>
              <select value={tag} onChange={(e) => setTag(e.target.value)} className={styles.input}>
                <option>Glasgow</option>
                <option>24/7</option>
                <option>Prestige</option>
                <option>Commercial</option>
                <option>Roadside</option>
                <option>Transport</option>
                <option>Accident</option>
              </select>
            </div>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
          <button type="submit" className={`btn ${styles.uploadBtn}`} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>
      </section>

      <section className={styles.gallery}>
        <h2 className={styles.sectionTitle}>
          Uploaded images <span className={styles.count}>({images.length})</span>
        </h2>
        {images.length === 0 ? (
          <p className={styles.empty}>
            No images uploaded yet. Use the form above to add your first image.
            <br />
            (Your existing 19 static gallery images are still published — they live in the codebase.)
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
                    sizes="(max-width: 640px) 100vw, 300px"
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
    </div>
  )
}
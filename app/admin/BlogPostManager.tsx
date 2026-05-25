'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { upload } from '@vercel/blob/client'
import styles from './admin.module.css'
import type { BlogPost } from '@/lib/db'

const CATEGORIES = ['News', 'Tips', 'Services', 'Recovery Advice', 'Company Update']

type FormState = {
  title: string
  excerpt: string
  content: string
  category: string
}

const emptyForm = (): FormState => ({
  title: '',
  excerpt: '',
  content: '',
  category: 'News',
})

export default function BlogPostManager({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState<FormState>(emptyForm())
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [coverPreview, setCoverPreview] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dragCountRef = useRef(0)

  function updateForm(key: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function setCover(file: File) {
    if (coverPreview) URL.revokeObjectURL(coverPreview)
    setCoverFile(file)
    setCoverPreview(URL.createObjectURL(file))
  }

  function clearCover() {
    if (coverPreview) URL.revokeObjectURL(coverPreview)
    setCoverFile(null)
    setCoverPreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function openForm() {
    setForm(emptyForm())
    clearCover()
    setSaveError('')
    setShowForm(true)
  }

  function cancelForm() {
    setShowForm(false)
    clearCover()
    setForm(emptyForm())
    setSaveError('')
  }

  const onDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    dragCountRef.current += 1
    setIsDragging(true)
  }, [])

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    dragCountRef.current -= 1
    if (dragCountRef.current === 0) setIsDragging(false)
  }, [])

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    dragCountRef.current = 0
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      setCover(file)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverPreview])

  function onFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) setCover(file)
  }

  async function submitPost(publish: boolean) {
    if (!form.title.trim()) {
      setSaveError('Title is required.')
      return
    }
    setSaving(true)
    setSaveError('')

    try {
      let cover_image_url: string | null = null
      let cover_image_path: string | null = null

      if (coverFile) {
        const blob = await upload(coverFile.name, coverFile, {
          access: 'public',
          handleUploadUrl: '/api/admin/blog/upload-url',
          contentType: coverFile.type,
        })
        cover_image_url = blob.url
        cover_image_path = blob.pathname
      }

      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: form.title.trim(),
          excerpt: form.excerpt.trim(),
          content: form.content.trim(),
          category: form.category,
          published: publish,
          cover_image_url,
          cover_image_path,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Save failed' }))
        throw new Error(data.error || 'Save failed')
      }

      const { post } = await res.json()
      setPosts((prev) => [post, ...prev])
      cancelForm()
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setSaving(false)
    }
  }

  async function togglePublish(post: BlogPost) {
    const previous = posts
    const next = !post.published
    setPosts((prev) => prev.map((p) => (p.id === post.id ? { ...p, published: next } : p)))

    try {
      const res = await fetch(`/api/admin/blog/${post.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: next }),
      })
      if (!res.ok) {
        setPosts(previous)
        alert('Failed to update post')
      }
    } catch {
      setPosts(previous)
      alert('Network error')
    }
  }

  async function deletePost(post: BlogPost) {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return
    const previous = posts
    setPosts((prev) => prev.filter((p) => p.id !== post.id))
    try {
      const res = await fetch(`/api/admin/blog/${post.id}`, { method: 'DELETE' })
      if (!res.ok) {
        setPosts(previous)
        alert('Failed to delete post')
      }
    } catch {
      setPosts(previous)
      alert('Network error')
    }
  }

  return (
    <div>
      {/* ── New post form ── */}
      {showForm ? (
        <div className={styles.blogCard}>
          <h2 className={styles.sectionTitle}>New Blog Post</h2>

          <div className={styles.field}>
            <label className={styles.label}>Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => updateForm('title', e.target.value)}
              placeholder="e.g. What To Do After a Breakdown"
              maxLength={120}
              className={styles.input}
              disabled={saving}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Excerpt</label>
            <textarea
              value={form.excerpt}
              onChange={(e) => updateForm('excerpt', e.target.value)}
              placeholder="Short summary shown on the blog listing page…"
              maxLength={300}
              rows={2}
              className={styles.textarea}
              disabled={saving}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Category</label>
            <select
              value={form.category}
              onChange={(e) => updateForm('category', e.target.value)}
              className={styles.input}
              disabled={saving}
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Cover image drop zone */}
          <div className={styles.field}>
            <label className={styles.label}>Cover Image</label>
            {coverPreview ? (
              <div className={styles.coverPreview}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={coverPreview} alt="Cover preview" className={styles.coverPreviewImg} />
                <div className={styles.coverOverlay}>
                  <label className={styles.coverChangeBtn}>
                    Change
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={onFileInput}
                      className={styles.hiddenInput}
                      disabled={saving}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={clearCover}
                    className={styles.coverRemoveBtn}
                    disabled={saving}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={`${styles.coverZone} ${isDragging ? styles.coverZoneDragging : ''}`}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={onDragOver}
                onDrop={onDrop}
              >
                <span className={`material-symbols-rounded ${styles.dropIcon}`}>image</span>
                <span className={styles.dropTitle}>
                  {isDragging ? 'Drop to set cover' : 'Drag image here'}
                </span>
                <span className={styles.dropHint}>or</span>
                <label className={styles.coverBrowseBtn}>
                  Browse
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={onFileInput}
                    className={styles.hiddenInput}
                    disabled={saving}
                  />
                </label>
                <span className={styles.dropHint}>JPEG, PNG or WebP — up to 25 MB</span>
              </div>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Post Content</label>
            <textarea
              value={form.content}
              onChange={(e) => updateForm('content', e.target.value)}
              placeholder="Write your post here. Separate paragraphs with a blank line."
              rows={10}
              className={styles.textarea}
              disabled={saving}
            />
          </div>

          {saveError && <p className={styles.error}>{saveError}</p>}

          <div className={styles.formActions}>
            <button
              type="button"
              onClick={cancelForm}
              className={styles.cancelBtn}
              disabled={saving}
            >
              Cancel
            </button>
            <div className={styles.formBtns}>
              <button
                type="button"
                onClick={() => submitPost(false)}
                className={styles.draftBtn}
                disabled={saving}
              >
                {saving ? 'Saving…' : 'Save as Draft'}
              </button>
              <button
                type="button"
                onClick={() => submitPost(true)}
                className="btn"
                disabled={saving}
              >
                {saving ? 'Publishing…' : 'Publish'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.blogHeader}>
          <div>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '0.4rem' }}>
              Blog Posts <span className={styles.count}>({posts.length})</span>
            </h2>
            <p className={styles.topSub}>Write and publish posts to your blog page</p>
          </div>
          <button type="button" onClick={openForm} className="btn">
            <span className="material-symbols-rounded">edit_note</span>
            New Post
          </button>
        </div>
      )}

      {/* ── Post list ── */}
      {!showForm && (
        <>
          {posts.length === 0 ? (
            <p className={styles.empty}>
              No blog posts yet. Click <strong>"New Post"</strong> to write your first one.
            </p>
          ) : (
            <div className={styles.postList}>
              {posts.map((post) => (
                <div key={post.id} className={styles.postItem}>
                  {post.cover_image_url && (
                    <div className={styles.postThumb}>
                      <Image
                        src={post.cover_image_url}
                        alt={post.title}
                        fill
                        sizes="72px"
                        className={styles.thumbImg}
                      />
                    </div>
                  )}
                  <div className={styles.postMeta}>
                    <p className={styles.postTitle}>{post.title}</p>
                    <p className={styles.postDate}>
                      {post.category} · {formatDate(post.created_at)}
                    </p>
                    {post.excerpt && (
                      <p className={styles.postExcerpt}>{post.excerpt}</p>
                    )}
                  </div>
                  <div className={styles.postActions}>
                    <span className={post.published ? styles.badgePublished : styles.badgeDraft}>
                      {post.published ? 'Live' : 'Draft'}
                    </span>
                    <button
                      type="button"
                      onClick={() => togglePublish(post)}
                      className={styles.toggleBtn}
                      title={post.published ? 'Unpublish' : 'Publish'}
                    >
                      <span className="material-symbols-rounded">
                        {post.published ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.toggleBtn}
                      title="View post"
                    >
                      <span className="material-symbols-rounded">open_in_new</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => deletePost(post)}
                      className={styles.postDeleteBtn}
                      title="Delete"
                    >
                      <span className="material-symbols-rounded">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

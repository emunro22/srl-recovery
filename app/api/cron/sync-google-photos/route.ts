import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { put, del } from '@vercel/blob'
import crypto from 'crypto'
import { getGooglePlacePhotos, googlePhotoDownloadUrl } from '@/lib/googlePhotos'
import { addGalleryImage, galleryImageHashExists, deleteGalleryImage, getUnprotectedGalleryImagesOldestFirst } from '@/lib/db'
import { getBlobUsage, getBlobStorageLimitBytes } from '@/lib/blobUsage'

// Called automatically by Vercel Cron once a day. Pulls whatever photos
// Google's Place Details endpoint currently surfaces for the business and
// adds any we haven't imported yet to the work gallery.
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const photos = await getGooglePlacePhotos()

  let added = 0
  let skipped = 0

  for (const photo of photos) {
    try {
      const imgRes = await fetch(googlePhotoDownloadUrl(photo.photoReference))
      if (!imgRes.ok) {
        skipped++
        continue
      }

      const buffer = Buffer.from(await imgRes.arrayBuffer())
      const hash = crypto.createHash('sha256').update(buffer).digest('hex')

      if (await galleryImageHashExists(hash)) {
        skipped++
        continue
      }

      const blob = await put(`gallery/google-${hash.slice(0, 16)}.jpg`, buffer, {
        access: 'public',
        contentType: imgRes.headers.get('content-type') || 'image/jpeg',
      })

      await addGalleryImage({
        url: blob.url,
        title: 'Recovery Job',
        tag: 'Glasgow',
        blob_path: blob.pathname,
        media_type: 'image',
        source: 'google',
        content_hash: hash,
      })
      added++
    } catch (err) {
      console.error('[sync-google-photos] photo import failed', err)
      skipped++
    }
  }

  // Storage cap: images already in the gallery before this shipped are
  // `protected` and never touched. Anything added since — manual uploads
  // included — is eligible to be pruned, oldest first, once Blob usage
  // crosses 80% of the plan's included storage.
  let removed = 0
  try {
    const { totalBytes, sizeByUrl } = await getBlobUsage()
    const limitBytes = getBlobStorageLimitBytes()
    const threshold = limitBytes * 0.8

    if (totalBytes >= threshold) {
      const candidates = await getUnprotectedGalleryImagesOldestFirst()
      let runningBytes = totalBytes

      for (const img of candidates) {
        if (runningBytes < threshold) break

        try {
          if (img.blob_path) await del(img.url)
        } catch (err) {
          console.warn('[sync-google-photos] blob delete failed (non-fatal)', err)
        }
        await deleteGalleryImage(img.id)
        runningBytes -= sizeByUrl.get(img.url) ?? 0
        removed++
      }

      if (removed === 0) {
        console.warn('[sync-google-photos] storage over 80% but no unprotected images left to prune')
      }
      console.log(
        `[sync-google-photos] storage ${(totalBytes / 1e9).toFixed(2)}GB >= 80% of ${(limitBytes / 1e9).toFixed(2)}GB — removed ${removed}`
      )
    }
  } catch (err) {
    console.error('[sync-google-photos] storage check failed', err)
  }

  if (added > 0 || removed > 0) {
    revalidatePath('/work')
    revalidatePath('/')
  }

  console.log(`[sync-google-photos] added=${added} skipped=${skipped} removed=${removed} total=${photos.length}`)
  return NextResponse.json({ ok: true, added, skipped, removed, total: photos.length })
}

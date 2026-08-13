import { list } from '@vercel/blob'

export type BlobUsage = {
  totalBytes: number
  sizeByUrl: Map<string, number>
}

export async function getBlobUsage(): Promise<BlobUsage> {
  const sizeByUrl = new Map<string, number>()
  let totalBytes = 0
  let cursor: string | undefined

  do {
    const result = await list({ cursor, limit: 1000 })
    for (const blob of result.blobs) {
      sizeByUrl.set(blob.url, blob.size)
      totalBytes += blob.size
    }
    cursor = result.hasMore ? result.cursor : undefined
  } while (cursor)

  return { totalBytes, sizeByUrl }
}

// Vercel Blob's included storage on the Hobby plan is 5GB — override with
// BLOB_STORAGE_LIMIT_GB if your plan or budget differs.
const DEFAULT_LIMIT_BYTES = 5 * 1024 * 1024 * 1024

export function getBlobStorageLimitBytes(): number {
  const override = Number(process.env.BLOB_STORAGE_LIMIT_GB)
  return Number.isFinite(override) && override > 0
    ? override * 1024 * 1024 * 1024
    : DEFAULT_LIMIT_BYTES
}

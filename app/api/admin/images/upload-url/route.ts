import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/auth'

export async function POST(request: Request) {
  const body = (await request.json()) as HandleUploadBody

  try {
    const authed = await isAdminAuthenticated()
    if (!authed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        if (!(await isAdminAuthenticated())) {
          throw new Error('Unauthorized')
        }
        return {
          allowedContentTypes: [
            'image/jpeg',
            'image/png',
            'image/webp',
            'video/mp4',
            'video/quicktime',
            'video/webm',
          ],
          addRandomSuffix: true,
          maximumSizeInBytes: 200 * 1024 * 1024, // 200MB — covers phone video clips
        }
      },
      onUploadCompleted: async () => {
        // We save the DB record from the client after the upload finishes
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Upload token failed'
    return NextResponse.json({ error: msg }, { status: 400 })
  }
}

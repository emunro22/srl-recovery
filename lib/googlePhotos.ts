export type GooglePlacePhoto = {
  photoReference: string
  width: number
  height: number
}

// Places API (Legacy) Place Details caps this at 10 photos and picks which
// ones to surface — there's no way to fetch the full Business Profile photo
// library through this endpoint (that requires the separate, OAuth-gated
// Business Profile API).
export async function getGooglePlacePhotos(): Promise<GooglePlacePhoto[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!apiKey || !placeId) return []

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${apiKey}`
    )
    const data = await res.json()
    if (data.status !== 'OK' || !data.result?.photos) return []

    return (data.result.photos as Array<{
      photo_reference: string
      width: number
      height: number
    }>).map((p) => ({
      photoReference: p.photo_reference,
      width: p.width,
      height: p.height,
    }))
  } catch {
    return []
  }
}

export function googlePhotoDownloadUrl(photoReference: string, maxWidth = 1600): string {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=${apiKey}`
}

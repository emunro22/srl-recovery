export type GoogleReview = {
  author: string
  rating: number
  text: string
  relativeTime: string
}

export type GoogleReviewsData = {
  rating: number
  totalReviews: number
  reviews: GoogleReview[]
}

// Google's Place Details API caps this at 5 "most relevant" reviews. There's no
// way to fetch the full review history through this endpoint.
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!apiKey || !placeId) return null

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`,
      // Refetched roughly once a month, Google's "most relevant" reviews don't
      // churn fast enough to justify polling more often than that.
      { next: { revalidate: 2592000 } }
    )
    const data = await res.json()
    if (data.status !== 'OK' || !data.result) return null

    const reviews: GoogleReview[] = (data.result.reviews ?? []).map((r: {
      author_name: string
      rating: number
      text: string
      relative_time_description: string
    }) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      relativeTime: r.relative_time_description,
    }))

    return {
      rating: data.result.rating ?? 5,
      totalReviews: data.result.user_ratings_total ?? 0,
      reviews,
    }
  } catch {
    return null
  }
}

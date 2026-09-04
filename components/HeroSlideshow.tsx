'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './HeroSlideshow.module.css'

const BLOB = 'https://bbt9vidieqlwpf0p.public.blob.vercel-storage.com'

/**
 * Hand-picked from the gallery: every frame has one of our own trucks in it and
 * survives the crop on a phone-width viewport, so the truck is still the first
 * thing you see on a portrait screen. These rows are marked `protected` in the
 * gallery_images table so the storage-cap prune can never remove them.
 */
const SLIDES = [
  {
    src: `${BLOB}/IMG_8631-D04xEtFo7Dz6onRxohGua2tz97mOGY.jpeg`,
    alt: 'SRL Recovery flatbed truck loading a VW Tiguan after a non-fault accident in Tradeston, Glasgow',
  },
  {
    src: `${BLOB}/gallery/google-42a55ff22b03d712.jpg`,
    alt: '',
  },
  {
    src: `${BLOB}/gallery/google-5a6f4f0e283f741f.jpg`,
    alt: '',
  },
  {
    src: `${BLOB}/IMG_7973-vsqieQH8aiALHrkiB8wlMQUlysCPFi.jpeg`,
    alt: '',
  },
  {
    src: `${BLOB}/IMG_7945-BoZ51YjATlEYVRATkEMseBaaGZnQ1m.jpeg`,
    alt: '',
  },
  {
    src: `${BLOB}/IMG_7834-50peQW3tiMig5uTpQMaWDHi45tOR6i.jpeg`,
    alt: '',
  },
  {
    src: `${BLOB}/IMG_8830-TjpYza2jcOk9nBAl4EMz3Z1zhsG5SV.jpeg`,
    alt: '',
  },
  {
    src: `${BLOB}/IMG_7975-1c8RnZUrfbDWEBIp1BOIg1UqrAPaQP.jpeg`,
    alt: '',
  },
]

const INTERVAL = 5500

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)
  // Only the frames we've reached get an <Image>, so the first paint fetches
  // two photos rather than all eight. It has to stay one ahead of the one on
  // screen: a slide created in the same commit that makes it active has no
  // previous opacity to animate from, so it pops in instead of fading.
  const [reached, setReached] = useState(2)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % SLIDES.length
        setReached((r) => Math.min(SLIDES.length, Math.max(r, next + 2)))
        return next
      })
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  // Jumping to a frame that isn't mounted yet needs the same treatment: paint it
  // at zero first, then make it active on a later frame so the fade has somewhere
  // to start from.
  function show(i: number) {
    if (i < reached) {
      setIndex(i)
      return
    }
    setReached(Math.min(SLIDES.length, i + 2))
    requestAnimationFrame(() => requestAnimationFrame(() => setIndex(i)))
  }

  return (
    <div className={styles.stage} aria-hidden={false}>
      {SLIDES.map((slide, i) =>
        i < reached ? (
          <div
            key={slide.src}
            className={`${styles.slide} ${i === index ? styles.active : ''}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className={styles.img}
            />
          </div>
        ) : null
      )}

      {/* A single even wash rather than edge gradients, so the truck still reads
          across the whole frame while the copy keeps its contrast. */}
      <div className={styles.scrim} />
      <div className={styles.blendBottom} />

      <div className={styles.dots}>
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotOn : ''}`}
            onClick={() => show(i)}
            aria-label={`Show recovery photo ${i + 1} of ${SLIDES.length}`}
          />
        ))}
      </div>
    </div>
  )
}

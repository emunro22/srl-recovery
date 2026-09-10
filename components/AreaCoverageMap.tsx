'use client'

import { useEffect, useRef, useState } from 'react'
import {
  BASES,
  CORE_RADIUS_MILES,
  MILES_TO_METRES,
  distanceMiles,
  type LatLng,
} from '@/lib/coverage-geo'
import styles from './AreaCoverageMap.module.css'

type Props = {
  areaName: string
  centre: LatLng
  /** Arrival figure shown beside the map, e.g. "About 30 mins". */
  arrivalLabel: string
  /** Straight-line distance from the nearest yard, already rounded. */
  milesFromBase: number
  nearestBaseName: string
}

/** Beyond this the yards are too far away to plot without shrinking the ring to
 *  nothing, so Stranraer and Carlisle get the ring on its own. */
const BASE_PIN_LIMIT_MILES = CORE_RADIUS_MILES * 1.5

export default function AreaCoverageMap({
  areaName,
  centre,
  arrivalLabel,
  milesFromBase,
  nearestBaseName,
}: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const showBases = milesFromBase <= BASE_PIN_LIMIT_MILES
  const atBase = milesFromBase < 2

  // Only pull Leaflet in once the map is close to the viewport. Area pages are
  // read top-down for the phone number, so most visits never scroll this far.
  useEffect(() => {
    const el = mapRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible || !mapRef.current) return

    let cancelled = false
    let map: import('leaflet').Map | null = null

    ;(async () => {
      const L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')

      if (cancelled || !mapRef.current) return

      const instance = L.map(mapRef.current, {
        center: [centre.lat, centre.lng],
        zoom: 9,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
        // Fractional zoom so fitBounds sizes the ring to the frame instead of
        // rounding down a whole level and leaving it small in the middle.
        zoomSnap: 0,
      })
      map = instance

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(instance)

      // The 30-mile boundary, centred on this town rather than on the yard.
      const ring = L.circle([centre.lat, centre.lng], {
        radius: CORE_RADIUS_MILES * MILES_TO_METRES,
        color: '#cc1493',
        fillColor: '#cc1493',
        fillOpacity: 0.08,
        weight: 2,
        dashArray: '6 6',
      }).addTo(instance)

      function pin(cls: string, glyph: string) {
        return L.divIcon({
          html: `<div class="${styles.pin} ${cls}"><span>${glyph}</span></div>`,
          className: styles.pinWrap,
          iconSize: [32, 40],
          iconAnchor: [16, 38],
          popupAnchor: [0, -34],
        })
      }

      L.marker([centre.lat, centre.lng], { icon: pin(styles.pinArea, '📍') })
        .addTo(instance)
        .bindPopup(
          `<div class="${styles.popup}"><strong>${areaName}</strong><span>Centre of the 30-mile boundary</span></div>`
        )

      const plottedBases = showBases
        ? BASES.filter((b) => distanceMiles(centre, b) <= BASE_PIN_LIMIT_MILES)
        : []

      plottedBases.forEach((b) => {
        L.marker([b.lat, b.lng], { icon: pin(styles.pinBase, '🚚') })
          .addTo(instance)
          .bindPopup(
            `<div class="${styles.popup}"><strong>${b.name} base</strong><span>${b.postcode}</span></div>`
          )
      })

      const bounds = ring.getBounds()
      plottedBases.forEach((b) => bounds.extend([b.lat, b.lng]))
      instance.fitBounds(bounds, { padding: [24, 24] })
    })()

    return () => {
      cancelled = true
      map?.remove()
    }
  }, [visible, centre.lat, centre.lng, areaName, showBases])

  return (
    <section className={`section ${styles.section}`} id="coverage">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">{areaName} Coverage Map</h2>
          <p className="section-text">
            The ring below is our 30-mile boundary around {areaName}.{' '}
            {atBase
              ? `Our ${nearestBaseName} yard sits inside it, so ${areaName} jobs are on our doorstep.`
              : `Our nearest yard is ${milesFromBase} miles away in ${nearestBaseName}.`}{' '}
            Anything inside the ring is routine work for us, day or night. Outside it we
            still come out, just call for a quote first.
          </p>
        </div>

        <div className={styles.mapShell}>
          <div
            ref={mapRef}
            className={styles.map}
            aria-label={`Map showing the 30-mile recovery coverage boundary around ${areaName}`}
          />
          <div className={styles.legend}>
            <div className={styles.legendRow}>
              <span className={styles.legendCircle} /> 30-mile boundary
            </div>
            <div className={styles.legendRow}>
              <span className={styles.legendDotArea} /> {areaName}
            </div>
            {showBases && (
              <div className={styles.legendRow}>
                <span className={styles.legendDotBase} /> Our yards
              </div>
            )}
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>30 miles</strong>
            <span>Core boundary around {areaName}</span>
          </div>
          <div className={styles.stat}>
            <strong>{arrivalLabel}</strong>
            <span>Average arrival time</span>
          </div>
          <div className={styles.stat}>
            <strong>24/7</strong>
            <span>Nights, weekends, holidays</span>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import {
  BASES,
  GREEN_RADIUS_MILES,
  HQ,
  MILES_TO_METRES,
  YELLOW_RADIUS_MILES,
  ZONE_COLOURS,
  type LatLng,
  type Zone,
} from '@/lib/coverage-geo'
import styles from './AreaCoverageMap.module.css'

type Props = {
  areaName: string
  /** Where this town sits, so it can be pinned against the rings. */
  centre: LatLng
  /** Arrival figure shown beside the map, e.g. "About 30 mins". */
  arrivalLabel: string
  /** Straight-line distance from G72 7SH, already rounded. */
  milesFromHQ: number
  zone: Zone
}

export default function AreaCoverageMap({
  areaName,
  centre,
  arrivalLabel,
  milesFromHQ,
  zone,
}: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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
        center: [HQ.lat, HQ.lng],
        zoom: 8,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
        // Fractional zoom so fitBounds sizes the rings to the frame instead of
        // rounding down a whole level and leaving them small in the middle.
        zoomSnap: 0,
      })
      map = instance

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(instance)

      // Yellow first so the green core draws on top of it.
      const yellowRing = L.circle([HQ.lat, HQ.lng], {
        radius: YELLOW_RADIUS_MILES * MILES_TO_METRES,
        color: ZONE_COLOURS.yellow,
        fillColor: ZONE_COLOURS.yellow,
        fillOpacity: 0.1,
        weight: 2,
        dashArray: '8 7',
      }).addTo(instance)

      L.circle([HQ.lat, HQ.lng], {
        radius: GREEN_RADIUS_MILES * MILES_TO_METRES,
        color: ZONE_COLOURS.green,
        fillColor: ZONE_COLOURS.green,
        fillOpacity: 0.18,
        weight: 2.5,
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

      BASES.forEach((b) => {
        L.marker([b.lat, b.lng], { icon: pin(styles.pinBase, '🚚') })
          .addTo(instance)
          .bindPopup(
            `<div class="${styles.popup}"><strong>${b.name} base</strong><span>${b.postcode}</span></div>`
          )
      })

      // The town itself goes on last so it sits above the yard pins when a page
      // is about somewhere within a few miles of one.
      L.marker([centre.lat, centre.lng], { icon: pin(styles.pinArea, '📍') })
        .addTo(instance)
        .bindPopup(
          `<div class="${styles.popup}"><strong>${areaName}</strong><span>${milesFromHQ} miles from G72 7SH</span></div>`
        )

      // Always show the whole yellow zone, and stretch to the town when it sits
      // outside that (Stranraer, Carlisle).
      const bounds = yellowRing.getBounds()
      bounds.extend([centre.lat, centre.lng])
      instance.fitBounds(bounds, { padding: [24, 24] })
    })()

    return () => {
      cancelled = true
      map?.remove()
    }
  }, [visible, centre.lat, centre.lng, areaName, milesFromHQ])

  const blurb =
    zone === 'green'
      ? `${areaName} is ${milesFromHQ} miles from our Cambuslang yard at G72 7SH, which puts it inside the green zone: our fastest response area and where the 30-minute average comes from.`
      : zone === 'yellow'
        ? `${areaName} is ${milesFromHQ} miles from our Cambuslang yard at G72 7SH, in the yellow zone. Still routine work for us, just a longer run than the green core, so we quote the drive honestly on the phone.`
        : `${areaName} is ${milesFromHQ} miles from our Cambuslang yard at G72 7SH, outside both rings. We still cover it, and do regularly, on a price quoted before we set off.`

  return (
    <section className={`section ${styles.section}`} id="coverage">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">{areaName} Coverage Map</h2>
          <p className="section-text">
            {blurb} Outside the yellow ring we still travel anywhere in Scotland and
            across the UK.
          </p>
        </div>

        <div className={styles.mapShell}>
          <div
            ref={mapRef}
            className={styles.map}
            aria-label={`Map of the 30-mile and 60-mile recovery coverage zones around G72 7SH, showing where ${areaName} sits`}
          />
          <div className={styles.legend}>
            <div className={styles.legendRow}>
              <span className={styles.legendGreen} /> 30-mile green zone, fastest response
            </div>
            <div className={styles.legendRow}>
              <span className={styles.legendYellow} /> 60-mile yellow zone
            </div>
            <div className={styles.legendRow}>
              <span className={styles.legendDotArea} /> {areaName}
            </div>
            <div className={styles.legendRow}>
              <span className={styles.legendDotBase} /> Our yards
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>{milesFromHQ} miles</strong>
            <span>From our G72 7SH yard</span>
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

'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './CoverageMap.module.css'

// 12 town markers across the SRL Recovery service area
const TOWNS: { name: string; slug: string | null; lat: number; lng: number; primary?: boolean }[] = [
  { name: 'Motherwell (HQ)', slug: 'motherwell', lat: 55.7916, lng: -3.9852, primary: true },
  { name: 'Cambuslang (2nd Base)', slug: 'cambuslang', lat: 55.8217724, lng: -4.1395602, primary: true },
  { name: 'Glasgow', slug: null, lat: 55.8642, lng: -4.2518 },
  { name: 'Paisley', slug: 'paisley', lat: 55.8467, lng: -4.4239 },
  { name: 'East Kilbride', slug: 'east-kilbride', lat: 55.7644, lng: -4.1769 },
  { name: 'Hamilton', slug: 'hamilton', lat: 55.7775, lng: -4.0530 },
  { name: 'Coatbridge', slug: 'coatbridge', lat: 55.8624, lng: -4.0289 },
  { name: 'Clydebank', slug: 'clydebank', lat: 55.9018, lng: -4.4001 },
  { name: 'Bearsden', slug: 'bearsden', lat: 55.9203, lng: -4.3338 },
  { name: 'Rutherglen', slug: 'rutherglen', lat: 55.8266, lng: -4.2128 },
  { name: 'Bellshill', slug: 'bellshill', lat: 55.8146, lng: -4.0214 },
  { name: 'Dumbarton', slug: 'dumbarton', lat: 55.9456, lng: -4.5662 },
]

export default function CoverageMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!mapRef.current || loaded) return

    let cancelled = false

    // Dynamically load Leaflet only on the client
    ;(async () => {
      const L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')

      if (cancelled || !mapRef.current) return

      // Initialise the map centred on Cambuslang, zoomed to show both coverage rings
      const map = L.map(mapRef.current, {
        center: [55.8217724, -4.1395602],
        zoom: 8,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      })

      // Free OSM tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map)

      // Outer ring — nationwide coverage, centred on G72 7SH (Cambuslang)
      L.circle([55.8217724, -4.1395602], {
        radius: 241401, // 150 miles in metres
        color: '#cc1493',
        fillColor: '#cc1493',
        fillOpacity: 0.03,
        weight: 1.5,
        dashArray: '10 8',
      }).addTo(map)

      // Inner ring — 30 mile local core area, centred on G72 7SH (Cambuslang)
      L.circle([55.8217724, -4.1395602], {
        radius: 48280, // 30 miles in metres
        color: '#cc1493',
        fillColor: '#cc1493',
        fillOpacity: 0.08,
        weight: 2,
        dashArray: '6 6',
      }).addTo(map)

      // Marker icon factory (using emoji + div icon so no PNG dependency)
      function markerIcon(isPrimary: boolean) {
        return L.divIcon({
          html: `<div class="${styles.pin} ${isPrimary ? styles.pinPrimary : ''}">
            <span>📍</span>
          </div>`,
          className: styles.pinWrap,
          iconSize: [32, 40],
          iconAnchor: [16, 38],
          popupAnchor: [0, -34],
        })
      }

      TOWNS.forEach((t) => {
        const marker = L.marker([t.lat, t.lng], { icon: markerIcon(!!t.primary) }).addTo(map)
        const popupHtml = `
          <div class="${styles.popup}">
            <strong>${t.name}</strong>
            ${t.primary ? '<span class="' + styles.primaryTag + '">Our base</span>' : ''}
            ${t.slug ? `<a href="/areas/${t.slug}">View area page →</a>` : ''}
          </div>
        `
        marker.bindPopup(popupHtml)
      })

      setLoaded(true)
    })()

    return () => {
      cancelled = true
    }
  }, [loaded])

  return (
    <section className={`section ${styles.section}`} id="coverage-map">
      <div className="container">
        <div className={styles.header}>
          <p className="section-subtitle">Coverage Area</p>
          <h2 className={`section-title ${styles.title}`}>Where We Operate</h2>
          <p className={`section-text ${styles.lead}`}>
            With bases in Motherwell and Cambuslang (G72 7SH), our core 30-mile service area
            around Cambuslang covers Greater Glasgow and Lanarkshire with a 30-minute arrival
            guarantee. We also operate nationwide — wherever you need us across the UK, just
            give us a call.
          </p>
        </div>

        <div className={styles.mapShell}>
          <div ref={mapRef} className={styles.map} aria-label="Coverage map" />
          <div className={styles.legend}>
            <div className={styles.legendRow}>
              <span className={styles.legendDotPrimary} /> SRL Recovery base
            </div>
            <div className={styles.legendRow}>
              <span className={styles.legendDot} /> Area we cover
            </div>
            <div className={styles.legendRow}>
              <span className={styles.legendCircle} /> 30-mile core area
            </div>
            <div className={styles.legendRow}>
              <span className={styles.legendCircleOuter} /> Nationwide coverage
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

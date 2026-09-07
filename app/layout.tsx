import type { Metadata } from 'next'
import { Chakra_Petch, Mulish } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Schema from '@/components/Schema'
import WhatsAppButton from '@/components/WhatsAppButton'
import StickyCallBar from '@/components/StickyCallBar'
import CookieConsent from '@/components/CookieConsent'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const chakraPetch = Chakra_Petch({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-chakra',
  display: 'swap',
})

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
  display: 'swap',
})

// Every material-symbols-rounded ligature used anywhere in app/ or components/.
// Keep sorted and in sync with the source: `npm run check:icons`.
export const MATERIAL_ICONS = [
  'add', 'add_a_photo', 'arrow_back', 'arrow_downward', 'arrow_forward',
  'arrow_forward_ios', 'arrow_outward', 'build', 'call', 'car_crash',
  'check', 'check_circle', 'close', 'contacts', 'content_copy', 'delete',
  'description', 'directions_car', 'edit_note', 'emergency', 'emoji_events',
  'expand_more', 'gavel', 'health_and_safety', 'hourglass_empty', 'image',
  'info', 'lightbulb', 'local_shipping', 'location_on', 'mail', 'map',
  'open_in_new', 'payments', 'person_add', 'photo_camera', 'photo_library',
  'price_check', 'remove', 'route', 'schedule', 'send', 'speed', 'star',
  'support_agent', 'swap_horiz', 'undo', 'verified', 'visibility',
  'visibility_off', 'warehouse', 'warning',
] as const

const MATERIAL_SYMBOLS_HREF =
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded' +
  ':opsz,wght,FILL,GRAD@20..48,400,0,0' +
  `&icon_names=${MATERIAL_ICONS.join(',')}` +
  '&display=block'

export const metadata: Metadata = {
  metadataBase: new URL('https://srlrecovery.com'),
  title: {
    default: 'Breakdown Recovery Glasgow | 24/7 | From £60 | SRL Recovery',
    template: '%s',
  },
  description:
    'Rated 5 stars by 100+ Glasgow drivers. 24/7 breakdown and accident recovery, average arrival 30 to 45 minutes. £60 local, £120 motorway, no out-of-hours surcharge. Call 01698 700970.',
  keywords:
    'breakdown recovery Glasgow, car recovery near me Glasgow, 24 hour vehicle recovery Glasgow, accident recovery Glasgow, recovery Paisley, recovery East Kilbride, recovery Motherwell, M8 recovery, M74 recovery, motorway recovery Glasgow',
  verification: {
    google: 'BdNKAou_zVux61Mzr0CnJl1CTB2MQ5VCLFubW6Xyar8',
  },
  openGraph: {
    title: 'Breakdown Recovery Glasgow | 24/7 | From £60 | SRL Recovery',
    description:
      'Rapid-response breakdown and accident recovery in Glasgow. Available 24/7 for cars, vans, and commercial vehicles. Average arrival 30 to 45 minutes.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRL Recovery',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${mulish.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/*
          Material Symbols, subset to only the icons this site actually renders.

          The unsubsetted request (all ~3,700 icons, full axis ranges) pulls a
          5.1 MB woff2 on every page load. Naming the icons and pinning
          wght/FILL/GRAD to the values globals.css already uses takes it to 12 KB
          with identical rendering. The opsz range is kept so optical sizing
          still works across the 1rem to 2rem sizes in use.

          IMPORTANT: if you use a new material-symbols-rounded icon anywhere,
          add it to MATERIAL_ICONS below or it will render as its literal name
          (the word "call" instead of a phone). Run `npm run check:icons` to
          verify, it scans the source and fails if anything is missing.
        */}
        <link
          rel="stylesheet"
          href={MATERIAL_SYMBOLS_HREF}
          precedence="default"
        />
        <Schema />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <StickyCallBar />
        <CookieConsent />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}

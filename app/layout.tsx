import type { Metadata } from 'next'
import { Chakra_Petch, Mulish } from 'next/font/google'
import Schema from '@/components/Schema'
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

export const metadata: Metadata = {
  metadataBase: new URL('https://srlrecovery.co.uk'),
  title: {
    default: 'SRL Recovery – 24/7 Breakdown Recovery Glasgow',
    template: '%s | SRL Recovery',
  },
  description:
    'Fast 24/7 breakdown and accident recovery across Glasgow and surrounding areas. Average arrival 30–45 minutes. Call SRL Recovery now for immediate dispatch.',
  keywords:
    'breakdown recovery Glasgow, car recovery near me Glasgow, 24 hour vehicle recovery Glasgow, accident recovery Glasgow, recovery Paisley, recovery East Kilbride, recovery Motherwell',
  verification: {
    google: 'BdNKAou_zVux61Mzr0CnJl1CTB2MQ5VCLFubW6Xyar8',
  },
  openGraph: {
    title: 'SRL Recovery – 24/7 Breakdown Recovery Glasgow',
    description:
      'Rapid-response breakdown and accident recovery in Glasgow. Available 24/7 for cars, vans, and commercial vehicles. Average arrival 30–45 minutes.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'SRL Recovery',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          precedence="default"
        />
        <Schema />
      </head>
      <body>{children}</body>
    </html>
  )
}

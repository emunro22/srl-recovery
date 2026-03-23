import type { Metadata } from 'next'
import { Chakra_Petch, Mulish } from 'next/font/google'
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
  title: 'SRL Recovery – 24/7 Breakdown Recovery Glasgow',
  description:
    'Fast, professional 24/7 breakdown and accident recovery across Glasgow and surrounding areas. Call SRL Recovery now for immediate dispatch.',
  keywords:
    'breakdown recovery Glasgow, car recovery near me Glasgow, 24 hour vehicle recovery Glasgow, accident recovery Glasgow',
  openGraph: {
    title: 'SRL Recovery – 24/7 Breakdown Recovery Glasgow',
    description:
      'Rapid-response breakdown and accident recovery in Glasgow. Available 24/7 for cars, vans, and commercial vehicles.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  )
}

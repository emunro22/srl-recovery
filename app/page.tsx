import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Work from '@/components/Work'
import Testimonials from '@/components/Testimonials'
import CallbackForm from '@/components/CallbackForm'
import FAQ from '@/components/FAQ'
import Coverage from '@/components/Coverage'
import CoverageMap from '@/components/CoverageMap'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  alternates: { canonical: 'https://srlrecovery.com/' },
}

export default function Home() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Pricing />
        <Work />
        <Testimonials />
        <CallbackForm />
        <FAQ />
        <CoverageMap />
        <Coverage />
      </main>
      <Footer />
    </>
  )
}
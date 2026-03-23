import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Testimonials from '@/components/Testimonials'
import Coverage from '@/components/Coverage'
import Footer from '@/components/Footer'

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
        <Work />
        <Testimonials />
        <Coverage />
      </main>
      <Footer />
    </>
  )
}

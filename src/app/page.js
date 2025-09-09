import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import ServicesPreview from '@/components/ServicesPreview'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

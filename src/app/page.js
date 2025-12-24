import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import ServicesPreview from '@/components/ServicesPreview'
import BlogPreview from '@/components/BlogPreview'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="relative z-10">
        <Navigation />
        <Hero />
        {/* <AboutPreview /> */}
        <ServicesPreview />
        <BlogPreview />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}

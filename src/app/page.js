import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export const metadata = {
  title: 'Dr. Rashmi - Transform Your Energy, Transform Your Life',
  description: 'Experience profound transformation with Dr. Rashmi, PhD. 6+ years expertise in quantum healing, sound therapy, Access Consciousness, DNA activation in Mumbai, India.',
  openGraph: {
    title: 'Dr. Rashmi - Transform Your Energy, Transform Your Life',
    description: 'Experience profound transformation through quantum physics-based healing modalities',
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}

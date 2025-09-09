import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Healing Services - Quantum Physics-Based Spiritual Transformation',
  description: 'Explore Dr. Rashmi\'s comprehensive healing services: Sound Healing, Access Consciousness, DNA Activation, Distance Energy Healing, and more.',
  openGraph: {
    title: 'Healing Services - Transform Your Life',
    description: 'Comprehensive healing services with quantum physics-based modalities',
  },
}

const services = [
  {
    title: "Sound Healing Sessions",
    description: "Experience the therapeutic power of crystal singing bowls and vibrational healing to restore harmony and balance to your mind, body, and soul. These sessions use specific frequencies to release blockages and restore your natural energy flow.",
    benefits: ["Deep relaxation and stress relief", "Enhanced meditation and mindfulness", "Emotional healing and balance", "Improved sleep quality", "Cellular healing and regeneration"],
    duration: "60-90 minutes",
    price: "₹3,500",
    image: "/images/sound-healing.jpg",
    featured: true
  },
  {
    title: "Access Consciousness Bars",
    description: "A gentle touch therapy that involves touching 32 specific points on the head to release limiting thoughts and beliefs stored in the brain. This creates space for infinite possibilities and new perspectives.",
    benefits: ["Mental clarity and focus", "Stress and anxiety relief", "Better sleep patterns", "Emotional freedom", "Increased creativity and intuition"],
    duration: "60-75 minutes", 
    price: "₹4,000",
    featured: false
  },
  {
    title: "Distance Energy Healing",
    description: "Quantum energy transmission that transcends physical boundaries to heal, balance, and restore your energy field. Perfect for those who cannot attend in-person sessions or prefer remote healing.",
    benefits: ["Healing from anywhere in the world", "Chakra balancing and alignment", "Energy flow restoration", "Emotional and spiritual cleansing", "Past trauma healing"],
    duration: "45-60 minutes",
    price: "₹2,500",
    featured: false
  },
  {
    title: "DNA Repair & Activation",
    description: "Advanced healing techniques designed to activate your dormant potential and repair energy blocks at the cellular level. This process helps unlock your spiritual DNA and enhance your natural abilities.",
    benefits: ["Enhanced intuition and psychic abilities", "Physical healing acceleration", "Spiritual awakening and growth", "Increased life force energy", "Better connection to higher self"],
    duration: "90 minutes",
    price: "₹5,000",
    featured: false
  },
  {
    title: "Tarot & Astrology Readings",
    description: "Intuitive guidance using the ancient wisdom of tarot cards and astrological insights to provide clarity, direction, and understanding of your life's path and spiritual journey.",
    benefits: ["Life clarity and direction", "Decision-making guidance", "Future insights and timing", "Spiritual guidance", "Understanding life patterns"],
    duration: "45-60 minutes",
    price: "₹2,000",
    featured: false
  },
  {
    title: "Group Healing Sessions",
    description: "Join our transformative group sessions where collective energy amplifies individual healing. Experience the power of community healing and shared spiritual growth.",
    benefits: ["Amplified healing through group energy", "Community support and connection", "Shared wisdom and experiences", "Cost-effective healing option", "Regular spiritual practice"],
    duration: "2 hours",
    price: "₹1,500",
    image: "/images/group-session.jpg",
    featured: true
  }
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <section className="gradient-cream-peach py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide mb-8">
              Healing Services
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Your Path to Transformation
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Choose from our comprehensive range of healing modalities, each designed to address 
              different aspects of your being and support your journey to wholeness.
            </p>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {services.filter(service => service.featured).map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-3xl shadow-brand-lg object-cover aspect-[3/2]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h2 className="font-display text-3xl lg:text-4xl font-semibold text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                        {service.duration}
                      </span>
                      <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                        {service.price}
                      </span>
                      {index === 0 && (
                        <span className="bg-red-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      )}
                      {index === 1 && (
                        <span className="bg-red-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Community Healing
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="bg-gray-50 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Complete Service Menu
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each service is carefully designed to address specific aspects of your healing journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-brand-lg transition-all duration-300 overflow-hidden">
                  {service.image && (
                    <div className="relative h-48">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-yellow-400 mt-1">✨</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                      <div className="space-y-1">
                        <div className="text-sm text-gray-500">Duration: {service.duration}</div>
                        <div className="text-lg font-bold text-red-800">{service.price}</div>
                      </div>
                      <Link 
                        href="/contact" 
                        className="bg-yellow-400 hover:bg-red-800 hover:text-white text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-200 btn-hover-lift"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-16">
              How Our Sessions Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto">
                  01
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Initial Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We begin with a free 15-minute consultation to understand your needs and 
                  choose the right healing modality for you.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto">
                  02
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Personalized Session</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your healing session is tailored to your specific needs, combining various 
                  techniques for maximum effectiveness.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto">
                  03
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Integration Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Post-session guidance helps you integrate the healing and maintain your 
                  transformation in daily life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-cream-peach py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed">
              Book a free consultation to discover which healing modality is perfect for your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="bg-yellow-400 hover:bg-red-800 hover:text-white text-gray-900 px-10 py-4 lg:px-12 lg:py-5 rounded-full font-semibold text-lg transition-all duration-200 btn-hover-lift border-2 border-yellow-400 hover:border-red-800 text-center shadow-lg"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent hover:bg-red-800 hover:text-white text-red-800 px-10 py-4 lg:px-12 lg:py-5 rounded-full font-semibold text-lg transition-all duration-200 btn-hover-lift border-2 border-red-800 text-center"
              >
                Learn About Dr. Rashmi
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

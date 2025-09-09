import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services - Energy Healing & Spiritual Counselling | Infinite Ways',
  description: 'Discover Dr. Rashmi\'s healing modalities: Access Consciousness Bars, Distance Energy Healing, DNA Activation, Tarot & Astrology readings.',
}

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Access Consciousness Bars & Body Processes",
      description: "Release limiting thoughts and beliefs through gentle touch points on the head. This profound process helps clear mental clutter and opens new possibilities.",
      duration: "60-90 minutes",
      type: "In-person/Distance",
      benefits: ["Mental clarity", "Stress relief", "Improved sleep", "Enhanced creativity"]
    },
    {
      id: 2,
      name: "Distance Energy Healing",
      description: "Powerful energy healing sessions conducted remotely using quantum field connection. No physical presence required for transformation.",
      duration: "45-60 minutes", 
      type: "Online",
      benefits: ["Energy alignment", "Emotional balance", "Physical healing", "Spiritual connection"]
    },
    {
      id: 3,
      name: "DNA Repair & Activation",
      description: "Activate dormant DNA strands and repair genetic patterns for optimal wellness. Transform your genetic blueprint energetically.",
      duration: "60 minutes",
      type: "Distance/In-person", 
      benefits: ["Genetic healing", "Ancestral clearing", "Enhanced vitality", "Cellular regeneration"]
    },
    {
      id: 4,
      name: "Tarot & Astrology Readings",
      description: "Gain clarity and guidance through intuitive tarot readings and astrological insights. Understand your life path and purpose.",
      duration: "30-60 minutes",
      type: "Online/In-person",
      benefits: ["Life guidance", "Decision clarity", "Future insights", "Self-understanding"]
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">Healing Modalities & Services</h1>
            <p className="body-large">
              Experience transformation through quantum physics-based healing modalities 
              designed to remove blocks and align your energy for optimal well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={service.id} className={`card p-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-8`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {service.id}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary-100 text-secondary-700 rounded-full">
                        {service.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="heading-3 mb-4">{service.name}</h3>
                  <p className="body-text mb-6">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                      <p className="text-sm text-gray-600">{service.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Session Type</h4>
                      <p className="text-sm text-gray-600">{service.type}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href="/contact" className="btn btn-primary">
                    Book This Service
                  </a>
                </div>

                <div className="flex-1 lg:max-w-sm">
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-gray-600">Transform Your Energy</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-6">How Sessions Work</h2>
            <p className="body-large">
              Each session is tailored to your unique needs and energetic signature. 
              Here's what you can expect from our healing journey together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Consultation</h3>
              <p className="body-text">
                We discuss your needs, challenges, and goals. I use my intuitive abilities to understand your energetic state.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Energy Assessment</h3>
              <p className="body-text">
                Through clairvoyant abilities, I identify energy blocks, patterns, and areas needing healing attention.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healing Session</h3>
              <p className="body-text">
                Using appropriate modalities, I facilitate your healing process and provide guidance for integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">Ready to Transform Your Energy?</h2>
            <p className="body-large mb-8">
              Take the first step towards healing and transformation. Book your personalized session today 
              and discover the infinite possibilities waiting within you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-primary text-lg px-8 py-4">
                Book Your Session Now
              </a>
              <a href="/about" className="btn btn-outline text-lg px-8 py-4">
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

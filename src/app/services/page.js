import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services - Energy Healing & Spiritual Counselling | Infinite Ways',
  description: 'Discover Dr. Rashmi\'s healing modalities: Tarot Guidance, Intuitive Energy Healing, Sound Bath Meditations, and Manifestation Coaching.',
}

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Tarot Guidance",
      description: "Each Tarot session brings intuitive clarity and heartfelt direction for your journey. Using ancient wisdom combined with modern insight, I provide guidance for life's important decisions and spiritual growth.",
      duration: "45-60 minutes",
      type: "Online/In-person",
      benefits: ["Intuitive clarity", "Life path guidance", "Decision making", "Spiritual insights"]
    },
    {
      id: 2,
      name: "Intuitive Energy Healing",
      description: "Imbibe new energy patterns and experience holistic rejuvenation with my intuitive healing. This powerful modality works on multiple levels to restore balance and vitality to your entire being.",
      duration: "60-90 minutes", 
      type: "Online/Distance",
      benefits: ["Chakra balancing", "Emotional healing", "Energy restoration", "Spiritual connection"]
    },
    {
      id: 3,
      name: "Sound Bath Meditations",
      description: "Relax into restorative sound baths, integrating ancient frequencies for full mind-body reset. Experience deep relaxation and healing through the power of therapeutic sound vibrations.",
      duration: "45-75 minutes",
      type: "In-person/Online", 
      benefits: ["Deep relaxation", "Stress relief", "Cellular healing", "Meditation states"]
    },
    {
      id: 4,
      name: "Manifestation Coaching",
      description: "Activate your potential and align your reality with manifestation coaching grounded in deep spiritual practice. Learn to co-create with the universe and manifest your deepest desires.",
      duration: "60-90 minutes",
      type: "Online/In-person",
      benefits: ["Goal alignment", "Limiting belief clearing", "Visualization mastery", "Action planning"]
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">Healing That Transforms</h1>
            <p className="body-large">
              Experience profound healing through integration of various modalities where each session is as unique as you are. 
              Healing sessions are customised as per individual requirements.
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
              Here&apos;s what you can expect from our healing journey together.
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

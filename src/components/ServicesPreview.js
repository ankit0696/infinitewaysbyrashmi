import Link from 'next/link'

export default function ServicesPreview() {
  const services = [
    {
      name: "Tarot Guidance",
      description: "Each Tarot session brings intuitive clarity and heartfelt direction for your journey",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: "bg-primary-500"
    },
    {
      name: "Sound Bath Meditations",
      description: "Relax into restorative sound baths, integrating ancient frequencies for full mind-body reset",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "bg-warm-coral"
    },
    {
      name: "Manifestation Coaching",
      description: "Activate your potential and align your reality with manifestation coaching grounded in deep spiritual practice",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "bg-accent-500"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Healing Services
          </div>
          <h2 className="heading-2 mb-6">Healing That Transforms</h2>
          <p className="body-large text-brand-light">
            Experience profound healing through integration of various modalities where each session is as unique as you are. 
            Healing sessions are customised as per individual requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand mb-4">{service.name}</h3>
              <p className="body-text text-brand-light">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="body-text text-brand-light mb-8 max-w-2xl mx-auto">
            Each session is personalized to your unique needs and energetic signature. 
            Let&apos;s work together to unlock your infinite potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn btn-primary">
              Explore All Services
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

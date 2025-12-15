'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPreview() {
  const services = [
    {
      name: "Tarot Guidance",
      description: "Each Tarot session brings intuitive clarity and heartfelt direction for your journey",
      image: "/images/tarot-guidance.jpg"
    },
    {
      name: "Sound Bath Meditations",
      description: "Relax into restorative sound baths, integrating ancient frequencies for full mind-body reset",
      image: "/images/sound-bathing.jpg"
    },
    {
      name: "Manifestation Coaching",
      description: "Activate your potential and align your reality with manifestation coaching grounded in deep spiritual practice",
      image: "/images/manifestation-coaching.jpg"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white via-slate-50 to-white dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-secondary-500 mb-4">Transformative Work</p>
          <h2 className="heading-2 mb-6">Healing Services Tailored to You</h2>
          <p className="body-large text-brand-light max-w-3xl mx-auto">
            Each session blends modalities uniquely suited to your needs. Experience profound transformation through personalized, heartfelt healing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-white/5 hover:border-secondary/30 dark:hover:border-secondary/40"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 z-20 ${
                index === 0 ? 'bg-primary-500' :
                index === 1 ? 'bg-warm-coral' :
                'bg-accent-500'
              } group-hover:h-1.5 transition-all duration-500`} />
              
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 p-8 space-y-6">
                {/* Top section with title and arrow */}
                <div className="flex items-start justify-between">
                  <h3 className="heading-3 text-slate-900 dark:text-white group-hover:text-secondary transition-colors duration-300 flex-1 pr-4">
                    {service.name}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                {/* CTA Link */}
                <div className="pt-2">
                  <Link 
                    href="/services" 
                    className="inline-flex items-center text-secondary-600 dark:text-secondary-400 font-medium text-sm hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors group/link"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative rounded-3xl bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:via-secondary-500/20 dark:to-accent-500/20 border border-primary-500/20 dark:border-primary-500/30 p-12 text-center backdrop-blur-sm">
          <h3 className="heading-3 text-slate-900 dark:text-white mb-4">Ready to Transform Your Energy?</h3>
          <p className="body-text text-brand-light max-w-2xl mx-auto mb-8">
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

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center gradient-bg pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                Energy Transformational Coach
              </div>

              <h1 className="heading-1 mb-6">
                <span className="text-brand">Transform Your Energy,</span>
                <br />
                <span className="text-primary-500">Transform Your Life</span>
              </h1>

              <p className="body-large text-brand-light mb-8 max-w-xl">
                Experience profound healing through quantum physics-based modalities. 
                Dr. Rashmi combines scientific expertise with spiritual wisdom to guide your transformation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
                Book Your Session
              </Link>
              <Link href="/about" className="btn btn-outline text-lg px-8 py-4">
                Learn My Story
              </Link>
            </div>

            {/* Updated Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand">7+</div>
                <div className="text-sm text-brand-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand">5000+</div>
                <div className="text-sm text-brand-light">Lives Impacted</div>
              </div>
            </div>
            
            {/* Grandmaster Badge */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4 border border-primary-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-brand">Grandmaster</div>
                  <div className="text-sm text-brand-light">in multiple healing modalities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Hero Image */}
              <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-image.jpg" // Add this image to public/images/
                  alt="Dr. Rashmi Bohra - Energy Transformational Coach"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-full"></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary-500 rounded-full opacity-20 animate-float blur-sm"></div>
              <div className="absolute -bottom-8 -left-8 w-8 h-8 bg-primary-500 rounded-full opacity-30 animate-float blur-sm" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-6 w-6 h-6 bg-warm-coral rounded-full opacity-40 animate-float blur-sm" style={{animationDelay: '2s'}}></div>
              
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-secondary-500/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>

            {/* Updated Name badge - removed PhD */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
              <p className="text-sm font-semibold text-brand">Dr. Rashmi Bohra</p>
              <p className="text-xs text-brand-light">Energy Healer & Spiritual Life Coach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

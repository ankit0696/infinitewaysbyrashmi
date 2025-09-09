import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      {/* Main Hero Section - Clean & Professional */}
      <section className="bg-white pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content - 7 columns */}
            <div className="lg:col-span-7 space-y-10 animate-fade-up">
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-3 bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>PhD Qualified • 6+ Years Active Practice</span>
              </div>

              {/* Main Headline - Clean Typography */}
              <div className="space-y-6">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight">
                  Transform Your
                  <span className="block font-medium text-red-800 relative">
                    Energy & Life
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 rounded-full"></div>
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
                  Experience profound transformation through scientifically-backed spiritual healing. 
                  Dr. Rashmi combines PhD expertise with authentic clairvoyant abilities.
                </p>
              </div>

              {/* Clean CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/contact" 
                  className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center btn-hover-professional"
                >
                  Book Free Consultation
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-gray-300 hover:border-red-800 hover:text-red-800 text-gray-700 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 text-center"
                >
                  About Dr. Rashmi
                </Link>
              </div>

              {/* Trust Metrics - Clean Grid */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-100">
                <div className="text-center">
                  <div className="font-display text-4xl font-light text-red-800 mb-2">500+</div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Lives Transformed</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-light text-red-800 mb-2">6+</div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-light text-red-800 mb-2">PhD</div>
                  <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Qualified</div>
                </div>
              </div>
            </div>

            {/* Hero Image - 5 columns */}
            <div className="lg:col-span-5 relative animate-slide-left">
              <div className="relative">
                {/* Background Element */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-100 to-red-50 rounded-2xl"></div>
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-professional-lg">
                  <Image
                    src="/images/hero-image.jpg"
                    alt="Dr. Rashmi - Professional Spiritual Healer"
                    width={500}
                    height={600}
                    priority
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Professional Grid with Icons */}
      <section className="gradient-professional py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Healing Modalities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each service combines scientific principles with spiritual wisdom for profound transformation
            </p>
          </div>

          {/* Services Grid - Clean Cards with Professional Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {/* Sound Waves Icon */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sound Healing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Crystal singing bowls and therapeutic frequencies for deep cellular healing and restoration
                </p>
                <div className="text-sm text-red-800 font-medium">60-90 min • ₹3,500</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {/* Brain/Mind Icon */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Access Consciousness</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gentle touch therapy to release limiting beliefs and expand consciousness
                </p>
                <div className="text-sm text-red-800 font-medium">60-75 min • ₹4,000</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {/* Energy Waves Icon */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 13.5L8.5 16 12 18.5 15.5 16 12 13.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Distance Healing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Quantum energy transmission that transcends physical boundaries worldwide
                </p>
                <div className="text-sm text-red-800 font-medium">45-60 min • ₹2,500</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-professional hover:shadow-professional-lg transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {/* DNA Helix Icon */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-2V2.5C17 2.22 16.78 2 16.5 2h-9C7.22 2 7 2.22 7 2.5V4H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2v7H5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h2v1.5c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5V20h2c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-2V9h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">DNA Activation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advanced techniques to activate dormant potential and enhance natural abilities
                </p>
                <div className="text-sm text-red-800 font-medium">90 min • ₹5,000</div>
              </div>
            </div>
          </div>

          {/* Services CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-red-800 hover:text-red-900 font-medium text-lg group transition-colors duration-200"
            >
              <span>Explore All Services</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Professional & Credible */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Client Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from real people who have experienced profound healing and growth
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 relative shadow-professional hover:shadow-professional-lg transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                {`"Dr. Rashmi's sound healing sessions completely transformed my chronic anxiety. 
                The combination of her scientific background and intuitive gifts creates a uniquely 
                powerful healing experience."`}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white font-medium">
                  PS
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-600">Marketing Director, Mumbai</div>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <svg className="w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 relative shadow-professional hover:shadow-professional-lg transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                {`"The DNA activation session awakened abilities I didn't know I had. Dr. Rashmi's 
                scientific approach to spirituality is exactly what I was looking for as a tech professional."`}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-medium">
                  RK
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600">Tech Executive, Bangalore</div>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <svg className="w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 relative shadow-professional hover:shadow-professional-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                {`"Distance energy healing worked when nothing else did. Her sessions helped me heal 
                childhood trauma and step into my power as a leader."`}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white font-medium">
                  KP
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Kavya Patel</div>
                  <div className="text-sm text-gray-600">Life Coach, Delhi</div>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <svg className="w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Testimonials CTA */}
          <div className="text-center mt-16">
            <Link 
              href="/contact" 
              className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 btn-hover-professional"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Professional Credentials */}
      <section className="bg-gray-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="font-display text-4xl lg:text-5xl font-light mb-8">
                Why Choose Dr. Rashmi
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                A unique combination of academic excellence and authentic spiritual gifts, 
                dedicated to your transformation journey.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">PhD in Computer Science</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Academic foundation combining analytical thinking with systematic problem-solving approaches to healing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">6+ Years Active Practice</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Dedicated full-time practice in energy healing, quantum modalities, and spiritual transformation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Authentic Clairvoyance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Natural psychic abilities discovered in childhood, refined through years of spiritual development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-left">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-brand">
                <Image
                  src="/images/about-transformation.jpg"
                  alt="Dr. Rashmi's Spiritual Journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

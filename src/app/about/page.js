import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'About Dr. Rashmi - From Academia to Spiritual Awakening',
  description: 'Discover Dr. Rashmi\'s journey from PhD Computer Science lecturer to quantum healing expert. Learn about her clairvoyant abilities and transformation story.',
  openGraph: {
    title: 'About Dr. Rashmi - From Academia to Spiritual Awakening',
    description: 'Discover Dr. Rashmi\'s journey from academia to spiritual healing mastery',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <section className="gradient-cream-peach py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide mb-8">
              About Dr. Rashmi
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              From Academia to Spiritual Awakening
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover the journey of transformation that led me from university lecture halls 
              to healing hearts and souls across the world.
            </p>
          </div>
        </section>

        {/* Transformation Story */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative">
                <Image
                  src="/images/about-transformation.jpg"
                  alt="Dr. Rashmi's Transformation Journey"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-3xl shadow-brand-lg object-cover aspect-square"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-8">
                <h2 className="font-display text-3xl lg:text-4xl font-semibold text-gray-900">
                  My Journey of Transformation
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    A decade ago, I was a university lecturer with a PhD in Computer Science, 
                    teaching engineering students in the structured world of academia. But life 
                    had a deeper calling waiting for me.
                  </p>
                  <p>
                    The pivotal moment came early in my childhood. After losing my father at age 3, 
                    I discovered something extraordinary—I could still feel his presence around me. 
                    For years, I thought this was normal, that everyone could sense spirits and 
                    energy the way I could.
                  </p>
                  <p>
                    It wasn&apos;t until years later, through my spiritual studies and meeting others 
                    with similar gifts, that I realized this wasn&apos;t imagination or wishful thinking. 
                    It was clairvoyance—a genuine psychic ability that I now consider one of my 
                    greatest treasures.
                  </p>
                  <p>
                    My academic journey equipped me with analytical thinking and scientific rigor, 
                    while my spiritual journey, deeply influenced by my Nani&apos;s wisdom, opened me 
                    to the mystical world of healing modalities like tarot, reiki, and quantum 
                    energy work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healing Philosophy */}
        <section className="bg-gray-50 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                My Healing Philosophy
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-brand-lg transition-all duration-300 text-center">
                <div className="text-6xl mb-8">🧬</div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
                  Quantum Physics Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I believe in healing through quantum physics-based modalities that work on 
                  the energetic level, addressing root causes rather than just symptoms.
                </p>
              </div>
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-brand-lg transition-all duration-300 text-center">
                <div className="text-6xl mb-8">🌟</div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
                  Scientific Spirituality
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Combining my PhD background with intuitive gifts to offer a unique blend 
                  of analytical thinking and spiritual wisdom.
                </p>
              </div>
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg hover:shadow-brand-lg transition-all duration-300 text-center">
                <div className="text-6xl mb-8">💫</div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
                  Individual Capacity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I focus my counselling style on each client&apos;s personal needs and individual 
                  capacity, ensuring personalized healing experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Credentials & Experience
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A unique combination of academic excellence and spiritual mastery, 
                dedicated to your transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 hover:bg-white hover:shadow-lg p-8 rounded-3xl text-center transition-all duration-300 border border-gray-100">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto mb-6">
                  PhD
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Computer Science PhD</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Academic foundation in scientific research, analytical thinking, and 
                  systematic problem-solving approaches.
                </p>
              </div>
              <div className="bg-gray-50 hover:bg-white hover:shadow-lg p-8 rounded-3xl text-center transition-all duration-300 border border-gray-100">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto mb-6">
                  6+
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Years of Healing Practice</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated practice in energy healing, spiritual transformation, and 
                  quantum physics-based healing modalities.
                </p>
              </div>
              <div className="bg-gray-50 hover:bg-white hover:shadow-lg p-8 rounded-3xl text-center transition-all duration-300 border border-gray-100">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold text-gray-900 mx-auto mb-6">
                  500+
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Lives Transformed</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Clients who have experienced profound healing, growth, and breakthrough 
                  in their personal and spiritual journeys.
                </p>
              </div>
              <div className="bg-gray-50 hover:bg-white hover:shadow-lg p-8 rounded-3xl text-center transition-all duration-300 border border-gray-100">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
                  ✨
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Certified Practitioner</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Multiple certifications in Access Consciousness, energy healing, tarot reading, 
                  and various spiritual modalities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gray-50 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Dr. Rashmi Professional"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-3xl shadow-brand-lg object-cover aspect-[4/5]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <h2 className="font-display text-3xl lg:text-4xl font-semibold text-gray-900">
                  My Mission & Vision
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Today, I help others experience the same profound transformation I found—moving 
                    from limitation to limitless possibility, from stuck to soaring, from surviving 
                    to truly thriving.
                  </p>
                  <p>
                    My mission is to bridge the gap between scientific understanding and spiritual 
                    wisdom, helping people heal not just their symptoms, but the deep-rooted 
                    patterns that create them.
                  </p>
                  <p>
                    Through my work, I especially want to reach women who feel helpless and powerless, 
                    those who believe they can&apos;t change their circumstances. I want to show them their 
                    true potential and help them realize their incredible power.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-red-800">6+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-red-800">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Lives Changed</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-red-800">100%</div>
                    <div className="text-sm text-gray-600 font-medium">Word of Mouth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Dr. Rashmi - My Journey | Infinite Ways',
  description: 'Learn about Dr. Rashmi Bohra&apos;s unique journey from PhD in Computer Science to Energy Transformational Coach and Transpersonal Counsellor.',
}

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">My Journey of Transformation</h1>
            <p className="body-large">
              From the academic world of Computer Science to the mystical realm of energy healing,
              my path has been one of continuous learning, growth, and spiritual awakening.
            </p>
          </div>
        </div>
      </section>

      {/* Two Journeys */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Two Parallel Journeys</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Academic Journey */}
              <div className="card p-8">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="heading-3 mb-4">Academic Journey</h3>
                <p className="body-text mb-4">
                  My journey through the academic world honed and sharpened my skills. With a Masters in Computer Science and a PhD, 
                  I was lecturing engineering students when I discovered my passion for helping others.
                </p>
                <p className="body-text mb-4">
                  Students began approaching me for guidance on campus interviews, presentations, and group discussions. 
                  Even a decade later, my students remain in touch with me.
                </p>
                <p className="body-text">
                  I completed &quot;Training the Trainer&quot; by Italian trainer Alto Camarazzi, which has been invaluable in my client sessions.
                </p>
              </div>

              {/* Spiritual Journey */}
              <div className="card p-8">
                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="heading-3 mb-4">Spiritual Journey</h3>
                <p className="body-text mb-4">
                  My spiritual journey spans several decades and continues to enhance. My Nani was my defining influence, 
                  introducing me to the mystical world beyond physical reality.
                </p>
                <p className="body-text mb-4">
                  After losing my father at age 3, I could still feel his presence. Years later, through studying spirituality 
                  and meeting others with similar experiences, I understood this was a gift&mdash;not imagination.
                </p>
                <p className="body-text">
                  Through dedicated meditation practices, I developed clairvoyance&mdash;my &quot;third eye&quot;&mdash;which helps me understand 
                  my clients&apos; individuality and inner workings.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="card p-8 mb-16">
              <h3 className="heading-3 mb-6 text-center">My Philosophy</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Quantum Physics Approach</h4>
                  <p className="body-text">
                    I believe in healing people by following modalities based on the rules of quantum physics. 
                    Energy healing asks us to get out of the traps of mind&mdash;logic and reasoning.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Client-Centered Approach</h4>
                  <p className="body-text">
                    I focus my counselling style on each client&apos;s personal needs and individual capacity, 
                    bringing my well-defined set of values, tools, and perspectives to every session.
                  </p>
                </div>
              </div>
            </div>

            {/* Future Plans */}
            <div className="text-center">
              <h3 className="heading-3 mb-6">Looking Forward</h3>
              <p className="body-large mb-8">
                I&apos;m venturing into podcasting to reach women who feel helpless and powerless, 
                helping them realize their true potential and inner power. My natural empathy, 
                vision for a better world, and vast knowledge repertoire will guide this mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/services" className="btn btn-primary">
                  Explore My Services
                </a>
                <a href="/contact" className="btn btn-outline">
                  Book a Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

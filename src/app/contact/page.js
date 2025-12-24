import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Dr. Rashmi - Book Your Session | Infinite Ways',
  description: 'Connect with Dr. Rashmi Bohra for energy healing sessions, spiritual counselling, and transformational coaching. Book your session today.',
}

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
<section
  className="relative overflow-hidden bg-surface"
  style={{
    backgroundImage:
      "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.78)), url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/70" />

  <div className="relative container py-24 sm:py-28 text-center">
    <p className="uppercase tracking-[0.2em] text-sm font-semibold text-gray-900">
      Let’s Connect
    </p>

    <h1 className="heading-1 mt-4 mb-6 text-gray-900">
      Connect with Dr. Rashmi
    </h1>

    <p className="max-w-3xl mx-auto text-lg text-gray-700">
      Ready to begin your transformation journey? I’m here to gently guide you
      through energy healing and spiritual awakening. Let’s connect and explore
      how I can support your growth, clarity, and inner balance.
    </p>
  </div>
</section>


      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="card p-8">
                <h2 className="heading-3 mb-6">Book Your Session</h2>
                <p className="body-text mb-8">
                  Fill out the form below and I&apos;ll get back to you within 24 hours to schedule your personalized session.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Session Types */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold mb-6" style={{color: '#8d2e35'}}>Session Options</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-medium" style={{color: '#8d2e35'}}>Online Sessions</h4>
                      <p className="text-sm" style={{color: '#8d2e35', opacity: 0.8}}>Distance healing sessions via video call</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium" style={{color: '#8d2e35'}}>In-Person Sessions</h4>
                      <p className="text-sm" style={{color: '#8d2e35', opacity: 0.8}}>Available by special arrangement</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium" style={{color: '#8d2e35'}}>Flexible Timing</h4>
                      <p className="text-sm" style={{color: '#8d2e35', opacity: 0.8}}>Sessions available across time zones</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold mb-6" style={{color: '#8d2e35'}}>Follow My Journey</h3>
                <p className="body-text mb-6">
                  Stay connected and get daily inspiration through my social media channels.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/infinitewaysbyrashmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="text-primary-500">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{color: '#8d2e35'}}>Instagram</span>
                    <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/infinitwaysbyrashmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="text-primary-500">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{color: '#8d2e35'}}>Facebook</span>
                    <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <a
                    href="https://youtube.com/@dr.rashmi-infiniteways?si=BHw6IKlkz4d1MJ2b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="text-primary-500">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <span className="font-medium" style={{color: '#8d2e35'}}>YouTube</span>
                    <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold mb-6" style={{color: '#8d2e35'}}>Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2" style={{color: '#8d2e35'}}>How long are sessions?</h4>
                    <p className="text-sm" style={{color: '#8d2e35', opacity: 0.8}}>Sessions typically last 45-90 minutes depending on the service selected.</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2" style={{color: '#8d2e35'}}>Do you offer distance healing?</h4>
                    <p className="text-sm" style={{color: '#8d2e35', opacity: 0.8}}>Yes, I specialize in distance energy healing using quantum field connections.</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2" style={{color: '#8d2e35'}}>What can I expect in my first session?</h4>
                    <p className="text-sm" style={{color: '#8d2e35', opacity: 0.8}}>We&apos;ll start with a consultation to understand your needs and then proceed with the appropriate healing modality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

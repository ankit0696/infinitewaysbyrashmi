import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Dr. Rashmi - Book Your Session | Infinite Ways',
  description: 'Connect with Dr. Rashmi Bohra for energy healing sessions, spiritual counselling, and transformational coaching. Book your session today.',
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.78)), url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80')",
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

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="card p-8 shadow-lg bg-white rounded-xl">
                <h2 className="heading-3 mb-6 text-primary-600">Book Your Session</h2>
                <p className="body-text mb-8 text-gray-600">
                  Fill out the form below and I&apos;ll get back to you within 24 hours to schedule your personalized session.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info & Socials */}
            <div className="space-y-8">
              {/* Session Types */}
              <div className="card p-8 shadow-lg bg-white rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-primary-600">Session Options</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-primary-600">Online Sessions</h4>
                      <p className="text-sm text-gray-500">Distance healing sessions via video call</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-primary-600">In-Person Sessions</h4>
                      <p className="text-sm text-gray-500">Available by special arrangement</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-primary-600">Flexible Timing</h4>
                      <p className="text-sm text-gray-500">Sessions available across time zones</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card p-8 shadow-lg bg-white rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-primary-600">Follow My Journey</h3>
                <p className="body-text mb-6 text-gray-600">
                  Stay connected and get daily inspiration through my social media channels.
                </p>

                <div className="space-y-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/infinitewaysbyrashmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="text-pink-500">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 0 1 1.775 1.03 4.92 4.92 0 0 1 1.03 1.774c.163.457.347 1.257.403 2.427.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.03 1.775 4.92 4.92 0 0 1-1.774 1.03c-.457.163-1.257.347-2.427.403-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.902 4.902 0 0 1-2.803-2.803c-.163-.457-.347-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427A4.92 4.92 0 0 1 3.666 2.92a4.92 4.92 0 0 1 1.774-1.03c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.013 7.052.072 5.773.131 4.72.342 3.8.704a6.922 6.922 0 0 0-2.515 1.64A6.922 6.922 0 0 0 .704 4.86C.342 5.78.131 6.833.072 8.112.013 9.392 0 9.797 0 12s.013 2.608.072 3.888c.059 1.279.27 2.332.632 3.252a6.92 6.92 0 0 0 1.64 2.515 6.922 6.922 0 0 0 2.515 1.64c.92.362 1.973.573 3.252.632C9.392 23.987 9.797 24 12 24s2.608-.013 3.888-.072c1.279-.059 2.332-.27 3.252-.632a6.922 6.922 0 0 0 2.515-1.64 6.922 6.922 0 0 0 1.64-2.515c.362-.92.573-1.973.632-3.252.059-1.28.072-1.685.072-3.888s-.013-2.608-.072-3.888c-.059-1.279-.27-2.332-.632-3.252a6.922 6.922 0 0 0-1.64-2.515 6.922 6.922 0 0 0-2.515-1.64c-.92-.362-1.973-.573-3.252-.632C14.608.013 14.203 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-primary-600">Instagram</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/infinitwaysbyrashmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="text-blue-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-blue-600">Facebook</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com/@dr.rashmi-infiniteways"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="text-red-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <span className="font-medium text-red-600">YouTube</span>
                  </a>
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

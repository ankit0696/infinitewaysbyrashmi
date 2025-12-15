import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-700 to-secondary-800 rounded-2xl p-8 md:p-12 text-center border border-white/10 shadow-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
              Step Into Your Next Level of Wellbeing
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Begin a gentle, powerful journey tailored to your soul — integrate healing, clarity and practical transformation in every session.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-accent-400 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-2xl transform transition hover:scale-[1.02] focus:ring-4 focus:ring-primary-400/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Book Your Session
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/95 hover:bg-white/8 transition"
              >
                Explore Services
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <StatBadge emoji="✨" title="Quantum Healing" subtitle="Evidence & intuition" />
              <StatBadge emoji="🌿" title="Personalized" subtitle="Tailored sessions" />
              <StatBadge emoji="💫" title="Trusted" subtitle="5000+ lives" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatBadge({ emoji, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 bg-white/3 border border-white/6 rounded-xl px-4 py-3 hover:bg-white/6 transition">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl bg-white/8">
        {emoji}
      </div>
      <div className="text-left">
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="text-xs text-white/80">{subtitle}</div>
      </div>
    </div>
  )
}

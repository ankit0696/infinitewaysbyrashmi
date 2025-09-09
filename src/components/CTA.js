import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            Ready to Welcome Your New Energetic Self?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Enter a world of wonders waiting just for you. Begin your transformation journey 
            with personalized healing sessions designed to unlock your infinite potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Your Session Now
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Explore Services
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">✨</div>
              <div className="font-medium">Quantum Healing</div>
              <div className="text-sm opacity-80">Science-based approach</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">🌟</div>
              <div className="font-medium">Personalized Sessions</div>
              <div className="text-sm opacity-80">Tailored to your needs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">💫</div>
              <div className="font-medium">Proven Results</div>
              <div className="text-sm opacity-80">100% client retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/60 to-secondary-50/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_60%)]" />

      <div className="relative container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — CONTENT */}
          <div className="max-w-xl animate-fade-in">
            <span className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium tracking-wide bg-primary-100 text-primary-700">
              Energy Healing • Inner Alignment • Transformation
            </span>

            <h1 className="heading-1 mb-6 text-gray-900">
              A Gentle Path to
              <br />
              <span className="text-primary-500">
                Healing, Clarity & Inner Balance
              </span>
            </h1>

            <p className="body-large text-gray-700 mb-10">
              I’m Dr. Rashmi Bohra. My work blends intuitive energy healing with
              deep awareness to help you release emotional blocks, reconnect
              with yourself, and experience lasting inner shifts—at your own
              pace, in your own way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Begin Your Healing
              </Link>
              <Link
                href="/about"
                className="btn btn-outline text-lg px-8 py-4"
              >
                My Journey
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex gap-10">
              <div>
                <p className="text-2xl font-semibold text-gray-900">7+</p>
                <p className="text-sm text-gray-600">Years of Practice</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">5000+</p>
                <p className="text-sm text-gray-600">Lives Touched</p>
              </div>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative flex justify-center animate-float">
            <div className="relative w-[320px] sm:w-[380px] aspect-square rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-image.jpg"
                alt="Dr. Rashmi Bohra – Energy Healer"
                fill
                className="object-cover"
                priority
              />

              {/* soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/15 to-transparent" />
            </div>

            {/* Aura rings */}
            <div className="absolute inset-0 rounded-full border border-primary-500/30 animate-pulse" />
            <div className="absolute -inset-6 rounded-full border border-secondary-500/20 animate-pulse" style={{ animationDelay: '0.6s' }} />

            {/* Name badge */}
            <div className="absolute -bottom-6 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-md border border-white/30">
              <p className="text-sm font-semibold text-gray-900">
                Dr. Rashmi Bohra
              </p>
              <p className="text-xs text-gray-600 text-center">
                Energy Healer & Spiritual Guide
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

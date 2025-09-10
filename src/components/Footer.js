import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/infinitewaysbyrashmi',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
        </svg>
      )
    },
    {
      name: 'Facebook', 
      url: 'https://www.facebook.com/infinitwaysbyrashmi',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@dr.rashmi-infiniteways', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="bg-accent-500 text-white">
      <div className="container">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-display mb-2">Infinitewaysbyrashmi</h3>
              <p className="text-white/80">by Dr. Rashmi Bohra</p>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Transform your energy and life through quantum physics-based healing modalities. 
              Experience profound healing with an Energy Transformational Coach and Transpersonal Counsellor.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary-400 transition-colors">
                  About Dr. Rashmi
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary-400 transition-colors">
                  Healing Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary-400 transition-colors">
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary-400 transition-colors">
                  Tarot Guidance
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary-400 transition-colors">
                  Intuitive Energy Healing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary-400 transition-colors">
                  Sound Bath Meditations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary-400 transition-colors">
                  Manifestation Coaching
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Dr. Rashmi Bohra. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2 md:mt-0">
            infinitewaysbyrashmi.com
          </p>
        </div>
      </div>
    </footer>
  )
}

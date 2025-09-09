import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white">
              Infinite Ways by Rashmi
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Transform Your Energy, Transform Your Life
            </p>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Dr. Rashmi combines her PhD expertise with authentic clairvoyant abilities 
              to guide your spiritual transformation journey through scientifically-backed healing modalities.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://www.instagram.com/infinitewaysbyrashmi" 
                className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 p-3 rounded-xl transition-all duration-200 group" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/infinitwaysbyrashmi" 
                className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 p-3 rounded-xl transition-all duration-200 group" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                About Dr. Rashmi
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Healing Services
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white">Connect</h4>
            <div className="space-y-4">
              <a 
                href="mailto:hello@infinitewaysbyrashmi.com"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                hello@infinitewaysbyrashmi.com
              </a>
              <a 
                href="tel:+919876543210"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                +91 98765 43210
              </a>
              <span className="block text-gray-400">
                Mumbai, Maharashtra, India
              </span>
              <div className="pt-2">
                <span className="text-sm text-gray-500">
                  Available for in-person and distance healing sessions worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-gray-500 text-sm">
              &copy; 2025 Infinite Ways by Rashmi. All rights reserved.
            </p>
            <p className="text-center md:text-right text-gray-500 text-sm">
              Designed with ❤️ for transformation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

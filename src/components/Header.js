'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname === path) return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 z-50 transition-all duration-300 shadow-professional">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="font-display text-xl lg:text-2xl font-semibold text-red-800 hover:text-red-700 transition-colors duration-200"
            >
              Infinite Ways by Rashmi
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <Link 
              href="/" 
              className={`relative font-medium transition-colors duration-200 py-2 text-lg ${
                isActive('/') 
                  ? 'text-red-800' 
                  : 'text-gray-700 hover:text-red-800'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/about" 
              className={`relative font-medium transition-colors duration-200 py-2 text-lg ${
                isActive('/about') 
                  ? 'text-red-800' 
                  : 'text-gray-700 hover:text-red-800'
              }`}
            >
              About
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/services" 
              className={`relative font-medium transition-colors duration-200 py-2 text-lg ${
                isActive('/services') 
                  ? 'text-red-800' 
                  : 'text-gray-700 hover:text-red-800'
              }`}
            >
              Services
              {isActive('/services') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/contact" 
              className={`relative font-medium transition-colors duration-200 py-2 text-lg ${
                isActive('/contact') 
                  ? 'text-red-800' 
                  : 'text-gray-700 hover:text-red-800'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/contact" 
              className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 btn-hover-professional shadow-lg"
            >
              Book Session
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden flex flex-col space-y-1.5 p-2"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-gray-200 shadow-professional-lg`}>
        <nav className="px-6 py-8 space-y-6">
          <Link 
            href="/" 
            className={`block font-medium text-lg transition-colors duration-200 ${
              isActive('/') ? 'text-red-800' : 'text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`block font-medium text-lg transition-colors duration-200 ${
              isActive('/about') ? 'text-red-800' : 'text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`block font-medium text-lg transition-colors duration-200 ${
              isActive('/services') ? 'text-red-800' : 'text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className={`block font-medium text-lg transition-colors duration-200 ${
              isActive('/contact') ? 'text-red-800' : 'text-gray-700'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Session
          </Link>
        </nav>
      </div>
    </header>
  )
}

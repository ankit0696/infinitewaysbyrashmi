'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },

  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/20 ${
      isScrolled
        ? 'bg-white/30 backdrop-blur-xl shadow-lg'
        : 'bg-white/15 backdrop-blur-xl'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="font-display">
              <h2 className="text-2xl font-bold text-brand">Infinitewaysbyrashmi</h2>
              <p className="text-sm text-brand-light -mt-1">by Dr. Rashmi</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-primary-500'
                    : 'text-brand hover:text-primary-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary">
              Book Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/70 backdrop-blur-xl shadow-lg border-t border-white/20">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-brand hover:text-primary-500 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-primary w-full text-center"
                >
                  Book Session
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

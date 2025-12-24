'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/infinitewaysbyrashmi',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 0 1 1.775 1.03 4.92 4.92 0 0 1 1.03 1.774c.163.457.347 1.257.403 2.427.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.03 1.775 4.92 4.92 0 0 1-1.774 1.03c-.457.163-1.257.347-2.427.403-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.902 4.902 0 0 1-2.803-2.803c-.163-.457-.347-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427A4.92 4.92 0 0 1 3.666 2.92a4.92 4.92 0 0 1 1.774-1.03c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.013 7.052.072 5.773.131 4.72.342 3.8.704a6.922 6.922 0 0 0-2.515 1.64A6.922 6.922 0 0 0 .704 4.86C.342 5.78.131 6.833.072 8.112.013 9.392 0 9.797 0 12s.013 2.608.072 3.888c.059 1.279.27 2.332.632 3.252a6.92 6.92 0 0 0 1.64 2.515 6.922 6.922 0 0 0 2.515 1.64c.92.362 1.973.573 3.252.632C9.392 23.987 9.797 24 12 24s2.608-.013 3.888-.072c1.279-.059 2.332-.27 3.252-.632a6.922 6.922 0 0 0 2.515-1.64 6.922 6.922 0 0 0 1.64-2.515c.362-.92.573-1.973.632-3.252.059-1.28.072-1.685.072-3.888s-.013-2.608-.072-3.888c-.059-1.279-.27-2.332-.632-3.252a6.922 6.922 0 0 0-1.64-2.515 6.922 6.922 0 0 0-2.515-1.64c-.92-.362-1.973-.573-3.252-.632C14.608.013 14.203 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z"/>
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
  ];

  return (
    <footer className="bg-gradient-to-t from-white via-slate-50 to-white text-slate-900 relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      <div className="container relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-display mb-2">Infinitewaysbyrashmi</h3>
            <p className="text-slate-600 mb-6">by Dr. Rashmi Bohra</p>
            <p className="text-slate-500 mb-6 max-w-md">
              Transform your energy and life through quantum physics-based healing modalities. Experience profound healing with an Energy Transformational Coach and Transpersonal Counsellor.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100/20 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
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
                <Link href="/" className="text-slate-500 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-500 hover:text-primary-500 transition-colors">
                  About Dr. Rashmi
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-500 hover:text-primary-500 transition-colors">
                  Healing Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-500 hover:text-primary-500 transition-colors">
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
                <Link href="/services" className="text-slate-500 hover:text-primary-500 transition-colors">
                  Tarot Guidance
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-500 hover:text-primary-500 transition-colors">
                  Intuitive Energy Healing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-500 hover:text-primary-500 transition-colors">
                  Sound Bath Meditations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-500 hover:text-primary-500 transition-colors">
                  Manifestation Coaching
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Dr. Rashmi Bohra. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            infinitewaysbyrashmi.com
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}

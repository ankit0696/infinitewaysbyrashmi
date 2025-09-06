'use client'
import { useState } from 'react'

export default function ComingSoon() {
  const [email, setEmail] = useState('')


  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="container">
          <h1 className="brand-name">✨ Infinite Ways By Rashmi</h1>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="hero-section">
            <h2 className="hero-title">Coming Soon</h2>
            <p className="hero-tagline">Spirituality, Sound Healing & Manifestation</p>
            

          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>hello@Infinitewaysbyrashmi.com</p>
        </div>
      </footer>
    </div>
  )
}

'use client'
import { useState } from 'react'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setIsLoading(false)
    }, 1500)
  }

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
            
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="email-input"
                  required
                />
                <button 
                  type="submit" 
                  className="join-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Joining...' : 'Join the Journey'}
                </button>
              </div>
              
              {status === 'error' && (
                <p className="error-message">Please enter a valid email address.</p>
              )}
              
              {status === 'success' && (
                <p className="success-message">Thank you! We'll notify you when we launch.</p>
              )}
            </form>
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

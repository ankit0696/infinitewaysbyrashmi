'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const services = [
    'Sound Healing Sessions',
    'Access Consciousness Bars',
    'Distance Energy Healing', 
    'DNA Repair & Activation',
    'Tarot & Astrology Readings',
    'Group Healing Sessions',
    'Free Consultation'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setSubmitMessage('Thank you for your inquiry! Dr. Rashmi will personally respond to you within 24 hours. We look forward to supporting your transformation journey.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setIsSubmitting(false)

    // Clear message after 8 seconds
    setTimeout(() => setSubmitMessage(''), 8000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Page Header */}
        <section className="gradient-cream-peach py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide mb-8">
              Get in Touch
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Begin Your Transformation Journey
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your life? Book a free consultation, ask questions, or learn more 
              about how our healing services can support your unique journey.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 hover:bg-white hover:shadow-lg p-8 rounded-3xl text-center transition-all duration-300 border border-gray-100">
                <div className="text-5xl mb-6">📧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Dr. Rashmi</h3>
                <p className="text-gray-600 mb-4">Get a personal response within 24 hours</p>
                <a 
                  href="mailto:hello@infinitewaysbyrashmi.com" 
                  className="text-red-800 hover:text-red-600 font-semibold transition-colors duration-200"
                >
                  hello@infinitewaysbyrashmi.com
                </a>
              </div>
              <div className="bg-gray-50 hover:bg-white hover:shadow-lg p-8 rounded-3xl text-center transition-all duration-300 border border-gray-100">
                <div className="text-5xl mb-6">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">WhatsApp & Call</h3>
                <p className="text-gray-600 mb-4">Direct line for urgent inquiries</p>
                <a 
                  href="tel:+919876543210" 
                  className="text-red-800 hover:text-red-600 font-semibold transition-colors duration-200"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="bg-gray-50 hover:bg-white hover:shadow-lg p-8 rounded-3xl text-center transition-all duration-300 border border-gray-100">
                <div className="text-5xl mb-6">📍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Location</h3>
                <p className="text-gray-600 mb-4">In-person sessions available</p>
                <span className="text-red-800 font-semibold">
                  Mumbai, Maharashtra, India
                </span>
              </div>
              <div className="bg-gray-50 hover:bg-white hover:shadow-lg p-8 rounded-3xl text-center transition-all duration-300 border border-gray-100">
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Distance Healing</h3>
                <p className="text-gray-600 mb-4">Available worldwide via video call</p>
                <span className="text-red-800 font-semibold">
                  Global Remote Sessions
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-brand p-8 lg:p-12">
                  <div className="mb-10">
                    <h2 className="font-display text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                      Send Your Message
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Fill out the form below and Dr. Rashmi will personally respond to you. 
                      All consultations begin with understanding your unique needs.
                    </p>
                  </div>

                  {submitMessage && (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl mb-8">
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-3">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select a service...</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-3">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 resize-vertical"
                        placeholder="Tell Dr. Rashmi about your current challenges, what you're hoping to achieve, or any specific questions you have about the healing process..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className={`w-full bg-yellow-400 hover:bg-red-800 hover:text-white text-gray-900 px-8 py-5 rounded-full font-semibold text-lg transition-all duration-200 btn-hover-lift border-2 border-yellow-400 hover:border-red-800 ${isSubmitting ? 'btn-loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Your Message...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Dr. Rashmi?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">🎓</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">PhD Qualified</h4>
                        <p className="text-sm text-gray-600">Scientific approach to spiritual healing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">🌟</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">6+ Years Experience</h4>
                        <p className="text-sm text-gray-600">Proven track record of transformation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">❤️</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">500+ Lives Changed</h4>
                        <p className="text-sm text-gray-600">Real results, real transformation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">🔮</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Authentic Clairvoyance</h4>
                        <p className="text-sm text-gray-600">Natural psychic abilities since childhood</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Dr. Rashmi</h3>
                  <p className="text-gray-600 mb-6">Stay connected and get daily inspiration on your healing journey.</p>
                  <div className="space-y-3">
                    <a 
                      href="https://www.instagram.com/infinitewaysbyrashmi" 
                      className="flex items-center gap-3 text-gray-700 hover:text-red-800 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span className="text-xl">📷</span>
                      <span className="font-medium">Instagram</span>
                    </a>
                    <a 
                      href="https://www.facebook.com/infinitwaysbyrashmi" 
                      className="flex items-center gap-3 text-gray-700 hover:text-red-800 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span className="text-xl">📘</span>
                      <span className="font-medium">Facebook</span>
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Session Information</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-900">Free Consultation:</span>
                      <span className="text-gray-600 text-sm text-right">15 minutes via phone/video</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-900">Session Duration:</span>
                      <span className="text-gray-600 text-sm text-right">45-90 minutes depending on service</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-900">Availability:</span>
                      <span className="text-gray-600 text-sm text-right">Monday-Saturday, 10 AM - 7 PM IST</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-900">Response Time:</span>
                      <span className="text-gray-600 text-sm text-right">Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about healing sessions and the transformation process.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How do I know which service is right for me?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  During our free 15-minute consultation, Dr. Rashmi will assess your needs and 
                  recommend the most suitable healing modality for your current situation and goals.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Do distance healing sessions really work?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! Quantum healing transcends physical space. Many clients report profound shifts 
                  from distance sessions. Dr. Rashmi's clairvoyant abilities allow her to connect 
                  energetically regardless of location.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How many sessions will I need?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This varies greatly depending on your goals and current state. Some clients see 
                  significant shifts after one session, while others benefit from a series of 3-6 
                  sessions. Dr. Rashmi will discuss this during your consultation.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What should I expect during my first session?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your first session begins with a detailed discussion of your needs and goals. 
                  The healing process is gentle and relaxing, with most clients experiencing deep 
                  peace and often profound insights.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

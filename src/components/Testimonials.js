'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    text: "Dr. Rashmi's sessions completely transformed my perspective on life. Her unique approach combining spirituality with her professional background creates powerful healing experiences.",
    author: "Sarah M.",
    rating: 5,
    service: "Energy Healing"
  },
  {
    text: "The DNA activation session was incredible. I felt shifts immediately and continue to experience positive changes in my energy and overall well-being.",
    author: "Michael R.",
    rating: 5,
    service: "DNA Activation"
  },
  {
    text: "Her tarot readings are remarkably accurate and insightful. Dr. Rashmi helped me gain clarity on important life decisions with compassion and wisdom.",
    author: "Priya K.",
    rating: 5,
    service: "Tarot Reading"
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Soft glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-secondary-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
            Client Stories
          </div>
          <h2 className="heading-2 mb-6">Transformations Speak for Themselves</h2>
          <p className="body-large text-brand-light">
            Real experiences from people who embraced healing, clarity, and spiritual growth.
          </p>
        </div>

        {/* Slider */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100)
                  setIndex((index + 1) % testimonials.length)
                if (info.offset.x > 100)
                  setIndex((index - 1 + testimonials.length) % testimonials.length)
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200/60 dark:border-white/10 p-10 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </motion.svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="body-text text-brand-light italic mb-8 leading-relaxed">
                “{testimonials[index].text}”
              </blockquote>

              {/* Author */}
              <div className="border-t border-slate-200/60 dark:border-white/10 pt-4">
                <div className="font-semibold text-brand">{testimonials[index].author}</div>
                <div className="text-sm text-brand-lighter">
                  {testimonials[index].service}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index
                    ? 'bg-secondary-500 scale-125'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

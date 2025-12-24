'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#FAFBFD]">
      {/* Soft background accents */}
      <div className="absolute -top-32 left-1/4 w-[40rem] h-[40rem] bg-primary-300/20 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 right-1/4 w-[36rem] h-[36rem] bg-secondary-300/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 w-[32rem] h-[32rem] bg-accent-300/15 rounded-full blur-[120px]" />

      {/* Floating light particles */}
      <LightOrb className="top-1/4 left-[12%]" delay={0} />
      <LightOrb className="top-1/2 right-[14%]" delay={2} />
      <LightOrb className="bottom-1/4 left-[22%]" delay={4} />

      <div className="relative container z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 border border-slate-200 text-slate-700 text-sm mb-8 backdrop-blur-sm shadow-sm"
          >
            ✨ Gentle Energy Healing
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6"
          >
            Come Back to
            <br />
            <span className="text-primary-600">Balance & Inner Calm</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed mb-14"
          >
            These sessions are a quiet space to soften, release emotional weight,
            and gently realign your energy — so life begins to feel lighter and clearer again.
          </motion.p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Link
                href="/contact"
                className="relative group inline-flex items-center justify-center px-10 py-5 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-primary-500 to-accent-400 shadow-xl"
              >
                <span className="relative z-10">Book a Healing Session</span>

                {/* soft glow */}
                <span className="absolute inset-0 rounded-full bg-white/40 opacity-0 group-hover:opacity-100 transition" />
              </Link>
            </motion.div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-slate-300 text-slate-700 text-lg hover:bg-slate-100 transition"
            >
              Explore Healing Work
            </Link>
          </div>

          {/* Trust cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <TrustItem emoji="🌿" title="Safe & Supportive" subtitle="Held with compassion" />
            <TrustItem emoji="✨" title="Personal & Intuitive" subtitle="No fixed templates" />
            <TrustItem emoji="💫" title="Deeply Trusted" subtitle="5000+ lives impacted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Components ---------- */

function TrustItem({ emoji, title, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="flex items-center gap-4 bg-white/80 border border-slate-200 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition"
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-primary-100">
        {emoji}
      </div>
      <div className="text-left">
        <div className="text-slate-900 font-medium">{title}</div>
        <div className="text-sm text-slate-600">{subtitle}</div>
      </div>
    </motion.div>
  )
}

function LightOrb({ className, delay }) {
  return (
    <motion.div
      className={`absolute w-2.5 h-2.5 rounded-full bg-primary-400/60 blur-sm ${className}`}
      animate={{ y: [0, -18, 0], opacity: [0.3, 0.6, 0.3] }}
      transition={{
        duration: 7,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  )
}

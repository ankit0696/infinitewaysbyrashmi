'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export default function ServicesPreview() {
  const services = [
    {
      name: 'Tarot & Intuitive Guidance',
      description:
        'A reflective, intuitive space to gain clarity, insight, and direction. Tarot is used as a mirror—helping you understand current energies, patterns, and aligned next steps.',
      image: '/images/tarot-guidance.jpg',
      accent: 'from-primary-400 to-primary-600',
    },
    {
      name: 'Sound Healing & Meditative Journeys',
      description:
        'Gentle sound baths using healing frequencies to calm the nervous system, release emotional tension, and restore inner balance—allowing deep rest and energetic reset.',
      image: '/images/sound-bathing.jpg',
      accent: 'from-rose-300 to-warm-coral',
    },
    {
      name: 'Manifestation & Energy Alignment',
      description:
        'Personalised sessions to dissolve inner blocks, shift limiting beliefs, and align your energy with your intentions—supporting conscious creation from a grounded, soulful place.',
      image: '/images/manifestation-coaching.jpg',
      accent: 'from-accent-400 to-accent-600',
    },
  ]

  return (
    <section className="relative section-padding bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* ambient background */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-400/5 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-secondary-500 mb-4">
            Ways to Work Together
          </p>
          <h2 className="heading-2 mb-6">Healing Services</h2>
          <p className="body-large text-brand-light">
            Each offering is intuitive, personalised, and guided with care — supporting
            emotional release, energetic alignment, and inner clarity.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] overflow-hidden"
            >
              {/* Accent gradient */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`}
              />

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <h3 className="heading-3 text-slate-900 group-hover:text-secondary transition-colors">
                    {service.name}
                  </h3>
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-secondary"
                  >
                    →
                  </motion.span>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-secondary font-medium text-sm group/link mt-auto"
                >
                  Learn more
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </div>

              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-secondary-400/0 group-hover:ring-secondary-400/30 transition" />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-r from-primary-100 via-secondary-100 to-accent-100 border border-primary-300/30 p-12 text-center"
        >
          <h3 className="heading-3 mb-4 text-slate-900">
            Ready to Begin Your Healing Journey?
          </h3>
          <p className="text-brand-light max-w-2xl mx-auto mb-8">
            Sessions are intuitively guided and shaped around your needs.
            If you feel called, let’s explore how we can work together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Book a Session
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabaseClient'
import { fallbackBlogs } from '@/lib/fallbackBlogs'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function BlogPreview() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    const { data } = await supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(3)

    const hasData = data && data.length > 0
    setBlogs(hasData ? data : fallbackBlogs.slice(0, 3))
    setLoading(false)
  }

  return (
    <section className="relative section-padding bg-gradient-to-b from-[#fafafa] via-white to-[#f9f9f9]">
      {/* subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f1f5f9,_transparent_70%)] pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-secondary-500 mb-4">
            Latest Insights
          </p>
          <h2 className="heading-2 mb-6">From the Heart</h2>
          <p className="body-large text-muted mb-8">
            Reflections on energy, healing, awareness, and conscious living.
          </p>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-secondary font-semibold group"
          >
            View All Articles
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        {/* States */}
        {loading ? (
          <div className="text-center py-20 text-muted">Loading latest posts…</div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 text-muted">
            No blog posts available yet.
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {blogs.map((blog) => {
              const coverImage = blog.image_url || '/images/hero-image.jpg'

              return (
                <motion.div key={blog.id} variants={cardVariants}>
                  <Link href={`/blogs/${blog.slug}`} className="group block h-full">
                    <article className="relative h-full overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]">
                      
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={coverImage}
                          alt={blog.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        <span className="absolute bottom-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                          {blog.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-slate-900 leading-snug line-clamp-2 group-hover:text-secondary transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {blog.excerpt}
                        </p>

                        <div className="mt-auto pt-4 flex items-center justify-between text-xs text-slate-500">
                          <span>
                            {new Date(blog.created_at).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1 font-semibold text-secondary">
                            Read
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}

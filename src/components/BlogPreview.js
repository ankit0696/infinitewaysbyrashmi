'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import { fallbackBlogs } from '@/lib/fallbackBlogs'

export default function BlogPreview() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    const { data, error } = await supabase
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
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-6 mb-16">
          <div className="flex-1 min-w-64">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-secondary-500 mb-2">Latest Stories</p>
            <h2 className="heading-2 mb-4">From the Heart</h2>
            <p className="body-large text-brand-light max-w-2xl">
              Reflections on energy, growth, manifestation, and living with intention.
            </p>
          </div>
          <div>
            <Link href="/blogs" className="btn btn-secondary whitespace-nowrap">View All Articles</Link>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-16 text-muted">Loading latest posts...</div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-16 text-muted">
            No blog posts available yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => {
              const coverImage = blog.image_url || '/images/hero-image.jpg'
              return (
                <Link key={blog.id} href={`/blogs/${blog.slug}`}>
                  <article className="group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ring-1 ring-slate-200/50 dark:ring-white/10">
                    <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
                      <img
                        src={coverImage}
                        alt={blog.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wide">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow gap-4">
                      <h3 className="heading-3 text-slate-900 dark:text-white line-clamp-2 group-hover:text-secondary transition-colors">
                        {blog.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {new Date(blog.created_at).toLocaleDateString()}
                        </span>
                        <span className="text-secondary font-semibold text-sm group-hover:translate-x-1 transition-transform">Read →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

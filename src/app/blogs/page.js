'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'

export default function BlogPage() {
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

    if (data) {
      setBlogs(data)
    }
    setLoading(false)
  }

  return (
    <>
      <Navigation />
      <main className="bg-surface min-h-screen">
        {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">Connect with Dr. Rashmi</h1>
            <p className="body-large">
            
            </p>
          </div>
        </div>
      </section>
        <section className="section-padding gradient-bg">
          <div className="container text-center max-w-3xl mx-auto">
            <h1 className="heading-1 mb-6 text-white">Insights for Your Transformation</h1>
            <p className="body-large text-white/80">
              Explore articles on energy healing, quantum consciousness, and spiritual growth
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding">
          <div className="container">
            {loading ? (
              <div className="text-center py-12">Loading blogs...</div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-12 text-muted">
                No blog posts available yet.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <Link key={blog.id} href={`/blog/${blog.slug}`}>
                    <article className="card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
                      <div className="w-full h-48 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-6xl font-bold">
                          📖
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                            {blog.category}
                          </span>
                          <span className="text-xs text-muted">5 min</span>
                        </div>
                        
                        <h3 className="heading-3 mb-3 text-primary line-clamp-2">
                          {blog.title}
                        </h3>
                        
                        <p className="body-text text-muted mb-4 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted">
                            {new Date(blog.created_at).toLocaleDateString()}
                          </span>
                          <span className="text-secondary font-semibold hover:text-primary transition">Read →</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

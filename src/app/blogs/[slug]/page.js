'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BlogPostPage({ params }) {
  const { slug } = params
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      fetchBlog()
    }
  }, [slug])

  const fetchBlog = async () => {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .single()

    if (data) {
      setBlog(data)
    }
    setLoading(false)
  }

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (!blog) {
    return (
      <>
        <Navigation />
        <main className="section-padding text-center">
          <h1 className="heading-2">Blog post not found</h1>
          <p className="body-text my-4">Sorry, we couldn&apos;t find that blog post.</p>
          <Link href="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="bg-surface">
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary via-secondary to-accent" />
        
        <div className="container -mt-32 md:-mt-48">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12 mb-12">
              <div className="text-center mb-8">
                <Link href="/blog" className="text-secondary font-semibold hover:text-primary transition">
                  &larr; Back to all articles
                </Link>
                <h1 className="heading-1 mt-4 mb-4">{blog.title}</h1>
                <div className="flex items-center justify-center space-x-4 text-muted">
                  <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                  <span>&bull;</span>
                  <span className="uppercase text-xs font-semibold tracking-wider">{blog.category}</span>
                </div>
              </div>

              {/* You would render your blog content here. 
                  For now, we'll just show the excerpt. 
                  A real implementation would use a Markdown renderer for the blog body. */}
              <div className="prose lg:prose-xl max-w-none mx-auto text-brand-light">
                <p className="lead">{blog.excerpt}</p>
                <p>
                  This is where the full content of the blog post would go. For this example, we are only showing the excerpt. 
                  To implement the full blog, you would typically fetch the full content (e.g., in Markdown format) and render it here.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

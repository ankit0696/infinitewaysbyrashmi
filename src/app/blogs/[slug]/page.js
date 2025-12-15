'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { fallbackBlogs } from '@/lib/fallbackBlogs'

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
    } else {
      const localFallback = fallbackBlogs.find((entry) => entry.slug === slug)
      setBlog(localFallback || null)
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
          <Link href="/blogs" className="btn btn-primary">
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
        {(() => {
          const coverImage = blog?.image_url || '/images/hero-image.jpg'
          return (
            <div
              className="relative z-0 h-80 md:h-[420px] w-full overflow-hidden"
              aria-hidden
            >
              <img
                src={coverImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/70" />
              <div className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 lg:px-16">
                <div className="max-w-5xl text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                  <p className="uppercase tracking-[0.25em] text-xs font-semibold text-white/70">{blog.category}</p>
                  <h1 className="heading-1 mt-3 mb-3 text-white">{blog.title}</h1>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <time dateTime={blog.created_at}>{new Date(blog.created_at).toLocaleDateString()}</time>
                    <span>&bull;</span>
                    <Link href="/blogs" className="underline underline-offset-4 decoration-white/50 hover:decoration-white">
                      Back to all articles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}

        <div className="container relative z-10 pt-12 md:pt-16 pb-20">
          <div className="max-w-5xl mx-auto">
            <article className="rounded-3xl bg-white shadow-3xl ring-1 ring-slate-200/80 dark:bg-slate-900 dark:ring-white/10 overflow-hidden">
              <div className="px-6 py-6 sm:px-10 sm:py-10">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary-100 px-3 py-1 text-secondary-800 font-semibold">
                    {blog.category}
                  </span>
                  <span className="text-slate-500">{new Date(blog.created_at).toLocaleDateString()}</span>
                </div>

                <div className="prose prose-lg lg:prose-xl max-w-none text-slate-800 prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-slate-700 dark:text-slate-100 dark:prose-headings:text-white">
                  {Array.isArray(blog.content) && blog.content.length > 0 ? (
                    blog.content.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className={`${idx === 0 ? 'text-xl' : 'text-lg'} leading-relaxed text-slate-800 dark:text-slate-50 mb-6 last:mb-0`}
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-xl leading-relaxed mb-6">{blog.excerpt}</p>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

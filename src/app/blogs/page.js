'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import { fallbackBlogs } from '@/lib/fallbackBlogs'

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

    const hasData = data && data.length > 0
    setBlogs(hasData ? data : fallbackBlogs)
    setLoading(false)
  }

  return (
    <>
      <Navigation />
      <section
        className="relative overflow-hidden bg-surface"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/60" />
        <div className="relative container py-24 sm:py-28 text-center">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-gray-900">The Infinite Ways Blog</p>
          <h1 className="heading-1 mt-4 mb-6 text-gray-900">Stories, Insights, and Energy Shifts</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Gentle, heart-led essays on manifestation, energy work, and everyday moments that remind us magic is near.
          </p>
        </div>
      </section>

      <main className='bg-surface'>
        <div className='bg-white dark:bg-gray-900'>
          <div className='mx-auto max-w-6xl px-6 lg:px-10 py-16 lg:py-20'>
            <div className='flex items-center justify-between flex-wrap gap-4'>
              <div>
                <p className='text-sm uppercase tracking-[0.25em] text-secondary-500'>Latest reflections</p>
                <h2 className='heading-2 mt-2'>Freshly poured stories</h2>
              </div>
              <Link href='/contact' className='btn btn-secondary'>Work With Me</Link>
            </div>

            {loading ? (
              <div className='text-center py-20 text-muted'>Loading articles...</div>
            ) : blogs.length === 0 ? (
              <div className='text-center py-20 text-muted'>No articles available yet.</div>
            ) : (
              <div className='grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3'>
                {blogs.map((post) => {
                  const cover = post.image_url || '/images/hero-image.jpg'
                  return (
                    <article
                      key={post.id}
                      className='group overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-2'
                    >
                      <div className='relative h-56 w-full overflow-hidden'>
                        <img
                          src={cover}
                          alt={post.title}
                          className='absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10' />
                        <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-white/80'>
                          <span className='px-3 py-1 rounded-full bg-white/10 backdrop-blur'>{post.category}</span>
                          <time dateTime={post.created_at}>{new Date(post.created_at).toLocaleDateString()}</time>
                        </div>
                      </div>

                      <div className='p-7 flex flex-col gap-4'>
                        <h3 className='heading-3 text-white leading-tight group-hover:text-secondary transition-colors duration-200'>
                          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className='text-white/80 leading-relaxed line-clamp-3'>{post.excerpt}</p>
                        <div className='flex items-center justify-between pt-2 text-secondary font-semibold'>
                          <Link href={`/blogs/${post.slug}`} className='inline-flex items-center gap-2'>
                            Read story
                            <span aria-hidden='true'>→</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getPublishedBlogs } from '@/data/blogPosts'

export default function BlogPage() {
  const posts = getPublishedBlogs()

  return (
    <>
      <Navigation />


      <section className="section-padding gradient-bg">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">From My Heart to Yours: The Infinite Ways Blog</h1>
            <p className="body-large">
              Dive into articles where I share insights, techniques, and stories about energy healing,
              personal transformation, and holistic well-being.
            </p>
          </div>
        </div>
      </section>
      <main className='bg-surface'>
        <div className='bg-white py-12 sm:py-18'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
              {posts.map((post) => (
                <Link key={post.id} href={`/blogs/${post.slug}`}>
                  <article
                    className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80 cursor-pointer hover:scale-105 transition-transform duration-300'
                  >
                    <img
                      alt={post.title}
                      src={post.imageUrl}
                      className='absolute inset-0 -z-10 size-full object-cover'
                    />
                    <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
                    <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />

                    <div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300'>
                      <time dateTime={post.datetime} className='mr-8'>
                        {post.date}
                      </time>
                      <div className='-ml-4 flex items-center gap-x-4'>
                        <svg
                          viewBox='0 0 2 2'
                          className='-ml-0.5 size-0.5 flex-none fill-white/50'
                        >
                          <circle r={1} cx={1} cy={1} />
                        </svg>
                        <div className='flex gap-x-2.5'>
                          <img
                            alt={post.author.name}
                            src={post.author.imageUrl}
                            className='size-6 flex-none rounded-full bg-white/10'
                          />
                          {post.author.name}
                        </div>
                      </div>
                    </div>
                    <h3 className='mt-3 text-lg/6 font-semibold text-white'>
                      <span className='absolute inset-0' />
                      {post.title}
                    </h3>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

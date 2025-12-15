'use client'

import Link from 'next/link'
import { getRecentBlogs } from '@/data/blogPosts'

export default function BlogPreview() {
  const blogs = getRecentBlogs(3)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
            From the Blog
          </div>
          <h2 className="heading-2 mb-6">Insights for Your Journey</h2>
          <p className="body-large text-brand-light">
            Explore articles on energy healing, quantum consciousness, and spiritual growth.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-12 text-muted">
            No blog posts available yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.slug}`}>
                <article className="card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 h-full flex flex-col">
                  <div className="w-full h-48 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-6xl font-bold">
                      📖
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                        {blog.category}
                      </span>
                    </div>
                    
                    <h3 className="heading-3 mb-3 text-primary line-clamp-2 flex-grow">
                      {blog.title}
                    </h3>
                    
                    <p className="body-text text-muted mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
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

        <div className="text-center">
          <Link href="/blogs" className="btn btn-primary">
            Explore All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

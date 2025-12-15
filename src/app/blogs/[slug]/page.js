import { getBlogBySlug } from '@/data/blogPosts'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

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
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary via-secondary to-accent" />
        
        <div className="container -mt-32 md:-mt-48">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12 mb-12">
              <div className="text-center mb-8">
                <Link href="/blogs" className="text-secondary font-semibold hover:text-primary transition">
                  &larr; Back to all articles
                </Link>
                <h1 className="heading-1 mt-4 mb-4">{blog.title}</h1>
                <div className="flex items-center justify-center space-x-4 text-muted">
                  <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                  <span>&bull;</span>
                  <span className="uppercase text-xs font-semibold tracking-wider">{blog.category}</span>
                </div>
              </div>

              <div className="prose lg:prose-xl max-w-none mx-auto">
                <p className="text-xl text-gray-600 mb-8 italic">{blog.excerpt}</p>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {blog.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

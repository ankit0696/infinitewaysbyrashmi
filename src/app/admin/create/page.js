'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

export default function CreateBlogPage() {
  const { isAdmin, loading } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Healing',
    published: false,
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  if (!loading && !isAdmin) {
    router.push('/admin/login')
    return null
  }

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'title' && { slug: generateSlug(value) })
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    if (!formData.title || !formData.content) {
      setError('Title and content are required')
      setSaving(false)
      return
    }

    const { data, error } = await supabase
      .from('blogs')
      .insert([
        {
          ...formData,
          slug: formData.slug || generateSlug(formData.title),
        }
      ])
      .select()

    if (error) {
      setError(error.message)
    } else {
      router.push('/admin/dashboard')
    }

    setSaving(false)
  }

  return (
    <main className="min-h-screen bg-surface pt-24 pb-12">
      <div className="container max-w-3xl">
        <Link href="/admin/dashboard" className="text-secondary font-semibold mb-8 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="card p-8 shadow-lg">
          <h1 className="heading-2 mb-8 text-primary">Create New Blog Post</h1>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog post title..."
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">URL Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="auto-generated..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-50"
              />
              <p className="text-xs text-muted mt-1">Auto-generated from title</p>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Excerpt</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Brief summary of the blog post..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option>Healing</option>
                <option>Mindfulness</option>
                <option>Sound Therapy</option>
                <option>Intuition</option>
                <option>Energy</option>
              </select>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Content *</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your blog post content in HTML or plain text..."
                required
                rows={15}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary font-mono text-sm"
              />
              <p className="text-xs text-muted mt-1">Supports HTML tags</p>
            </div>

            {/* Published Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="w-5 h-5 border-gray-300 rounded focus:ring-2 focus:ring-secondary"
              />
              <label className="font-semibold text-primary">Publish immediately</label>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t">
              <button
                type="submit"
                disabled={saving}
                className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Blog Post'}
              </button>
              <Link
                href="/admin/dashboard"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

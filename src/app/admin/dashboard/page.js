'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

export default function AdminDashboard() {
  const { user, isAdmin, loading, logout } = useAuth()
  const router = useRouter()
  const [blogs, setBlogs] = useState([])
  const [blogsLoading, setBlogsLoading] = useState(true)

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push('/admin/login')
    }
  }, [loading, isAdmin, router])

  useEffect(() => {
    if (isAdmin) {
      fetchBlogs()
    }
  }, [isAdmin])

  const fetchBlogs = async () => {
    setBlogsLoading(true)
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setBlogs(data)
    }
    setBlogsLoading(false)
  }

  const handleLogout = async () => {
    await logout()
    router.push('/admin/login')
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id)

      if (!error) {
        setBlogs(blogs.filter(b => b.id !== id))
      }
    }
  }

  if (loading) {
    return <div className="pt-24 text-center">Loading...</div>
  }

  if (!isAdmin) {
    return null
  }

  return (
    <main className="min-h-screen bg-surface pt-24 pb-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="heading-1 text-primary">Blog Dashboard</h1>
            <p className="text-muted mt-2">Logged in as: {user?.email}</p>
          </div>
          <div className="space-x-4">
            <Link 
              href="/admin/create" 
              className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block"
            >
              + Create Blog
            </Link>
            <button
              onClick={handleLogout}
              className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Blogs Table */}
        <div className="card shadow-lg overflow-hidden">
          {blogsLoading ? (
            <div className="p-8 text-center text-muted">Loading blogs...</div>
          ) : blogs.length === 0 ? (
            <div className="p-8 text-center text-muted">
              No blogs yet. <Link href="/admin/create" className="text-secondary font-semibold">Create one</Link>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-primary">Title</th>
                  <th className="text-left px-6 py-4 font-semibold text-primary">Category</th>
                  <th className="text-left px-6 py-4 font-semibold text-primary">Status</th>
                  <th className="text-left px-6 py-4 font-semibold text-primary">Date</th>
                  <th className="text-left px-6 py-4 font-semibold text-primary">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">{blog.title}</td>
                    <td className="px-6 py-4 text-muted">{blog.category}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        blog.published 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {blog.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted text-sm">
                      {new Date(blog.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 space-x-3">
                      <Link 
                        href={`/admin/edit/${blog.id}`}
                        className="text-secondary font-semibold hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="text-red-600 font-semibold hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  )
}

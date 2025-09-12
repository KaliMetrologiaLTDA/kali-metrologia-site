import React, { useEffect, useState } from "react"
import matter from "gray-matter"
import { allPosts } from "../../.contentlayer/generated"


interface Post {
  id: string
  title: string
  summary: string
  date: string
  image: string
  content: string
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const context = import.meta.glob('../../content/blog/*.md', { as: 'raw' })
      const entries = Object.entries(context)

      const loadedPosts: Post[] = await Promise.all(
        entries.map(async ([path, resolver]) => {
          const raw = await resolver()
          const { data, content } = matter(raw)
          const id = path.split("/").pop()?.replace(".md", "") || ""
          return {
            id,
            title: data.title,
            summary: data.summary,
            date: data.date,
            image: data.image,
            content
          }
        })
      )

      loadedPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
      setPosts(loadedPosts)
    }

    fetchPosts()
  }, [])

  return (
    <section className="bg-[#EFF6FF] text-[#0F172A] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-[#1E40AF] mb-8">
          Blog Kali Metrologia
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#1E40AF]">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{post.summary}</p>
                <span className="text-xs text-gray-400 mt-1 block">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

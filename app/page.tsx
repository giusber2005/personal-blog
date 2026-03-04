import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { FeaturedPost } from "@/components/featured-post"
import { PostCard } from "@/components/post-card"
import { getAllPosts, getFeaturedPost } from "@/lib/posts"

export default function Home() {
  const featured = getFeaturedPost()
  const rest = getAllPosts().slice(1)

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6">
        <BlogHeader />

        <FeaturedPost {...featured} />

        <div className="border-t border-border">
          <h3 className="text-xs tracking-widest uppercase text-primary/70 pt-8">
            All Writing
          </h3>
          {rest.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>

        <BlogFooter />
      </main>
    </div>
  )
}

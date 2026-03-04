import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { PostCard } from "@/components/post-card"
import { FeaturedPost } from "@/components/featured-post"
import { getPostsByCategory, getAllCategories } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: category.toLowerCase(),
  }))
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const posts = getPostsByCategory(category)

  if (posts.length === 0) {
    notFound()
  }

  const displayName = posts[0].category
  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6">
        <BlogHeader />

        <section className="py-12 md:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-10 tracking-wide uppercase"
          >
            <ArrowLeft className="h-3 w-3" />
            All writing
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-pretty mb-2">
            {displayName}
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </p>

          <FeaturedPost {...featured} />

          {rest.length > 0 && (
            <div className="border-t border-border">
              {rest.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </section>

        <BlogFooter />
      </main>
    </div>
  )
}

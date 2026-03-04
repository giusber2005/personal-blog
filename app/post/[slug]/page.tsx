import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { getPostBySlug } from "@/lib/posts"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <main className="mx-auto max-w-2xl px-6">
          <BlogHeader />
          <div className="py-20">
            <h1 className="font-serif text-3xl text-foreground">Post not found</h1>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-4 inline-block"
            >
              Back to all writing
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6">
        <BlogHeader />

        <article className="py-12 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-10 tracking-wide uppercase"
          >
            <ArrowLeft className="h-3 w-3" />
            All writing
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="rounded-sm bg-accent px-2 py-0.5 text-xs tracking-widest uppercase text-primary">
              {post.category}
            </span>
            <span className="text-muted-foreground/40">{"/"}</span>
            <time className="text-xs text-muted-foreground" dateTime={post.date}>
              {post.date}
            </time>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-pretty mb-10">
            {post.title}
          </h1>

          <div className="flex flex-col gap-6">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <BlogFooter />
      </main>
    </div>
  )
}

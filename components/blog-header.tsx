import Link from "next/link"
import { getAllCategories } from "@/lib/posts"
import { TopicsDropdown } from "@/components/topics-dropdown"
import { AnimatedBlogTitle } from "@/components/animated-blog-title"

export function BlogHeader() {
  const categories = getAllCategories()

  return (
    <header className="flex items-center justify-between py-8 border-b border-border">
      <AnimatedBlogTitle />
      <nav className="flex items-center gap-8">
        <Link
          href="/"
          className="text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          Small Thoughts
        </Link>
        <TopicsDropdown categories={categories} />
        <Link
          href="/about"
          className="text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          About Me
        </Link>
      </nav>
    </header>
  )
}

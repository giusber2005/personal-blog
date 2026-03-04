import Link from "next/link"
import { getAllCategories } from "@/lib/posts"
import { TopicsDropdown } from "@/components/topics-dropdown"

export function BlogHeader() {
  const categories = getAllCategories()

  return (
    <header className="flex items-center justify-between py-8 border-b border-border">
      <Link href="/" className="text-foreground text-lg tracking-tight font-medium">
        Journal<span className="text-primary">.</span>
      </Link>
      <nav className="flex items-center gap-8">
        <Link
          href="/"
          className="text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          Writing
        </Link>
        <TopicsDropdown categories={categories} />
        <Link
          href="/about"
          className="text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          About
        </Link>
      </nav>
    </header>
  )
}

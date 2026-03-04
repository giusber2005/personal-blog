import Link from "next/link"

interface PostCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  category: string
}

export function PostCard({ title, excerpt, date, slug, category }: PostCardProps) {
  return (
    <article className="group">
      <Link href={`/post/${slug}`} className="block">
        <div className="flex flex-col gap-3 py-8 border-b border-border transition-colors">
          <div className="flex items-center gap-3">
            <span className="rounded-sm bg-accent/50 px-2 py-0.5 text-xs tracking-widest uppercase text-primary/80">
              {category}
            </span>
            <span className="text-muted-foreground/40">{"/"}</span>
            <time className="text-xs text-muted-foreground" dateTime={date}>
              {date}
            </time>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors leading-tight text-pretty">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            {excerpt}
          </p>
        </div>
      </Link>
    </article>
  )
}

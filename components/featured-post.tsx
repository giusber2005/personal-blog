import Link from "next/link"

interface FeaturedPostProps {
  title: string
  excerpt: string
  date: string
  slug: string
  category: string
}

export function FeaturedPost({ title, excerpt, date, slug, category }: FeaturedPostProps) {
  return (
    <article className="group py-12 md:py-20">
      <Link href={`/post/${slug}`} className="block">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-sm bg-accent px-2 py-0.5 text-xs tracking-widest uppercase text-primary">
              {category}
            </span>
            <span className="text-muted-foreground/40">{"/"}</span>
            <time className="text-xs text-muted-foreground" dateTime={date}>
              {date}
            </time>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground group-hover:text-primary transition-colors leading-tight text-pretty">
            {title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            {excerpt}
          </p>
          <span className="text-xs text-primary group-hover:text-foreground transition-colors mt-2 tracking-wide uppercase">
            Read more &rarr;
          </span>
        </div>
      </Link>
    </article>
  )
}

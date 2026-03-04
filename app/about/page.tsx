import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"

const contacts = [
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Stack Overflow", href: "https://stackoverflow.com" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6">
        <BlogHeader />

        <section className="py-12 md:py-20">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-pretty mb-10">
            About
          </h1>

          <div className="flex flex-col gap-6 mb-16">
            <p className="text-muted-foreground text-base leading-relaxed">
              I write about design, code, and the overlap between them. This journal is a place to think out loud — slowly, carefully, without the pressure of being finished.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              My work lives at the intersection of craft and clarity. I care about the decisions that are invisible when they are right, and obvious when they are wrong. Typography, whitespace, the weight of a word.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              I believe good work takes time. Not because it has to be slow, but because attention is not something you can rush.
            </p>
          </div>

          <div className="border-t border-border pt-10">
            <h2 className="text-xs tracking-widest uppercase text-primary/70 mb-6">
              Find me
            </h2>
            <div className="flex flex-col gap-3">
              {contacts.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>{label}</span>
                  <span className="text-xs text-muted-foreground/40 group-hover:text-primary transition-colors">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <BlogFooter />
      </main>
    </div>
  )
}

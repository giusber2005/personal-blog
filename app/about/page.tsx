import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { getAboutData } from "@/lib/about"
import { getAnalytics } from "@/lib/analytics"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import Image from "next/image"

export default function AboutPage() {
  const { bio, contacts } = getAboutData()
  const analytics = getAnalytics()

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6">
        <BlogHeader />

        <section className="py-12 md:py-20">
          <div className="mb-10 flex items-start gap-8">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border border-border">
              <Image
                src="/public/phantom.jpeg"
                alt="Avatar"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-pretty pt-2">
              About
            </h1>
          </div>

          <div className="flex flex-col gap-6 mb-16">
            {bio.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
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

          <div className="mt-16">
            <h2 className="text-xs tracking-widest uppercase text-primary/70 mb-4">
              Writing Stats
            </h2>
            <AnalyticsDashboard data={analytics} />
          </div>
        </section>

        <BlogFooter />
      </main>
    </div>
  )
}

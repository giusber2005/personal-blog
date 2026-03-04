const links = [
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Stack Overflow", href: "https://stackoverflow.com" },
  { label: "RSS", href: "/rss" },
]

export function BlogFooter() {
  return (
    <footer className="py-12 border-t border-border mt-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {"Built with intention and care."}
        </p>
        <div className="flex items-center gap-6 flex-wrap">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

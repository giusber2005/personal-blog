export function BlogFooter() {
  return (
    <footer className="py-12 border-t border-border mt-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {"Built with intention and care."}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="/rss"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  )
}

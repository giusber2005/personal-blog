"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function TopicsDropdown({ categories }: { categories: string[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 text-muted-foreground text-sm hover:text-primary transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Topics
        <ChevronDown className={`h-3 w-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full pt-2 z-50">
          <div className="bg-background border border-border rounded-md shadow-md py-1 min-w-[120px]">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/topic/${category.toLowerCase()}`}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                onClick={() => setOpen(false)}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

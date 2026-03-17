"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const ORIGINAL = "giusber2005blog"
const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&!?<>"

export function AnimatedBlogTitle() {
  const [display, setDisplay] = useState(ORIGINAL)
  const animating = useRef(false)
  const scheduled = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    function glitch() {
      if (animating.current) return
      animating.current = true

      let step = 0
      const totalSteps = ORIGINAL.length + 10

      const interval = setInterval(() => {
        setDisplay(
          ORIGINAL.split("")
            .map((char, i) => {
              if (i < step - 4) return ORIGINAL[i]
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join("")
        )
        step++
        if (step > totalSteps) {
          clearInterval(interval)
          setDisplay(ORIGINAL)
          animating.current = false
          schedule()
        }
      }, 50)
    }

    function schedule() {
      const delay = 3500 + Math.random() * 5000
      scheduled.current = setTimeout(glitch, delay)
    }

    scheduled.current = setTimeout(glitch, 1800)

    return () => {
      if (scheduled.current) clearTimeout(scheduled.current)
    }
  }, [])

  return (
    <Link
      href="/"
      className="text-foreground text-lg tracking-tight font-medium font-mono"
    >
      {display}
      <span className="text-primary">.</span>
    </Link>
  )
}

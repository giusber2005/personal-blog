"use client"

import { useEffect, useRef, useState } from "react"
import type { AnalyticsData } from "@/lib/analytics"

function useCounter(target: number, delay = 0, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (target === 0) {
        setValue(0)
        return
      }
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, delay)
    return () => clearTimeout(timeout)
  }, [target, delay, duration])

  return value
}

function StatRow({
  label,
  value,
  delay,
}: {
  label: string
  value: number
  delay: number
}) {
  const count = useCounter(value, delay)
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
        {label}
      </span>
      <span
        className="text-sm font-mono tabular-nums"
        style={{ color: "oklch(0.72 0.17 140)" }}
      >
        {count.toString().padStart(value > 9999 ? 6 : 4, "0")}
      </span>
    </div>
  )
}

function CategoryBar({
  name,
  count,
  max,
  delay,
}: {
  name: string
  count: number
  max: number
  delay: number
}) {
  const [width, setWidth] = useState(0)
  const barWidth = max > 0 ? Math.round((count / max) * 100) : 0

  useEffect(() => {
    const timer = setTimeout(() => setWidth(barWidth), delay)
    return () => clearTimeout(timer)
  }, [barWidth, delay])

  return (
    <div className="flex items-center gap-3 py-0.5">
      <span className="text-xs font-mono text-muted-foreground w-24 truncate uppercase tracking-wider">
        {name}
      </span>
      <div className="flex-1 h-1.5 bg-border overflow-hidden">
        <div
          className="h-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: "oklch(0.72 0.17 140)",
            boxShadow: "0 0 6px oklch(0.72 0.17 140 / 0.6)",
          }}
        />
      </div>
      <span
        className="text-xs font-mono tabular-nums w-4 text-right"
        style={{ color: "oklch(0.72 0.17 140)" }}
      >
        {count}
      </span>
    </div>
  )
}

const BOOT_LINES = (totalArticles: number) => [
  "> INITIALIZING BLOG_ANALYTICS v1.0.0",
  "> MOUNTING POST DATABASE...",
  `> ${totalArticles} RECORD(S) FOUND`,
  "> COMPUTING STATISTICS...",
  "> ALL SYSTEMS NOMINAL.",
]

export function AnalyticsDashboard({ data }: { data: AnalyticsData }) {
  const [booted, setBooted] = useState(false)
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [blink, setBlink] = useState(true)
  const bootLines = BOOT_LINES(data.totalArticles)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, bootLines[i]])
      i++
      if (i >= bootLines.length) {
        clearInterval(interval)
        setTimeout(() => setBooted(true), 400)
      }
    }, 220)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const blinkInterval = setInterval(
      () => setBlink((b) => !b),
      530
    )
    return () => clearInterval(blinkInterval)
  }, [])

  const maxCount = Math.max(...data.categoryCounts.map((c) => c.count), 1)

  return (
    <div
      className="my-12 border border-border font-mono"
      style={{
        background: "oklch(0.09 0.008 260)",
        boxShadow:
          "0 0 0 1px oklch(0.25 0.025 255), 0 0 30px oklch(0.62 0.1 250 / 0.08)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b border-border"
        style={{ background: "oklch(0.13 0.015 258)" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "oklch(0.65 0.2 30)" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "oklch(0.75 0.18 85)" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "oklch(0.72 0.17 140)" }}
            />
          </div>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "oklch(0.72 0.17 140)" }}
          >
            BLOG_ANALYTICS.exe
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "oklch(0.72 0.17 140)" }}
          />
          <span className="text-xs text-muted-foreground tracking-widest">
            LIVE
          </span>
        </div>
      </div>

      {/* Body */}
      {!booted ? (
        <div className="p-4 min-h-36 flex flex-col gap-1">
          {visibleLines.map((line, i) => (
            <p
              key={i}
              className="text-xs"
              style={{ color: "oklch(0.72 0.17 140)" }}
            >
              {line}
              {i === visibleLines.length - 1 && (
                <span
                  className="inline-block w-2 h-3 ml-0.5 align-middle"
                  style={{
                    background: blink
                      ? "oklch(0.72 0.17 140)"
                      : "transparent",
                  }}
                />
              )}
            </p>
          ))}
        </div>
      ) : (
        <div className="p-4 flex flex-col gap-0 animate-in fade-in duration-500">
          {/* Core stats */}
          <div className="pb-4 border-b border-border">
            <StatRow label="TOTAL_ARTICLES" value={data.totalArticles} delay={0} />
            <StatRow label="TOTAL_WORDS" value={data.totalWords} delay={100} />
            <StatRow label="AVG_WORDS/POST" value={data.avgWordsPerArticle} delay={200} />
          </div>

          {/* Category bars */}
          {data.categoryCounts.length > 0 && (
            <div className="py-4 border-b border-border">
              <p className="text-xs tracking-widest text-muted-foreground uppercase mb-3">
                BY_CATEGORY
              </p>
              <div className="flex flex-col gap-1.5">
                {data.categoryCounts.map((cat, i) => (
                  <CategoryBar
                    key={cat.name}
                    name={cat.name}
                    count={cat.count}
                    max={maxCount}
                    delay={300 + i * 80}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Date range */}
          <div className="pt-4 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                LATEST_POST
              </span>
              <span
                className="text-xs font-mono"
                style={{ color: "oklch(0.72 0.17 140)" }}
              >
                {data.mostRecentDate ?? "——"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                OLDEST_POST
              </span>
              <span
                className="text-xs font-mono"
                style={{ color: "oklch(0.72 0.17 140)" }}
              >
                {data.oldestDate ?? "——"}
              </span>
            </div>
          </div>

          {/* Footer prompt */}
          <div className="mt-4 pt-3 border-t border-border">
            <p className="text-xs font-mono text-muted-foreground/40">
              {">"}{" "}
              <span style={{ color: "oklch(0.72 0.17 140 / 0.5)" }}>
                auto-updates on article insert/delete
              </span>
              <span
                className="inline-block w-1.5 h-3 ml-0.5 align-middle"
                style={{
                  background: blink
                    ? "oklch(0.72 0.17 140 / 0.5)"
                    : "transparent",
                }}
              />
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

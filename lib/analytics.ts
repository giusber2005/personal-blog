import { getAllPosts, getAllCategories } from "@/lib/posts"

export type CategoryStat = {
  name: string
  count: number
}

export type AnalyticsData = {
  totalArticles: number
  totalWords: number
  avgWordsPerArticle: number
  categoryCounts: CategoryStat[]
  mostRecentDate: string | null
  oldestDate: string | null
}

export function getAnalytics(): AnalyticsData {
  const posts = getAllPosts()
  const categories = getAllCategories()

  const totalWords = posts.reduce(
    (sum, p) =>
      sum +
      p.content
        .join(" ")
        .split(/\s+/)
        .filter(Boolean).length,
    0
  )

  const categoryCounts: CategoryStat[] = categories.map((cat) => ({
    name: cat,
    count: posts.filter(
      (p) => p.category.toLowerCase() === cat.toLowerCase()
    ).length,
  }))

  return {
    totalArticles: posts.length,
    totalWords,
    avgWordsPerArticle:
      posts.length > 0 ? Math.round(totalWords / posts.length) : 0,
    categoryCounts,
    mostRecentDate: posts.length > 0 ? posts[0].date : null,
    oldestDate: posts.length > 0 ? posts[posts.length - 1].date : null,
  }
}

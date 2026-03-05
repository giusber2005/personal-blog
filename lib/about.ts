import fs from 'fs'
import path from 'path'

export type AboutData = {
  bio: string[]
  contacts: { label: string; href: string }[]
}

export function getAboutData(): AboutData {
  const filePath = path.join(process.cwd(), 'content/about.md')
  const raw = fs.readFileSync(filePath, 'utf-8')

  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) throw new Error('content/about.md is missing frontmatter')

  const contacts: { label: string; href: string }[] = []
  for (const line of match[1].split(/\r?\n/)) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const label = line.slice(0, colonIdx).trim()
    const href  = line.slice(colonIdx + 1).trim()
    if (label && href) contacts.push({ label, href })
  }

  const bio = match[2]
    .trim()
    .split(/\n{2,}/)
    .map(p => p.replace(/\n/g, ' ').trim())
    .filter(p => p.length > 0)

  return { bio, contacts }
}

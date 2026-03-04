export type Post = {
  title: string
  excerpt: string
  date: string
  slug: string
  category: string
  content: string[]
}

const posts: Post[] = [
  {
    title: "The Quiet Art of Paying Attention",
    excerpt:
      "In a world that rewards speed, the most radical act might be slowing down. On the value of deep observation in design and life.",
    date: "Feb 28, 2026",
    slug: "the-quiet-art-of-paying-attention",
    category: "Reflection",
    content: [
      "There is something deeply valuable about noticing things. Not in the superficial way we scroll through feeds, but in the deliberate way a craftsperson studies their material before making the first cut.",
      "In design, the best decisions often come from prolonged observation. Watching how people actually use a tool, not how we imagine they should. Sitting with a layout until its flaws reveal themselves naturally, rather than shipping the first thing that looks right.",
      "This is not about being slow for the sake of it. Speed has its place. But when we optimize exclusively for velocity, we lose something essential: the ability to see what is actually in front of us.",
      "The Japanese concept of 'ma' describes the pregnant pause, the space between things where meaning lives. In music, it is the rest between notes. In architecture, it is the emptiness that defines a room. In conversation, it is the silence that allows understanding to emerge.",
      "I have been trying to build more of this into my work. Not just in the final output, but in the process itself. Taking a walk before writing. Sleeping on a decision. Letting a design sit for a day before sharing it.",
      "The results are not always dramatic, but they are consistently better. Quieter. More considered. The kind of work that respects both the maker and the audience.",
    ],
  },
  {
    title: "Interfaces as Conversation",
    excerpt:
      "Good interfaces listen before they speak. Exploring the parallels between human dialogue and digital interaction patterns.",
    date: "Feb 14, 2026",
    slug: "interfaces-as-conversation",
    category: "Design",
    content: [
      "The best interfaces feel like a good conversation. They anticipate, they respond, they know when to be quiet. They do not lecture or demand. They simply make space for you to accomplish what you came to do.",
      "Think about the last time you used software that felt truly effortless. Chances are, it was not the most feature-rich option. It was the one that understood the rhythm of your intent and matched it.",
      "This is the difference between designing for features and designing for flow. Features are nouns. Flow is a verb. And users live in verbs.",
      "When we approach interface design as conversation, we start asking different questions. Instead of 'what should this button say?' we ask 'what does the person need to hear right now?' Instead of 'where should we put this feature?' we ask 'when would someone need this?'",
      "The shift is subtle but transformative. It moves us from building control panels to crafting experiences. From information architecture to emotional architecture.",
    ],
  },
  {
    title: "On Removing Things",
    excerpt:
      "Subtraction as a creative discipline. Why the best work often comes from what you choose to leave out.",
    date: "Jan 30, 2026",
    slug: "on-removing-things",
    category: "Craft",
    content: [
      "Addition is the instinct. When something is not working, we add. A new feature, a new option, a new layer of complexity. It feels productive. It feels like progress.",
      "But the most impactful changes I have made in my career have almost always been subtractions. Removing a step from a flow. Deleting a section from a page. Killing a feature that was not earning its place.",
      "Subtraction requires confidence that addition does not. To add is to hedge. To remove is to commit. It says: this is what matters, and nothing else.",
      "Antoine de Saint-Exupery understood this when he wrote that perfection is achieved not when there is nothing left to add, but when there is nothing left to take away. Designers quote this constantly, but few practice it with any rigor.",
      "The practice of removal is not about minimalism as an aesthetic. It is about clarity as a value. Every element that remains should be there for a reason, and that reason should be the person using the thing.",
    ],
  },
  {
    title: "Typography Sets the Mood",
    excerpt:
      "Before anyone reads a word, they feel the typeface. A meditation on how letterforms shape emotional tone in digital spaces.",
    date: "Jan 12, 2026",
    slug: "typography-sets-the-mood",
    category: "Design",
    content: [
      "Before a single word is read, typography has already spoken. The weight, the spacing, the serif or lack of one. These choices create an emotional context that frames everything that follows.",
      "This is why type selection is one of the most consequential decisions in any design project. It is also one of the most underestimated. We spend hours on color palettes and layout grids, then pick a typeface in five minutes.",
      "Good typography is invisible in the way that good air is invisible. You do not notice it, but you feel its effects. Bad typography is like bad air. Something feels off, even if you cannot name what.",
      "The relationship between a typeface and its content is intimate. A geometric sans-serif says something different than a humanist one. A high-contrast serif carries different emotional weight than a slab. These are not just aesthetic preferences. They are communication tools.",
      "In digital spaces, typography also carries functional weight. Line height affects comprehension. Letter spacing affects scanning speed. Font size affects hierarchy. Every typographic decision is simultaneously an aesthetic decision and a usability decision.",
    ],
  },
  {
    title: "Building in the Open",
    excerpt:
      "Sharing process over polish. What happens when you let people see the messy, iterative reality of creative work.",
    date: "Dec 28, 2025",
    slug: "building-in-the-open",
    category: "Process",
    content: [
      "There is a vulnerability to sharing work in progress. The rough edges are visible. The decisions are not yet defensible. The vision is not yet clear, even to you.",
      "But there is also a freedom in it. When you share early and often, you release yourself from the pressure of perfection. You invite collaboration instead of critique. You create a space where others can contribute, not just evaluate.",
      "I have found that building in the open changes the nature of the work itself. When I know something will be seen in its raw state, I focus differently. I think about foundations more than facades. I prioritize clarity over cleverness.",
      "The feedback is different too. People respond to process differently than they respond to product. They are more generous, more constructive, more engaged. They see themselves in the struggle and want to help.",
      "This is not about performative transparency. It is about genuine openness to the messy, non-linear reality of creative work. The dead ends, the pivots, the moments of doubt. These are not flaws in the process. They are the process.",
    ],
  },
]

export function getAllPosts(): Post[] {
  return posts
}

export function getFeaturedPost(): Post {
  return posts[0]
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

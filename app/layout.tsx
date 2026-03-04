import type { Metadata } from 'next'
import { Barriecito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _barriecito = Barriecito({ subsets: ["latin"], variable: "--font-barriecito", weight: "400" });

export const metadata: Metadata = {
  title: 'Journal',
  description: 'A minimal blog about design, code, and craft.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_barriecito.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

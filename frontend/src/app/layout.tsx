import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
export const metadata: Metadata = { title: 'NetworkAI · Project scaffold', description: 'Course-aligned Go and Next.js project in progress.' }
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}

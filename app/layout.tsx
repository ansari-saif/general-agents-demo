
import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'General Agents',
  description: 'General Agents is a research lab building general-purpose computer control agents.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

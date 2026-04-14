import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Money Printing Room - Trading Dashboard',
  description: 'Real-time trading dashboard for XAUUSD, GBPUSD, EURUSD and stocks with institutional strategies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>body>
    </html>html>
  )
}</html>














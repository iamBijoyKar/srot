import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider, SignedIn, SignedOut, SignIn } from '@clerk/nextjs'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Srot',
  description: 'Srot is a web application for managing your tasks.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

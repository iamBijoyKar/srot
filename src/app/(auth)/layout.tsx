import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './../globals.css'
import Header from '@/components/Auth/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-primary-bg `}>
          <Header />
          <main className="w-full h-full">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}

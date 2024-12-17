import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cemetery Management System',
  description: 'Modern cemetery plot and customer management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-8">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'HaruStudio Blog',
    template: '%s | HaruStudio Blog',
  },
  description: '自作キーボード、ガジェット、クリエイティブについて発信するブログ',
  keywords: ['自作キーボード', 'ガジェット', 'ZMK', 'キーボード', 'デザイン'],
  authors: [{ name: 'HaruStudio' }],
  creator: 'HaruStudio',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://harustudio.info',
    siteName: 'HaruStudio Blog',
    title: 'HaruStudio Blog',
    description: '自作キーボード、ガジェット、クリエイティブについて発信するブログ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HaruStudio Blog',
    description: '自作キーボード、ガジェット、クリエイティブについて発信するブログ',
    creator: '@haru_y98',
  },
  icons: {
    icon: [
      { url: '/logo/harustudio-icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo/harustudio-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

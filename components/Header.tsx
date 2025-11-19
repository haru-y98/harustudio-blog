'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-bg-secondary dark:border-dark-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-5 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {mounted && (
              <Image
                src="/logo/harustudio-logo-horizontal.svg"
                alt="HaruStudio"
                width={160}
                height={40}
                priority
                className="h-10 w-auto"
              />
            )}
            {!mounted && <div className="h-10 w-40" />}
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-brand transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-brand transition-colors"
            >
              About
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

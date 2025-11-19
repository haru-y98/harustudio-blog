import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-light-bg-secondary dark:border-dark-bg-secondary mt-20">
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-light-text/60 dark:text-dark-text/60">
              &copy; {currentYear} HaruStudio. All rights reserved.
            </p>
            <p className="text-xs text-light-text/40 dark:text-dark-text/40">
              自作キーボード・ガジェット・クリエイティブ
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm text-light-text/60 dark:text-dark-text/60 hover:text-brand transition-colors"
            >
              About
            </Link>
            <a
              href="https://twitter.com/haru_y98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text/60 dark:text-dark-text/60 hover:text-brand transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/haru-y98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text/60 dark:text-dark-text/60 hover:text-brand transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

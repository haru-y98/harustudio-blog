'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors"
        aria-label="テーマを切り替え"
      >
        <div className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary transition-colors"
      aria-label="テーマを切り替え"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-dark-text" />
      ) : (
        <Moon className="w-5 h-5 text-light-text" />
      )}
    </button>
  )
}

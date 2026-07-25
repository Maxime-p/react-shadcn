import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const themeStorageKey = 'theme'

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem(themeStorageKey)
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem(themeStorageKey, theme)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <Button
      aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      size="sm"
      variant="outline"
    >
      {isDark ? 'Light' : 'Dark'}
    </Button>
  )
}

export { ThemeToggle }

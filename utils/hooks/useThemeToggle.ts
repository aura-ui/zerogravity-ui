import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const useThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  const mode = resolvedTheme === 'dark' ? 'light' : 'dark'

  return { toggleTheme, mode }
}

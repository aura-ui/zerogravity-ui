import { useThemeToggle } from '../hooks/useThemeToggle'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IconButton } from '@/components/IconButton'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  const mode = resolvedTheme === 'dark' ? 'light' : 'dark'
  return (
    <IconButton
      icon={mode === 'light' ? <SunIcon /> : <MoonIcon />}
      label="Toggle theme"
      onClick={toggleTheme}
    />
  )
}

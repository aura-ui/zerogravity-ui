import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme } from '../stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="dark"
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

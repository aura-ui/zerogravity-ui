import '../styles/globals.css'
import { darkTheme } from '../stitches.config'
import { ThemeProvider } from 'next-themes'
import { Flex } from '../components/Flex'
import { Text } from '../components/Text'
import { ThemeToggle } from '../utils/components/ThemeToggle'

export const decorators = [
  (Story) => (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="light"
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Flex
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',
          p: '$2',
          mb: '$6',
          boxShadow: '0 1px 1px $colors$subtleBorder',
        }}
      >
        <Text>zerogravity</Text>
        <ThemeToggle />
      </Flex>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

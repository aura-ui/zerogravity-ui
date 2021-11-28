import '../styles/globals.css'
import { darkTheme } from '../stitches.config';
import { ThemeProvider } from 'next-themes';

export const decorators = [
  (Story) => (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
        <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
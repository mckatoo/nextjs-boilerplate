import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { RouterContext } from "next/dist/shared/lib/router-context"

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white
      },
      {
        name: 'dark',
        value: theme.colors.mainBg
      }
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
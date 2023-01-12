import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme/index'
import { GlobalStyle } from '../styles/global'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

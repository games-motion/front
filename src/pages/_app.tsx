import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme/index'
import { GlobalStyle } from '../styles/global'
import { NextComponentType } from 'next'
import { ReactNode } from 'react'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return getLayout(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

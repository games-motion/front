/* eslint-disable */

import type { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'

declare module 'next' {
  type NextLayoutComponentType<P = {}> = NextComponentType<NextPageContext, unknown, P> & {
    getLayout?: (page: ReactNode) => ReactNode
  }
}

declare module 'next/app' {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType
  }
}

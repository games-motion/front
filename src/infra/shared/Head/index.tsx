import Head from 'next/head'
import { ReactNode } from 'react'

interface IHeaderProps {
  children: ReactNode
}

export function Title({ children }: IHeaderProps) {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  )
}

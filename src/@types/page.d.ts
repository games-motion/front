/* eslint-disable no-unused-vars */
import { NextPage } from 'next'
import { ReactNode } from 'react'

type GetLayout = (page: ReactNode) => ReactNode

// eslint-disable-next-line @typescript-eslint/ban-types
export type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout
}

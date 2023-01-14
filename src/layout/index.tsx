import { ReactNode } from 'react'

import { Profile, DefaultHeader } from '../components'

import { Container, Nav, Aside } from './styles'

interface ILayoutProps {
  children: ReactNode
  bar?: JSX.Element
}

export function Layout(props: ILayoutProps) {
  const { children, bar } = props

  return (
    <>
      <DefaultHeader />
      <Container>
        <Nav>
          <Profile />
          {bar}
        </Nav>
        {children}
        <Aside>
          <div />
        </Aside>
      </Container>
    </>
  )
}

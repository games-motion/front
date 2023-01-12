import { Profile } from 'components'
import { DefaultHeader } from 'components/DefaultHeader'
import { ReactNode } from 'react'

import { Container, Nav, Aside } from './styles'

interface ILayoutProps {
  children: ReactNode
}

export function Layout(props: ILayoutProps) {
  const { children } = props

  return (
    <>
      <DefaultHeader />
      <Container>
        <Nav>
          <Profile />
        </Nav>
        {children}
        <Aside>
          <div />
        </Aside>
      </Container>
    </>
  )
}

import Link from 'next/link'
import { Bell } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Tooltip } from '../../shared'

import { CardNotify } from '../CardNotify'

import { Container, SubContainer, Navigation, Indicative, ContainerNotify } from './styles'

export function DefaultHeader() {
  const {
    colors: { red },
  } = useTheme()

  return (
    <Container>
      <SubContainer>
        <div>
          <img src="/assets/autodraw_14_01_2023_13_33_22-removebg-preview 1.png" title="ESL logo" />
          <Tooltip
            variant="dark"
            title={
              <ContainerNotify>
                <CardNotify title="Olá quer entrar para o meu time?" id="" />
                <CardNotify title="Olá quer entrar para o meu time?" id="" />
                <CardNotify title="Olá quer entrar para o meu time?" id="" />
                <CardNotify title="Olá quer entrar para o meu time?" id="" />
              </ContainerNotify>
            }
          >
            <Indicative>
              <Bell size={22} color={red[600]} />
            </Indicative>
          </Tooltip>
        </div>

        <div />
        <Navigation>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/social">
                <a>Social</a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
          </ul>
        </Navigation>
      </SubContainer>
    </Container>
  )
}

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
          <img
            src="https://esl.com/wp-content/uploads/2019/01/ESL_Logo_Stacked_RGB_POS.svg"
            title="ESL logo"
          />
          <Tooltip
            variant="dark"
            title={
              <ContainerNotify>
                <CardNotify />
                <CardNotify />
                <CardNotify />
                <CardNotify />
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
            <li>Home</li>
            <li>Social</li>
            <li>Profile</li>
          </ul>
        </Navigation>
      </SubContainer>
    </Container>
  )
}

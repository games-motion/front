import { DotsThree, Plus } from 'phosphor-react'
import ReactCountryFlag from 'react-country-flag'
import { Tooltip } from 'shared'

import { Container, Body, Footer, Header } from './styles'

export function ProfileDetails() {
  return (
    <Container>
      <Header>
        <b>Perfil</b>
        <Tooltip title="Editar perfil">
          <button>
            <DotsThree size={32} />
          </button>
        </Tooltip>
      </Header>
      <Body>
        <img src="https://github.com/IcaroSilvaFK.png" alt="" />
        <div>
          <span>Icaro Vieira</span>
          <ul>
            <li>
              <span>Nickname:</span>
              <span>whyy</span>
            </li>

            <li>
              <span>Country:</span>
              <span>
                Brasil
                <ReactCountryFlag countryCode="BR" svg />
              </span>
            </li>

            <li>
              <span>Team:</span>
              <span>iK</span>
            </li>
          </ul>
        </div>
      </Body>
      <Footer>
        <button>
          mais <Plus size={16} />
        </button>
      </Footer>
    </Container>
  )
}

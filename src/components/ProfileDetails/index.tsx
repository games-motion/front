import { DotsThree, Plus } from 'phosphor-react'
import { Tooltip } from 'shared'
import { formatDate } from 'utils/format-date'

import { Container, Body, Footer, Header } from './styles'

export function ProfileDetails() {
  const starterAt = formatDate(new Date().toISOString(), 'dd/MM/yyyy')

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
        <img
          src="https://res.cloudinary.com/dlf01tbs6/image/upload/v1670283656/5225004_whehlp.png"
          alt=""
        />
        <div>
          <span>whyy</span>
          <ul>
            <li>
              <span>posição:</span>
              <span>membro</span>
            </li>

            <li>
              <span>inicio:</span>
              <span>{starterAt}</span>
            </li>

            <li>
              <span>Line:</span>
              <span>CS-GO</span>
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

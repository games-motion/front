import { UsersFour } from 'phosphor-react'
import { Tooltip } from 'shared'

import { Container, ListInfos, Tag, ContainerUserInformations, ProfileDetails } from './styles'

const games = ['cs-go', 'valorant', 'Red dead', 'cyberpunk']

export function Profile() {
  return (
    <Container>
      <Tooltip title="Icaro Vieira">
        <img src="https://github.com/IcaroSilvaFK.png" alt="Icaro Vieira" />
      </Tooltip>

      <div>
        <ContainerUserInformations>
          <span>Icaro Vieira</span>
          <span>@whyy</span>
        </ContainerUserInformations>
        <ProfileDetails>
          <div>
            <span>
              <UsersFour size={32} />
              iK
            </span>
          </div>
          <span>Brasil</span>
        </ProfileDetails>
        <ListInfos>
          {games.map((game) => (
            <li key={game}>
              <Tag>{game}</Tag>
            </li>
          ))}
        </ListInfos>
      </div>
    </Container>
  )
}
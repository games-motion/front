import { UsersFour } from 'phosphor-react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Tooltip } from '../../shared'

import { Container, ListInfos, Tag, ContainerUserInformations, ProfileDetails } from './styles'

const games = ['cs-go', 'valorant', 'Red dead', 'cyberpunk', 'GTAV']

export function Profile() {
  const [parentRef] = useAutoAnimate<HTMLUListElement>()

  return (
    <Container role="banner">
      <Tooltip title="Icaro Vieira">
        <img
          src="https://res.cloudinary.com/dlf01tbs6/image/upload/v1670283656/5225004_whehlp.png"
          alt="Icaro Vieira"
        />
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
        <ListInfos ref={parentRef}>
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

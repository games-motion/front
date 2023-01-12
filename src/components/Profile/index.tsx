import { UsersFour } from 'phosphor-react'
import { faker } from '@faker-js/faker'

import { Container, ListInfos, Tag, ContainerUserInformations } from './styles'

export function Profile() {
  return (
    <Container>
      <img src={faker.internet.avatar()} alt="" />

      <div>
        <ContainerUserInformations>
          <span>{faker.internet.userName()}</span>
          <span>@whyy</span>
        </ContainerUserInformations>
        <ListInfos>
          <li>
            <div>
              <UsersFour size={32} />
              <span>iK</span>
            </div>
            <span>Brasil</span>
          </li>
          <li>
            <Tag>Read dead</Tag>
          </li>
        </ListInfos>
      </div>
    </Container>
  )
}

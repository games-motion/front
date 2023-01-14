import { Container, ContainerAvatar, Tag, Column } from './styles'
import { Tooltip } from '../../shared'

export interface ICardMemberProps {
  avatar: string
  username: string
  isOwner: boolean
  isCoach: boolean
  nickname: string
}

export function CardMember(props: ICardMemberProps) {
  const { avatar, isCoach, isOwner, nickname, username } = props

  return (
    <Container>
      <ContainerAvatar>
        <Tooltip title={username}>
          <img src={avatar} alt={nickname} />
        </Tooltip>
      </ContainerAvatar>
      <Column>
        <strong>{nickname}</strong>
        <div>
          <Tag isOwner={isOwner} isCoach={isCoach} isPlayer={!isCoach && !isOwner}>
            {isOwner && 'owner'}
            {isCoach && 'coach'}
            {!isCoach && !isOwner && 'player'}
          </Tag>
        </div>
      </Column>
    </Container>
  )
}

import { Share, TrashSimple } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Container } from './styles'

interface ICardNotifyProps {
  title: string
  id: string
}

export function CardNotify(props: ICardNotifyProps) {
  const { title } = props

  const { colors } = useTheme()

  return (
    <Container>
      <button title="Ver notificação completa">
        <Share size={22} color={colors.brand['blue-500']} />
      </button>

      <span>{title}</span>
      <button title="Excluir">
        <TrashSimple size={22} color={colors.red[500]} />
      </button>
    </Container>
  )
}

import { Share, TrashSimple } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Container } from './styles'

export function CardNotify() {
  const { colors } = useTheme()

  return (
    <Container>
      <button title="Ver notificação completa">
        <Share size={22} color={colors.brand['blue-500']} />
      </button>

      <span>Olá tenho quer entrar para o meu time?</span>
      <button title="Excluir">
        <TrashSimple size={22} color={colors.red[500]} />
      </button>
    </Container>
  )
}

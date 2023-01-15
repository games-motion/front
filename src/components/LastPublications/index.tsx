import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Container } from './styles'

export function LastPublications() {
  const [parentRef] = useAutoAnimate<HTMLUListElement>()

  return (
    <Container role="banner">
      <div>
        <h3>Ultimas Publicações</h3>
      </div>

      <ul ref={parentRef}>
        <li>Campeões da ESL América Latina</li>
        <li>Derrotados na fase de grupo</li>
        <li>Nova contratação 🤭</li>
        <li>Novos Patrocinadores!</li>
      </ul>
    </Container>
  )
}

import { X } from 'phosphor-react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { formatDate } from '../../utils/format-date'

import { Container } from './styles'

export function NextMatches() {
  const [parentRef] = useAutoAnimate<HTMLUListElement>()
  const dateTimeFormatted = formatDate(new Date().toISOString(), 'dd/MM/yyyy')

  return (
    <Container role="banner">
      <div>
        <h3>Próximas Partidas</h3>
      </div>
      <ul ref={parentRef}>
        <li>
          <b>{dateTimeFormatted}</b>
          <div>
            <span>iK</span>
            <X size={20} weight="bold" />
            <span>YNwL</span>
          </div>
        </li>
        <li>
          <b>{dateTimeFormatted}</b>
          <div>
            <span>iK</span>
            <X size={20} weight="bold" />
            <span>YNwL</span>
          </div>
        </li>
        <li>
          <b>{dateTimeFormatted}</b>
          <div>
            <span>iK</span>
            <X size={20} weight="bold" />
            <span>YNwL</span>
          </div>
        </li>
        <li>
          <b>{dateTimeFormatted}</b>
          <div>
            <span>iK</span>
            <X size={20} weight="bold" />
            <span>YNwL</span>
          </div>
        </li>
        <li>
          <b>{dateTimeFormatted}</b>
          <div>
            <span>iK</span>
            <X size={20} weight="bold" />
            <span>YNwL</span>
          </div>
        </li>
        <li>
          <b>{dateTimeFormatted}</b>
          <div>
            <span>iK</span>
            <X size={20} weight="bold" />
            <span>YNwL</span>
          </div>
        </li>
      </ul>
    </Container>
  )
}

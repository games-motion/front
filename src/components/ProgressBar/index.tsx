import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Container } from './styles'

export interface IProgressBarProps {
  championships: number
  quantity: number
}

export function ProgressBar(props: IProgressBarProps) {
  const [parentRef] = useAutoAnimate<HTMLDivElement>()
  const { quantity, championships } = props

  const progress = (quantity / championships) * 100

  return (
    <Container progress={progress} ref={parentRef}>
      <div className="progress" />
    </Container>
  )
}

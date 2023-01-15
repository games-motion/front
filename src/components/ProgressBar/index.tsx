import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Tooltip } from '../../shared'

import { Container } from './styles'

export interface IProgressBarProps {
  championships: number
  quantity: number
}

export function ProgressBar(props: IProgressBarProps) {
  const [parentRef] = useAutoAnimate<HTMLDivElement>()
  const { quantity, championships } = props

  const progress = (quantity / championships) * 100

  const percentage = progress.toString().split('.')[0].padStart(2, '0')

  return (
    <Container progress={progress} ref={parentRef}>
      <Tooltip title={`${percentage}%`}>
        <div className="progress" />
      </Tooltip>
    </Container>
  )
}

import { Container } from './styles'

export interface IProgressBarProps {
  championships: number
  quantity: number
}

export function ProgressBar(props: IProgressBarProps) {
  const { quantity, championships } = props

  const progress = (quantity / championships) * 100

  return (
    <Container progress={progress}>
      <div className="progress" />
    </Container>
  )
}

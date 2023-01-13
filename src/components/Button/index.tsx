import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'
import { Variants } from './Variants'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: number | string
  px?: number | string
  py?: number | string
  p?: number | string
  bg?: string
  weight?: number
  variant: Variants
}

export function Button(props: IButtonProps) {
  const { children, size, px, py, p, weight, bg, ...rest } = props

  return (
    <Container size={size} px={px} py={py} p={p} weight={weight} bg={bg} {...rest}>
      {children}
    </Container>
  )
}

import { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ArrowComponent, Container } from './styles'

export interface IToplTipProps {
  children: ReactNode
  title: ReactNode
  variant?: 'dark' | 'light'
}

export function Tooltip(props: IToplTipProps) {
  const { children, title, variant } = props

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content sideOffset={5}>
            <Container variant={variant || 'light'}>{title}</Container>
            <ArrowComponent variant={variant || 'light'} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

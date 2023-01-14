import { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ArrowComponent, Container } from './styles'

export interface IToplTipProps {
  children: ReactNode
  title: string
}

export function Tooltip(props: IToplTipProps) {
  const { children, title } = props

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content sideOffset={5}>
            <Container>{title}</Container>
            <ArrowComponent />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

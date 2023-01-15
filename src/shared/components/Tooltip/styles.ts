import styled, { css } from 'styled-components'
import { Arrow } from '@radix-ui/react-tooltip'

type ContainerProps = {
  variant?: 'light' | 'dark'
}

export const Container = styled.div<ContainerProps>`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1;

  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  ${({ variant }) =>
    variant === 'light' &&
    css`
      background-color: ${({ theme }) => theme.colors.gray[100]};
      color: #121212;
    `}
  ${({ variant }) =>
    variant === 'dark' &&
    css`
      background-color: ${({ theme }) => theme.colors.gray[600]};
      color: ${({ theme }) => theme.colors.gray[100]};
    `}
`

export const ArrowComponent = styled(Arrow)<ContainerProps>`
  ${({ variant }) =>
    variant === 'light' &&
    css`
      fill: ${({ theme }) => theme.colors.gray[100]};
    `}
  ${({ variant }) =>
    variant === 'dark' &&
    css`
      fill: ${({ theme }) => theme.colors.gray[600]};
    `}
`

import { darken, transparentize } from 'polished'
import styled, { css } from 'styled-components'
import { Variants } from './Variants'

type ContainerProps = {
  size?: number | string
  px?: number | string
  py?: number | string
  p?: number | string
  weight?: number
  bg?: string
  variant: Variants
}

export const Container = styled.button<ContainerProps>`
  border: 0;
  padding: 12px 22px;

  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.radius.base};

  transition: all linear 0.3s;

  ${({ theme, variant }) =>
    variant === 'solid' &&
    css`
      background: ${theme.colors.brand['blue-500']};
      color: ${theme.colors.gray[100]};

      &:hover {
        background: ${darken(0.4, theme.colors.brand['blue-500'])};
        color: ${darken(0.2, theme.colors.gray[100])};
      }
    `}

  ${({ theme, variant }) =>
    variant === 'ghost' &&
    css`
      background: transparent;
      color: ${theme.colors.brand['blue-500']};

      &:hover {
        background: ${transparentize(0.8, theme.colors.brand['blue-500'])};
      }
    `}

    ${({ theme, variant }) =>
    variant === 'outline' &&
    css`
      background: transparent;
      color: ${theme.colors.brand['blue-500']};
      outline: 1px solid ${theme.colors.brand['blue-500']};

      &:hover {
        background: ${transparentize(0.8, theme.colors.brand['blue-500'])};
      }
    `}


    ${({ theme, variant }) =>
    variant === 'link' &&
    css`
      background: transparent;
      color: ${theme.colors.brand['blue-500']};
    `}

    ${({ size }) =>
    size &&
    css`
      font-size: ${typeof size === 'string' ? size : `${size}rem`};
    `}

    
    ${({ p }) =>
    p &&
    css`
      padding: ${typeof p === 'string' ? p : `${p}px`};
    `}

        
    ${({ px }) =>
    px &&
    css`
      padding-left: ${typeof px === 'string' ? px : `${px}px`};
      padding-right: ${typeof px === 'string' ? px : `${px}px`};
    `}

    ${({ py }) =>
    py &&
    css`
      padding-top: ${typeof py === 'string' ? py : `${py}px`};
      padding-bottom: ${typeof py === 'string' ? py : `${py}px`};
    `}

    ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}
`

import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

type ButtonMarkProps = {
  active: boolean
}

export const Header = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  padding: 12px;

  background: ${({ theme }) => theme.colors.gray[800]};
`

export const ButtonMark = styled.button<ButtonMarkProps>`
  background: transparent;

  padding: 4px;
  border-radius: ${({ theme }) => theme.radius.base};
  color: ${({ theme }) => theme.colors.gray[400]};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};

  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.colors.gray[100]};
      border-color: ${theme.colors.gray[100]};
    `}
`

export const BlockButtonMark = styled.button<ButtonMarkProps>`
  background: transparent;
  padding: 4px;

  border-radius: ${({ theme }) => theme.radius.md};

  font-weight: bold;

  color: ${({ theme }) => theme.colors.gray[400]};

  ${({ theme, active }) =>
    active &&
    css`
      color: ${theme.colors.gray[100]};
      background: ${transparentize(0.9, theme.colors.gray[400])};
    `}
`

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

export const Body = styled.div`
  background: ${({ theme }) => transparentize(0.8, theme.colors.gray[800])};

  max-height: 350px;
  height: 100%;
  overflow-y: auto;

  ul {
    margin-top: 12px;
    list-style-type: disc;
  }
  ol {
    margin-top: 12px;
    list-style-type: decimal;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => transparentize(0.7, theme.colors.brand['blue-500'])};
    border-radius: ${({ theme }) => theme.radius.base};
  }

  & div[role='textbox'] {
    height: 100%;
  }

  code {
    background: ${({ theme }) => theme.colors.gray[600]};
    padding: 2px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    font-family: ${({ theme }) => theme.fonts.openSans};
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.brand['blue-500']};
    padding: 8px 12px;
    color: ${({ theme }) => transparentize(0.6, theme.colors.gray[100])};
  }
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

import { darken, transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 22px;

  max-width: 450px;
  width: 100%;

  border-right: 4px solid ${({ theme }) => theme.colors.brand['blue-500']};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  b {
    letter-spacing: 1px;
  }

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`

export const Body = styled.div`
  display: flex;
  gap: 22px;

  img {
    max-width: 120px;
    border-radius: ${({ theme }) => theme.radius.base};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    > span {
      font-size: 1.375rem;
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 0.875rem;

      li {
        display: flex;
        gap: 16px;
        flex: 1;
        justify-content: space-between;
        span:first-child {
          color: ${({ theme }) => theme.colors.gray[200]};
        }
        span:last-child {
          display: flex;
          gap: 4px;
        }
      }
    }
  }
`

export const Footer = styled.div`
  button {
    background: ${({ theme }) => transparentize(0.6, theme.colors.gray[900])};
    padding: 8px 12px;
    color: ${({ theme }) => theme.colors.gray[100]};
    display: flex;
    align-items: center;

    gap: 6px;

    border-radius: ${({ theme }) => theme.radius.base};

    transition: all linear 0.4s;

    &:hover {
      background: ${({ theme }) => transparentize(0.2, theme.colors.gray[900])};
      color: ${({ theme }) => darken(0.1, theme.colors.gray[100])};
    }
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  border-top: 3px solid ${({ theme }) => theme.colors.brand['blue-500']};

  div {
    padding: 12px;
    h3 {
      font-size: 1.375rem;
      font-weight: ${({ theme }) => theme.fontWeights.normal};
      text-align: center;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    li {
      text-align: center;
      padding: 18px;

      &:hover {
        background: ${({ theme }) => theme.colors.gray[900]};
      }

      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
      }
    }
  }
`

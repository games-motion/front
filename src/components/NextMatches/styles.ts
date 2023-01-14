import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[800]};

  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  > div {
    padding: 12px;

    h3 {
      font-size: 1.375rem;
      font-weight: ${({ theme }) => theme.fontWeights.normal};
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-top: 12px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 12px;

      gap: 6px;

      div {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }

    li:nth-child(even) {
      background: ${({ theme }) => theme.colors.gray[900]};
    }
  }
`

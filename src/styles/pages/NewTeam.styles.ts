import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;

  h3 {
    margin-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
    padding: 4px 0;
    text-transform: uppercase;
  }

  @media screen and (max-width: 800px) {
    margin: 40px auto;
  }
`

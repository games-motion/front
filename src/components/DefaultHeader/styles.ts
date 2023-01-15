import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
  width: 100%;
`

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
  width: 100%;

  padding: 22px 0;
  @media screen and (max-width: 840px) {
    padding: 20px;
  }
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;

    gap: 22px;

    color: ${({ theme }) => theme.colors.gray[100]};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`

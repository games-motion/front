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

  div:first-child {
    display: flex;
    align-items: flex-start;
    gap: 8px;
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

export const Indicative = styled.button`
  position: relative;

  background: transparent;

  &::before {
    content: '1';
    position: absolute;
    top: -10px;
    right: -10px;

    background: ${({ theme }) => theme.colors.red[500]};

    padding: 8px;
    border-radius: ${({ theme }) => theme.radius.full};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray[100]};

    height: 20px;
    width: 20px;
  }
`

export const ContainerNotify = styled.ul`
  display: flex;
  flex-direction: column;

  li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }
`

import { transparentize } from 'polished'
import styled from 'styled-components'

// type IContainerProps = {
//   isOpen?: boolean
// }

export const ButtonOpen = styled.button`
  display: none;
  background: ${({ theme }) => transparentize(0.7, theme.colors.gray[800])};

  padding: 8px;
  border-bottom-right-radius: ${({ theme }) => theme.radius.lg};
  border-top-right-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.colors.gray[300]};
  position: fixed;
  z-index: 2;
  left: 0;
  top: 100px;

  @media screen and (max-width: 840px) {
    display: block;
  }
`

export const Container = styled.div`
  position: fixed;
  display: none;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => transparentize(0.7, theme.colors.gray[900])};
  backdrop-filter: blur(1px);

  @media screen and (max-width: 840px) {
    display: block;
  }
`

export const ContainerNav = styled.nav`
  background: ${({ theme }) => theme.colors.gray[900]};
  position: absolute;
  box-shadow: 10px 0 20px rgba(0, 0, 0, 0.2);
  max-width: 320px;
  width: 100%;
  height: 100%;

  padding: 20px;
  padding-bottom: 40px;

  > button {
    position: absolute;
    right: 0px;
    top: 10px;
    background: ${({ theme }) => theme.colors.brand['blue-500']};
    color: ${({ theme }) => theme.colors.gray[100]};

    padding: 12px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    max-height: 100vh;
    padding-bottom: 100px;
    overflow-y: auto;
    > div {
      width: 100%;
    }

    div[role='banner'] {
      width: 100%;
      max-width: none;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

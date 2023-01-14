import styled, { css } from 'styled-components'

type ContainerProps = {
  progress: number
}

export const Container = styled.div<ContainerProps>`
  height: 20px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.colors.gray[700]};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  .progress {
    width: ${({ progress }) => progress}%;
    height: 100%;
    position: absolute;
    transition: width 0.4s linear;

    ${({ progress }) =>
      progress <= 20 &&
      css`
        background: ${({ theme }) => theme.colors.red[500]};
      `}

    ${({ progress }) =>
      progress >= 20 &&
      progress <= 40 &&
      css`
        background: ${({ theme }) => theme.colors.yellow[500]};
      `}

      ${({ progress }) =>
      progress >= 40 &&
      progress <= 70 &&
      css`
        background: ${({ theme }) => theme.colors.green[400]};
      `}

      ${({ progress }) =>
      progress >= 70 &&
      css`
        background: ${({ theme }) => theme.colors.green[700]};
      `}
  }
`

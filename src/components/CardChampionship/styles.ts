import styled, { keyframes } from 'styled-components'

import { themeKeyFrames } from '../../utils/theme-on-keyframes'

const shadowAnimation = themeKeyFrames(
  (theme) => keyframes`
  0%{
    box-shadow: 0 0 5px ${theme.colors.green[500]};
  }
  50%{
    box-shadow: 0 0 8px ${theme.colors.green[500]};
  }
  100%{
    box-shadow: 0 0 10px ${theme.colors.green[500]};
  }
`
)

export const Container = styled.li`
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.green[500]};
  padding: 12px;
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${shadowAnimation} linear 3s;

  img {
    max-width: 80px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    strong {
      font-size: 1.125rem;
      text-transform: uppercase;
    }
  }
`

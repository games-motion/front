import styled from 'styled-components'
import { Arrow } from '@radix-ui/react-tooltip'

export const Container = styled.div`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1;
  color: #121212;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

export const ArrowComponent = styled(Arrow)`
  fill: white;
`

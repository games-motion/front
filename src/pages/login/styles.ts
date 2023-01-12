import styled from 'styled-components'
import { theme } from 'styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 40% 1fr;
  background-color: ${theme.colors.gray[900]};
  color: ${theme.colors.neutral.white};
  font-family: ${theme.fonts.montserrat};
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: ${theme.space[60]};
  gap: 16px;

  div {
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 32px;
    text-transform: capitalize;
  }

  span {
    font-size: 20px;
    font-weight: ${theme.fontWeights.light};
  }
`

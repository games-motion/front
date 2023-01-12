import styled from 'styled-components'
import { theme } from 'styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space['2']};

  label {
    font-size: 20px;
    font-weight: ${theme.fontWeights.bold};
    text-transform: capitalize;
  }
  input {
    width: 100%;
    height: 40px;
    border-radius: ${theme.radius.sm};
    border: none;
    background: none;
    border: 1px solid ${theme.colors.brand['blue-900']};
    padding: 8px;
    color: ${theme.colors.gray['200']};
    font-size: 16px;

    :focus {
      border-color: ${theme.colors.brand['blue-600']};
    }
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['2']};
  z-index: 1;

  label {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-transform: capitalize;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: ${({ theme }) => theme.radius.sm};
    border: none;
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.brand['blue-800']};
    background-color: ${({ theme }) =>
      theme.colors.gray[600]}66; // 66 in the end to put 40% of opacity
    padding: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.gray['200']};
    font-size: 14px;

    :focus {
      border-color: ${({ theme }) => theme.colors.brand['blue-600']};
    }
  }
`

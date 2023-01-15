import styled from 'styled-components'

export const Container = styled.li`
  padding: 8px;

  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  button {
    background: transparent;
  }

  button:hover {
    opacity: 0.5;
  }
`

import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

interface IContainerInputFileBackground {
  bg?: string
}

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    gap: 16px;

    textarea {
      height: 200px;
      background: ${({ theme }) => transparentize(0.8, theme.colors.gray[600])};
      resize: none;
      border: 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      font-size: 1rem;

      border-radius: ${({ theme }) => theme.radius.base};
      color: ${({ theme }) => theme.colors.gray[200]};
      padding: 12px;

      &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.brand['blue-500']};
      }
    }
    > button {
      text-transform: uppercase;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
  }
`

export const InputFileContainer = styled.div<IContainerInputFileBackground>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  min-height: 200px;
  min-width: 350px;
  max-width: 350px;
  max-height: 200px;

  width: 100%;
  height: 100%;

  border: 4px dashed ${({ theme }) => theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.radius.base};
  input {
    display: none;
  }

  label {
    background: transparent;
    color: ${({ theme }) => theme.colors.gray[400]};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    flex: 1;

    div {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }

  ${({ bg }) =>
    bg &&
    css`
      background-image: url('${bg}');
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      label {
        display: none;
      }
    `}

  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: none;
    min-width: auto;

    label div {
      flex-direction: column;
      padding: 8px;
    }
  }
`

export const Row = styled.div`
  background: ${({ theme }) => transparentize(0.8, theme.colors.gray[600])};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  border-radius: ${({ theme }) => theme.radius.sm};

  color: ${({ theme }) => theme.colors.gray[200]};

  display: flex;
  align-items: center;

  padding: 4px;

  input {
    flex: 1;
    background: transparent;
    padding: 8px;
    color: inherit;
    font-size: 1rem;
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.brand['blue-500']};
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: ${({ theme }) => theme.fontWeights.semibold};
  }
`

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ColumnInputFile = styled.div`
  display: flex;
  flex-direction: column;

  button {
    padding: 8px;
    background: ${({ theme }) => transparentize(0.9, theme.colors.red[500])};

    margin-top: 12px;
    color: ${({ theme }) => theme.colors.red[500]};

    transition: all linear 0.3s;

    &:hover {
      background: ${({ theme }) => transparentize(0.7, theme.colors.red[500])};
    }
  }
`

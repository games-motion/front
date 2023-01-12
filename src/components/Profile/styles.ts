import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div`
  padding: 22px;
  border-top: 4px solid ${({ theme }) => theme.colors.brand['blue-500']};
  max-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  img {
    max-width: 120px;
    border-radius: ${({ theme }) => theme.radius.md};
    margin-top: -80px;

    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }

  > div {
    width: 100%;
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > span {
      span {
        font-style: italic;
      }
    }
  }
`

export const ListInfos = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 12px;
  gap: 12px;
  li {
    display: flex;
    align-items: center;
    gap: 12px;

    div {
      display: flex;
      align-items: center;
      flex-direction: row;
    }
  }
`

export const ContainerUserInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  span {
    font-size: 500;
  }
  span:last-child {
    font-style: italic;
  }
`

export const Tag = styled.div`
  background: ${({ theme }) => transparentize(0.8, theme.colors.red[500])};
  color: ${({ theme }) => theme.colors.red[500]};
  border: 1px solid ${({ theme }) => theme.colors.red[500]};
  padding: 6px;
  border-radius: ${({ theme }) => theme.radius.md};
`

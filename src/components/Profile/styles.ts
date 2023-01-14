import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div`
  padding: 22px;
  border-top: 4px solid ${({ theme }) => theme.colors.brand['blue-500']};
  max-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background: ${({ theme }) => theme.colors.gray[800]};
  color: ${({ theme }) => theme.colors.gray[50]};

  img {
    max-width: 120px;
    border-radius: ${({ theme }) => theme.radius.md};
    margin-top: -80px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  }
`

export const ListInfos = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 12px;
  gap: 12px;
`

export const ContainerUserInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
  overflow: hidden;

  span:first-child {
    font-weight: bold;
    letter-spacing: 1px;
  }

  span {
    font-size: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span:last-child {
    font-style: italic;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 22px;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`

export const Tag = styled.div`
  background: ${({ theme }) => transparentize(0.9, theme.colors.red[500])};
  color: ${({ theme }) => theme.colors.red[500]};
  border: 1px solid ${({ theme }) => theme.colors.red[500]};
  padding: 6px;
  border-radius: ${({ theme }) => theme.radius.md};
`

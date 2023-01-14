import styled, { css } from 'styled-components'

type ITagProps = {
  isOwner?: boolean
  isCoach?: boolean
  isPlayer?: boolean
}

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  padding: 18px;
  padding-left: 12px;
  gap: 22px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[900]};
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  overflow: hidden;

  gap: 6px;

  > strong {
    font-style: italic;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  flex-shrink: 0;
  max-width: 45px;

  border: 2px solid ${({ theme }) => theme.colors.gray[400]};
  outline: 2px solid ${({ theme }) => theme.colors.brand['blue-500']};

  img {
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const Tag = styled.span<ITagProps>`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: 0.875;

  ${({ theme, isOwner }) =>
    isOwner &&
    css`
      color: ${theme.colors.red[500]};
    `}

  ${({ theme, isCoach }) =>
    isCoach &&
    css`
      color: ${theme.colors.brand['blue-500']};
    `}

    
  ${({ theme, isPlayer }) =>
    isPlayer &&
    css`
      color: ${theme.colors.green[500]};
    `}
`

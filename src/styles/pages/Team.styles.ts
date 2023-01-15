import styled from 'styled-components'

export const Container = styled.main`
  margin-top: 100px;
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 28px;

  > header {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
    h1 {
      text-transform: uppercase;

      @media screen and (max-width: 500px) {
        font-size: 1.8rem;
      }
    }
  }
`

export const SectionTeamDetails = styled.section`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.base};
  background: ${({ theme }) => theme.colors.gray[800]};
  border-top: 3px solid ${({ theme }) => theme.colors.brand['blue-500']};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 100%;
  }
`

export const SectionDetailsHeader = styled.div`
  padding: 12px;
  text-transform: uppercase;

  h3 {
    font-size: 1.375rem;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }
`

export const FirstSection = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  padding: 12px;

  h3 {
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    text-transform: uppercase;

    margin-bottom: 22px;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 66px;

    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 22px;
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;

    margin-top: 22px;

    button {
      color: ${({ theme }) => theme.colors.green[500]};
      text-transform: uppercase;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const ProgressSection = styled.section`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: ${({ theme }) => theme.radius.base};

  padding: 12px;

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    padding: 12px 0;

    h3 {
      font-weight: ${({ theme }) => theme.fontWeights.normal};
      text-transform: uppercase;
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }
`
export const DetailsTeamSection = styled.section`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    gap: 22px;
  }
`

export const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-top: 6px solid ${({ theme }) => theme.colors.yellow[600]};

  padding: 12px;

  div:first-child {
    display: flex;
    justify-content: space-between;

    padding: 12px 0;

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray[300]};
    }

    h3 {
      font-weight: ${({ theme }) => theme.fontWeights.normal};
      text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;

      span {
        align-self: flex-end;
      }
    }
  }

  div {
    p {
      line-height: 150%;
      color: ${({ theme }) => theme.colors.gray[300]};
      font-family: ${({ theme }) => theme.fonts.openSans};
    }
  }
`

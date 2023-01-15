import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 40px;

  display: grid;
  grid-template-columns: 250px 1fr 300px;

  @media screen and (max-width: 840px) {
    display: flex;

    padding: 20px;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 22px;
  gap: 40px;

  @media screen and (max-width: 840px) {
    display: none;
  }
`

export const Aside = styled.aside`
  @media screen and (max-width: 840px) {
    display: none;
  }
`

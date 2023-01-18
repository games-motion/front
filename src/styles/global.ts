import { darken } from 'polished'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,html,#__next{
    width: 100%;
    height: 100%;

    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    background:${({ theme }) => theme.colors.gray[900]};
    color:${({ theme }) => theme.colors.gray[100]};

    &::-webkit-scrollbar{
      max-width: 10px;
      background:transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => darken(0.4, theme.colors.brand['blue-500'])};
      border-radius:${({ theme }) => theme.radius.sm}
    }
  }

  button{
    cursor: pointer;
  }

  button,input{
    border: 0;
    outline: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul,ol{
    list-style: none;
  }
`

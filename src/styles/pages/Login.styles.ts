import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 40% 1fr;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-family: ${({ theme }) => theme.fonts.montserrat};
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 100%;
  padding: ${({ theme }) => theme.space[8]};
  gap: 16px;

  .form-content {
    width: 100%;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 3rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.brand['blue-700']};
    margin-bottom: 0.5rem;
  }

  > span {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.light};
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    bottom: 50%;
    width: 400px;
    height: 400px;
    background: ${({ theme }) => theme.colors.brand['blue-400']};
    filter: blur(120px);
    opacity: 0.4;
    border-radius: 50%;
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 50%;
    width: 400px;
    height: 400px;
    background: ${({ theme }) => theme.colors.brand['blue-600']};
    filter: blur(120px);
    opacity: 0.4;
    border-radius: 50%;
  }

  .login-buttons {
    display: flex;
    gap: 16px;
    justify-content: start;
    align-items: center;

    > span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }

  .login-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }
`

export const SideBackground = styled.div`
  max-width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1633545505446-586bf83717f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80')
    rgba(0, 0, 0, 0.6);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  box-shadow: ${({ theme }) => theme.colors.gray[50]}0D 0px 1px 1px 0px inset,
    ${({ theme }) => theme.colors.gray[50]}0D0px 50px 100px -20px,
    ${({ theme }) => theme.colors.neutral.black}40 0px 30px 60px -30px;
`
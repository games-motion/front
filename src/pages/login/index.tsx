import { Input } from 'components/'

import { Container, FormContainer, SideBackground } from './styles'

export default function Login() {
  return (
    <>
      <Container>
        <FormContainer>
          <form className="form-content">
            <h1>Games Motion</h1>
            <span>Bem vindo a sua nova experiência gamer, por favor faça o login.</span>
            <Input label="Login" placeholder="Digite seu email" type="email" />
            <Input label="Senha" placeholder="Digite sua senha" type="password" />
          </form>
        </FormContainer>
        <SideBackground />
      </Container>
    </>
  )
}
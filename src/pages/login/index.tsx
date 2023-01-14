import { Button, Input } from 'components/'
import Link from 'next/link'

import { Container, FormContainer, SideBackground } from 'styles/pages/Login.styles'

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
            <div className="login-content">
              <div className="login-buttons">
                <Button variant="solid">
                  <span>Fazer login</span>
                </Button>
                <span>ou</span>
                <Button variant="solid">
                  <span>Continuar sem login</span>
                </Button>
              </div>

              <Link href="/forgot-password">
                <Button p={0} variant="link">
                  Esqueci minha senha
                </Button>
              </Link>
            </div>
          </form>
        </FormContainer>
        <SideBackground />
      </Container>
    </>
  )
}

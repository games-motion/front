import { Input, Button } from '../../components'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Container, FormContainer, SideBackground } from '../../styles/pages/Login.styles'
import { LoginSchema } from 'shared/schemas/login-schema'

interface LoginInputDataProps {
  email: string
  password: string
}



const { register, handleSubmit, formState } = useForm<LoginInputDataProps>({ resolver: zodResolver(LoginSchema) })

export default function Login() {
  return (
    <>
      <Container>
        <FormContainer>
          <form className="form-content" onSubmit={handleSubmit(() => { }}>
            <h1>Games Motion</h1>
            <span>Bem vindo a sua nova experiência gamer, por favor faça o login.</span>

            <Input
              label="Login"
              placeholder="Digite seu email"
              type="email"
              {...register('email')}
            />

            <Input
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              {...register('password')}
            />

            <div className="login-content">
              <div className="login-buttons">
                <Button variant="solid" type="submit">
                  <span>Fazer login</span>
                </Button>
                <span>ou</span>
                <Link href="/team">
                  <Button variant="solid" type="button">
                    <span>Continuar sem login</span>
                  </Button>
                </Link>
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

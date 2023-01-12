import { Input } from 'components/'
import Head from 'next/head'
import * as Styled from './styles'

export default function Login() {
  return (
    <>
      <Head>Games Motion | Login </Head>
      <Styled.Container>
        <Styled.FormContainer>
          <div>
            <h1>Games Motion</h1>
            <span>Bem vindo a sua nova experiência gamer, por favor faça o login.</span>
            <Input label="Login" placeholder="Digite seu email" type="email" />
            <Input label="Senha" placeholder="Digite sua senha" type="password" />
          </div>
        </Styled.FormContainer>
        <img
          src="https://images.blackmagicdesign.com/images/media/releases/2016/20160725_manilla-major-esports/carousel/1-manilla-major-esports.jpg?_v=1469144611"
          alt=""
        />
      </Styled.Container>
    </>
  )
}

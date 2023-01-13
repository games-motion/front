import { Container, SubContainer, Navigation } from './styles'

export function DefaultHeader() {
  return (
    <Container>
      <SubContainer>
        <img
          src="https://esl.com/wp-content/uploads/2019/01/ESL_Logo_Stacked_RGB_POS.svg"
          title="ESL logo"
        />
        <div />
        <Navigation>
          <ul>
            <li>Home</li>
            <li>Social</li>
            <li>Profile</li>
          </ul>
        </Navigation>
      </SubContainer>
    </Container>
  )
}

import { Title } from '../../infra/shared/Head'
import { Layout } from '../../layout'

import { Container } from '../../styles/pages/Profile.styles'

export default function Page() {
  return (
    <>
      <Title>Profile Icaro Vieira</Title>
      <Layout>
        <Container>
          <h1>Hello world</h1>
        </Container>
      </Layout>
    </>
  )
}

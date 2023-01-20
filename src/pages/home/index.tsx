import { Title } from '../../infra/shared/Head'
import { Layout } from '../../layout'

import { Container } from '../../styles/pages/Home.styles'

export default function Page() {
  return (
    <>
      <Title>
        <title>Home</title>
      </Title>
      <Layout>
        <Container>
          <h1>Hello world</h1>
        </Container>
      </Layout>
    </>
  )
}

// mix-blend-mode

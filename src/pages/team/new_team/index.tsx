import { Layout } from '../../../layout'

import { Container } from '../../../styles/pages/NewTeam.styles'
import { FormCreateNewTeam } from 'components'

export default function Page() {
  return (
    <>
      <Layout>
        <Container>
          <h3>Novo time</h3>
          <FormCreateNewTeam />
        </Container>
      </Layout>
    </>
  )
}

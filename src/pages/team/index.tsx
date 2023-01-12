import { Layout } from 'layout'

import { ProfileDetails } from 'components'

import { Container } from 'styles/pages/Team.styles'

export default function Page() {
  return (
    <>
      <Layout>
        <Container>
          <ProfileDetails />
        </Container>
      </Layout>
    </>
  )
}

import { Layout } from 'layout'

import { NextMatches, ProfileDetails } from 'components'

import { Container, FirstSection } from 'styles/pages/Team.styles'

export default function Page() {
  return (
    <>
      <Layout>
        <Container>
          <FirstSection>
            <ProfileDetails />
            <NextMatches />
          </FirstSection>
        </Container>
      </Layout>
    </>
  )
}

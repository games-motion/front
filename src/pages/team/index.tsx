import { Page } from '../../@types/page'
import { Layout } from 'layout'

import { Container } from './styles'

const Page: Page = () => {
  return (
    <>
      <></>
      <Container>
        <h1>Hello world</h1>
      </Container>
    </>
  )
}

Page.getLayout = (page) => <Layout>{page}</Layout>

export default Page

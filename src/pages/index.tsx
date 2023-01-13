import type { NextPage } from 'next'
import { Title } from '@title'

import { Profile } from 'components'

const Home: NextPage = () => {
  return (
    <>
      <Title>Icaro Vieira da Silva</Title>
      <div style={{ padding: 120 }}>
        <Profile />
      </div>
    </>
  )
}

export default Home

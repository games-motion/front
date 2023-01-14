import { members } from '../../mocks/teams/members'

import { Layout } from '../../layout'

import { Button, CardMember, ProgressBar } from '../../components'

import {
  Container,
  SectionDetailsHeader,
  FirstSection,
  SectionTeamDetails,
  ProgressSection,
} from '../../styles/pages/Team.styles'

export default function Page() {
  return (
    <>
      <Layout
        bar={
          <SectionTeamDetails>
            <SectionDetailsHeader>
              <h3>Line UP</h3>
            </SectionDetailsHeader>
            <ul>
              {members.map((member) => (
                <CardMember
                  key={member.nickname}
                  avatar={member.imageUrl}
                  isCoach={member.coach}
                  isOwner={member.owner}
                  nickname={member.nickname}
                  username={member.name}
                />
              ))}
            </ul>
          </SectionTeamDetails>
        }
      >
        <Container>
          <FirstSection>
            <header>
              <h3>Campeonatos</h3>
            </header>
            <ul>
              <li>
                <img src="/assets/trophy-svgrepo-com.svg" />
                <div>
                  <strong>1º Lugar</strong>
                  <span>ESL América Latina</span>
                </div>
              </li>
              <li>
                <img src="/assets/trophy-svgrepo-com.svg" />
                <div>
                  <strong>2º Lugar</strong>
                  <span>ESL América Latina</span>
                </div>
              </li>
              <li>
                <img src="/assets/trophy-svgrepo-com.svg" />
                <div>
                  <strong>3º Lugar</strong>
                  <span>ESL América Latina</span>
                </div>
              </li>
            </ul>
            <div className="footer">
              <Button variant="link">ver mais</Button>
            </div>
          </FirstSection>
          <ProgressSection>
            <div>
              <h3>Rating</h3>
              <span>22/7</span>
            </div>
            <ProgressBar championships={22} quantity={7} />
          </ProgressSection>
        </Container>
      </Layout>
    </>
  )
}

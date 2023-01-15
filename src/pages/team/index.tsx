import { useAutoAnimate } from '@formkit/auto-animate/react'

import { members } from '../../mocks/teams/members'

import { Layout } from '../../layout'

import {
  Button,
  CardMember,
  NextMatches,
  ProgressBar,
  LastPublications,
  CardChampionship,
} from '../../components'

import {
  Container,
  SectionDetailsHeader,
  FirstSection,
  SectionTeamDetails,
  ProgressSection,
  DetailsTeamSection,
  FooterSection,
} from '../../styles/pages/Team.styles'

export default function Page() {
  const [parentRef] = useAutoAnimate<HTMLUListElement>()

  return (
    <>
      <Layout
        bar={
          <SectionTeamDetails>
            <SectionDetailsHeader>
              <h3>Line UP</h3>
            </SectionDetailsHeader>
            <ul ref={parentRef}>
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
          <header>
            <h1>Insanity Killers</h1>
          </header>
          <FirstSection>
            <header>
              <h3>Campeonatos</h3>
            </header>
            <ul ref={parentRef}>
              <CardChampionship />
              <CardChampionship />
              <CardChampionship />
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
            <ProgressBar championships={22} quantity={6} />
          </ProgressSection>
          <DetailsTeamSection>
            <LastPublications />
            <NextMatches />
          </DetailsTeamSection>
          <FooterSection>
            <div>
              <h3>Descriação</h3>
              <span>modificado 12/11/2019 às 19:00</span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sunt sint cupiditate,
                nesciunt accusamus sed exercitationem, nihil autem ea dignissimos, ab veritatis
                doloremque quia quos fuga quibusdam asperiores facilis aperiam. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Totam ipsum, non enim, quia nobis at
                ratione, neque asperiores voluptatem tempore optio mollitia. Reprehenderit, vero ad.
                Minus quae recusandae quis saepe.
              </p>
            </div>
          </FooterSection>
        </Container>
      </Layout>
    </>
  )
}

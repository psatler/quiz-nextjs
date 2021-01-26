import styled from 'styled-components'
import db from '../db.json'

import { Widget, Footer, GitHubCorner, QuizBackground, QuizLogo } from '../src/components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
          <QuizContainer>
            <QuizLogo />
            <Widget>
              <Widget.Header>
                {db.title}
              </Widget.Header>
              
              <Widget.Content>
                {db.description}
              </Widget.Content>

            </Widget>

            <Widget>
              <Widget.Header>
                Quiz da galera
              </Widget.Header>

              <Widget.Content>
                .
              </Widget.Content>
            </Widget>

            <Footer />
          </QuizContainer>

          <GitHubCorner projectUrl={"https://github.com/psatler"} />
        </QuizBackground>
    </>
    
  )
}

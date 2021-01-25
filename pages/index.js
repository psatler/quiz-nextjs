import styled from 'styled-components'
import db from '../db.json'

import { Widget, Footer, GitHubCorner, QuizBackground } from '../src/components'

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
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            Header
          </Widget.Header>
        </Widget>

        <Widget>
          <h4>Other quizzes</h4>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl={"https://github.com/psatler"} />
    </QuizBackground>
  )
}

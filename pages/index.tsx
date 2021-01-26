import styled from 'styled-components'
import Head from 'next/head'
import db from '../db.json'

import { Widget, Footer, GitHubCorner, QuizBackground, QuizLogo } from '../src/components'



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
  // OG meta tags
  // https://www.netlify.com/blog/2020/05/08/improve-your-seo-and-social-sharing-cards-with-next.js/
  // https://metatags.io/
  return (
    <>  
      <Head>
        <title>Capixabês</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* 
        <meta property="og:title" content="Capixabês" key="ogtitle" />
        <meta property="og:description" content="Teste seus conhecimentos sobre gírias e palavras faladas pelos capixadas" key="ogdesc" /> */}

        {/* <!-- Primary Meta Tags --> */}
        <title>Capixabês — Quiz sobre girias e palavras faladas pelo capixaba</title>
        <meta name="title" content="Capixabês — Quiz sobre girias e palavras faladas pelo capixaba"/>
        <meta name="description" content="Teste seus conhecimentos sobre gírias e palavras faladas pelos capixadas!"/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://quiz-nextjs.psatler.vercel.app/"/>
        <meta property="og:title" content="Capixabês — Quiz sobre girias e palavras faladas pelo capixaba"/>
        <meta property="og:description" content="Teste seus conhecimentos sobre gírias e palavras faladas pelos capixadas!"/>
        <meta property="og:image" content="https://www.segueviagem.com.br/wp-content/uploads/2019/11/praia-de-camburi_vitoria_setur_yuri-barichivich-2-1200x675.jpg"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://quiz-nextjs.psatler.vercel.app/"/>
        <meta property="twitter:title" content="Capixabês — Quiz sobre girias e palavras faladas pelo capixaba"/>
        <meta property="twitter:description" content="Teste seus conhecimentos sobre gírias e palavras faladas pelos capixadas!"/>
        <meta property="twitter:image" content="https://www.segueviagem.com.br/wp-content/uploads/2019/11/praia-de-camburi_vitoria_setur_yuri-barichivich-2-1200x675.jpg"/>
      </Head>
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
                Quizes da galera
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

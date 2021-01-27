import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import db from 'db.json';

import {
  Widget, Footer, GitHubCorner, QuizBackground, QuizLogo, Button, Input, QuizContainer,
} from 'src/components';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push(`/quiz?name=${name}`);
  }

  return (
    <>
      <Head>
        <title>Capixabês</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Capixabês — Quiz sobre girias e palavras faladas pelo capixaba</title>
        <meta name="title" content="Capixabês — Quiz sobre girias e palavras faladas pelo capixaba" />
        <meta name="description" content="Teste seus conhecimentos sobre gírias e palavras faladas pelos capixadas!" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quiz-nextjs.psatler.vercel.app/" />
        <meta property="og:title" content="Capixabês — Quiz sobre girias e palavras faladas pelo capixaba" />
        <meta property="og:description" content="Teste seus conhecimentos sobre gírias e palavras faladas pelos capixadas!" />
        <meta property="og:image" content="https://www.segueviagem.com.br/wp-content/uploads/2019/11/praia-de-camburi_vitoria_setur_yuri-barichivich-2-1200x675.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quiz-nextjs.psatler.vercel.app/" />
        <meta property="twitter:title" content="Capixabês — Quiz sobre girias e palavras faladas pelo capixaba" />
        <meta property="twitter:description" content="Teste seus conhecimentos sobre gírias e palavras faladas pelos capixadas!" />
        <meta property="twitter:image" content="https://www.segueviagem.com.br/wp-content/uploads/2019/11/praia-de-camburi_vitoria_setur_yuri-barichivich-2-1200x675.jpg" />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              {db.title}
            </Widget.Header>

            <Widget.Content>
              {/* {db.description} */}
              <form onSubmit={handleSubmit}>

                <Input
                  name="usernameInput"
                  onChange={handleInput}
                  placeholder="Digite seu nome"
                  value={name}
                  maxLength={30}
                />

                <Button
                  type="submit"
                  disabled={name.length === 0}
                >
                  {`Jogar ${name}`}
                </Button>

              </form>
            </Widget.Content>

          </Widget>

          <Widget>
            <Widget.Header>
              Quizes da galera
            </Widget.Header>

            <Widget.Content>
              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>

          <Footer />
        </QuizContainer>

        <GitHubCorner projectUrl="https://github.com/psatler" />
      </QuizBackground>
    </>

  );
}

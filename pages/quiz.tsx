import React from 'react';
import db from 'db.json';

import {
  Widget, Footer, GitHubCorner, QuizBackground, QuizContainer, QuizLogo,
} from 'src/components';

export default function Quiz() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryParam = urlParams.get('name');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            {db.title}
          </Widget.Header>

          <Widget.Content>

            {`Olá, ${queryParam}!`}

            <br />

            {db.description}

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
  );
}

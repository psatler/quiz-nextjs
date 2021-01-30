import React from 'react';
import db from 'db.json';
import { ThemeProvider } from 'styled-components';
import { GetServerSideProps } from 'next';

import { QuizScreen } from 'src/screens/QuizScreen';

interface Props {
  dbExterno?: typeof db
}

export default function QuizDaGaleraPage({ dbExterno }: Props) {
  if (!dbExterno) {
    return null;
  }

  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

// https://blitzjs.com/docs/get-server-side-props#typescript-use-getserversideprops
// cheatsheet: https://www.saltycrane.com/cheat-sheets/typescript/next.js/latest/
// https://ironeko.com/posts/how-to-return-a-404-error-in-getserversideprops-with-next-js/
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto);
      // .catch((err) => {
      //   // console.error(err);
      // });

    // console.log('dbExterno', dbExterno);
    // console.log('Infos que o Next da para nós', context.query.id);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    // https://github.com/vercel/next.js/discussions/11281#discussioncomment-20641
    context.res.statusCode = 302;
    context.res.setHeader('Location', '/404'); // Replace <link> with your url link
    return {
      props: {},
    };
  }
};

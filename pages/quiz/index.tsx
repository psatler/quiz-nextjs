import React from 'react';
import db from 'db.json';
import { ThemeProvider } from 'styled-components';
import { QuizScreen } from 'src/screens/QuizScreen';

export default function Quiz() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        externalBg={db.bg}
        externalQuestions={db.questions}
      />
    </ThemeProvider>
  );
}

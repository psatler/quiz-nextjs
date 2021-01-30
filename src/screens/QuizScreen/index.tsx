import React from 'react';
import { useRouter } from 'next/router';
import db from 'db.json';

import {
  Footer,
  GitHubCorner,
  QuizBackground,
  QuizContainer,
  QuizLogo,
} from 'src/components';
import { ResultWidget } from './ResultWidget';
import { QuestionWidget } from './QuestionWidget';
import { LoadingWidget } from './LoadingWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

interface QuiScreenProps {
  externalQuestions: typeof db.questions
  externalBg: typeof db.bg
}

export function QuizScreen({ externalQuestions, externalBg }: QuiScreenProps) {
  const router = useRouter();
  const { name: nameQueryParam } = router.query;

  const [results, setResults] = React.useState<boolean[]>([]);
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1300);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  function handleResults(questionResult: boolean) {
    setResults([
      ...results,
      questionResult,
    ]);
  }

  function handlePlayAgain() {
    setResults([]);
    setCurrentQuestion(0);
    setScreenState(screenStates.QUIZ);
  }

  return (
    <QuizBackground backgroundImage={externalBg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={handleResults}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
        <div>
          <ResultWidget
            results={results}
            handleOnClick={handlePlayAgain}
            username={nameQueryParam as string}
          />

        </div>
        )}

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/psatler/quiz-nextjs" />
    </QuizBackground>
  );
}

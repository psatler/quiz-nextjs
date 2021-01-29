import React from 'react';
import { useRouter } from 'next/router';
import db from 'db.json';

import {
  Widget,
  Footer,
  GitHubCorner,
  QuizBackground,
  QuizContainer,
  QuizLogo,
  Button,
  LoadingIcon,
  AlternativesForm,
} from 'src/components';

interface ResultWidgetProps {
  results: boolean[]
  handleOnClick: () => void
  username: string
}
function ResultWidget({ results, handleOnClick, username }: ResultWidgetProps) {
  const numberOfRightQuestions = results.filter((x) => x).length;

  return (
    <Widget>
      <Widget.Header>
        Resultado
      </Widget.Header>

      <Widget.Content>
        <h3>
          {`Parabéns, ${username}!`}
        </h3>
        <p>
          {`Você acertou ${numberOfRightQuestions} pergunta${numberOfRightQuestions > 1 ? 's' : ''}`}

          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)} */}
        </p>
        <ul>
          {results.map((result, index) => (
            // eslint-disable-next-line
            <li key={`result__${index}`}>
              {`#${index + 1}: ${result ? 'Acertou' : 'Errou'}`}

            </li>
          ))}
        </ul>

        <Button type="button" onClick={handleOnClick}>
          Jogar novamente?
        </Button>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <LoadingIcon
          borderColor="#29b6f6"
          borderTopColor="#FFFFFF"
          borderSize={4}
          containerHeight={60}
          loaderSize={30}
          message="Carregando perguntas"
          displayLoadingIcon
        />
      </Widget.Content>
    </Widget>
  );
}

interface QuestionWidgetProps {
  question: typeof db.questions[0];
  questionIndex: number;
  totalQuestions: number
  onSubmit: () => void
  addResult: (_questionResult: boolean) => void
}

const QuestionWidget: React.FC<QuestionWidgetProps> = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) => {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = React
    .useState<number | undefined>(undefined);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = React.useState(false);

  const [disableAlternatives, setDisableAlternatives] = React.useState(false);

  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  function handleSubmitQuestion(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsQuestionSubmitted(true);
    setDisableAlternatives(true);

    setTimeout(() => {
      addResult(isCorrect);
      onSubmit();
      setIsQuestionSubmitted(false);
      setDisableAlternatives(false);
      setSelectedAlternative(undefined);
    }, 1500);
  }

  return (
    <Widget>
      {/* <Widget.Header>
        {`Bem vindo, ${userName}`}
      </Widget.Header> */}
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={handleSubmitQuestion}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                key={alternativeId}
                as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  disabled={disableAlternatives}

                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>

          {isQuestionSubmitted && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmitted && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function Quiz() {
  const router = useRouter();
  const { name: nameQueryParam } = router.query;

  const [results, setResults] = React.useState<boolean[]>([]);
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

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
    <QuizBackground backgroundImage={db.bg}>
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

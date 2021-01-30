import React from 'react';
import {
  Widget, AlternativesForm, Button, BackArrowLink,
} from 'src/components';

import db from 'db.json';

import { motion } from 'framer-motion';

interface QuestionWidgetProps {
  question: typeof db.questions[0];
  questionIndex: number;
  totalQuestions: number
  onSubmit: () => void
  addResult: (_questionResult: boolean) => void
}

export const QuestionWidget: React.FC<QuestionWidgetProps> = ({
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

  const [isHidden, setIsHidden] = React.useState(false);

  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  function handleSubmitQuestion(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsQuestionSubmitted(true);
    setDisableAlternatives(true);
    setIsHidden(true);

    setTimeout(() => {
      addResult(isCorrect);
      onSubmit();
      setIsHidden(false);
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
        <BackArrowLink href="/" />
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

            const animationDelay = alternativeIndex * 0.1;

            return (
              <Widget.Topic
                key={alternativeId}
                // as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
                as={motion.label}
                transition={{ delay: animationDelay, duration: 0.3 }}
                variants={{
                  show: { opacity: 1, x: '0' },
                  hidden: { opacity: 0, x: '-100%' },
                }}
                initial="hidden"
                // animate="show"
                animate={isHidden ? 'hidden' : 'show'}
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

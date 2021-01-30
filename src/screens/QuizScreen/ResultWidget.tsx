import React from 'react';
import { motion } from 'framer-motion';
import { Widget, Button } from 'src/components';

interface ResultWidgetProps {
  results: boolean[]
  handleOnClick: () => void
  username: string
}

export function ResultWidget({ results, handleOnClick, username }: ResultWidgetProps) {
  const numberOfRightQuestions = results.filter((x) => x).length;
  const user = username ? `, ${username}` : '';

  return (
    <Widget
      as={motion.div}
      transition={{ delay: 0, duration: 0.3 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        Resultado
      </Widget.Header>

      <Widget.Content>
        <h3>
          {`Parabéns${user}!`}
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

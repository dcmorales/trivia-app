import { Button } from '../common/Button';
import AnswerResult from '../AnswerResult';

const ResultScreen = ({
  showScore,
  currentQuestion,
  triviaQuestions,
  score,
  answeredQuestions,
  resetTrivia,
}) => {
  return (
    showScore &&
    currentQuestion > triviaQuestions.length && (
      <div className="result-screen">
        <div className="result-screen__score">
          You scored {score} / {triviaQuestions.length}
        </div>

        <div>
          {answeredQuestions.map((question, i) => {
            return (
              <AnswerResult
                key={`${question.question}${question.userAnswer}`}
                question={question}
              />
            );
          })}
        </div>

        <Button
          title="Play Trivia Challenge again?"
          buttonText="play again?"
          onClick={resetTrivia}
        />
      </div>
    )
  );
};

export default ResultScreen;

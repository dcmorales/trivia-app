import { Button } from '../common/Button';
import AnswerResult from '../AnswerResult';

const ResultScreen = ({
  showScore,
  currentQuestionIdx,
  triviaQuestions,
  score,
  answeredQuestions,
  resetTrivia,
}) => {
  return (
    showScore &&
    currentQuestionIdx + 1 > triviaQuestions.length && (
      <div className="screen-content result-screen">
        <div className="result-screen__score">
          You scored {score} / {triviaQuestions.length}
        </div>

        <div>
          {answeredQuestions.map((question) => {
            return <AnswerResult key={question.question} question={question} />;
          })}
        </div>

        <div>
          <Button
            className="result-screen__button"
            title="Play Trivia Challenge again?"
            buttonText="play again?"
            onClick={resetTrivia}
          />
        </div>
      </div>
    )
  );
};

export default ResultScreen;

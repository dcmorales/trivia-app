import { Button } from './common/Button';
import Question from './Question';

const QuizCard = ({ question, handleAnswerClick, currentQuestion }) => {
  return (
    <div className="screen-container">
      <div className="quiz-card screen-content">
        <Question question={question} classBlock={'quiz-card'} />

        <div>
          <Button
            className="quiz-card__answer-button"
            title="True"
            buttonText="true"
            handleClick={() => handleAnswerClick('True', question)}
          />

          <Button
            className="quiz-card__answer-button"
            title="False"
            buttonText="false"
            handleClick={() => handleAnswerClick('False', question)}
          />
        </div>

        <div>{currentQuestion} of 10</div>
      </div>
    </div>
  );
};

export default QuizCard;

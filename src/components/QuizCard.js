import Question from './Question';

const QuizCard = ({ question, handleAnswerClick, currentQuestion }) => {
  return (
    <div className="screen-container">
      <div className="quiz-card screen-content">
        <Question question={question} classBlock={'quiz-card'} />

        <div>
          <button
            className="quiz-card__answer-button"
            onClick={() => handleAnswerClick('True', question)}
          >
            True
          </button>
          <button
            className="quiz-card__answer-button"
            onClick={() => handleAnswerClick('False', question)}
          >
            False
          </button>
        </div>

        <div>{currentQuestion} of 10</div>
      </div>
    </div>
  );
};

export default QuizCard;

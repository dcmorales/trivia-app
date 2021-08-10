import Question from './Question';

const TriviaCard = ({ question, handleAnswerClick, currentQuestion }) => {
  return (
    <div className="screen-container">
      <div className="trivia-card screen-content">
        <Question question={question} classBlock={'trivia-card'} />

        <div>
          <button
            className="trivia-card__answer-button"
            onClick={() => handleAnswerClick('True', question)}
          >
            True
          </button>
          <button
            className="trivia-card__answer-button"
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

export default TriviaCard;

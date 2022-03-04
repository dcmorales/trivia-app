import Question from './Question';

const AnswerResult = ({ question }) => {
  return (
    <div className="answer-result">
      <div className="answer-result__icon">
        {question.userAnswer === question.correct_answer ? (
          <div className="answer-result__correct">&#43;</div>
        ) : (
          <div className="answer-result__wrong">&minus;</div>
        )}
      </div>

      <div className="answer-result__question-container">
        <Question question={question} />
      </div>
    </div>
  );
};

export default AnswerResult;

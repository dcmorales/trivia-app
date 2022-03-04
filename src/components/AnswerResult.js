import Question from './Question';

const AnswerResult = ({ question }) => {
  return (
    <div className="result-screen__answer-result">
      <div className="result-screen__icon">
        {question.userAnswer === question.correct_answer ? (
          <div className="result-screen__correct">&#43;</div>
        ) : (
          <div className="result-screen__wrong">&minus;</div>
        )}
      </div>

      <div className="result-screen__question-container">
        <Question question={question} />
      </div>
    </div>
  );
};

export default AnswerResult;

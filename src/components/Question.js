import ReactHtmlParser from 'react-html-parser';

const Question = ({ question, isCard }) => {
  return (
    <>
      <h3>{question.category}</h3>
      <div
        className={`${isCard ? 'quiz-card__question' : ''} ${
          question.userAnswer === question.correct_answer
            ? 'correct'
            : question.userAnswer &&
              question.userAnswer !== question.correct_answer
            ? 'not-correct'
            : null
        }`}
      >
        {ReactHtmlParser(question.question)}
      </div>
    </>
  );
};

export default Question;

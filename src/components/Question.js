import ReactHtmlParser from 'react-html-parser';

const Question = ({ question, isCard }) => {
  const isCorrect = question.userAnswer === question.correct_answer;
  const isWrong =
    question.userAnswer && question.userAnswer !== question.correct_answer;

  return (
    <>
      <h3>{question.category}</h3>
      <div
        className={`${isCard ? 'quiz-card__question' : ''} ${
          isCard && isCorrect ? 'quiz-card__correct' : ''
        } ${isCard && isWrong ? 'quiz-card__wrong' : ''}`}
      >
        {ReactHtmlParser(question.question)}
      </div>
    </>
  );
};

export default Question;

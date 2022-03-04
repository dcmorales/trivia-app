import { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import AnswerFeedbackContext from '../contexts/AnswerFeedbackContext';

const Question = ({ question, isCard }) => {
  const { matchedAnswer } = useContext(AnswerFeedbackContext);

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

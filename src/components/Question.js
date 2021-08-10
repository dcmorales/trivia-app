import { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import AnswerFeedbackContext from '../contexts/AnswerFeedbackContext';

const Question = ({ question, classBlock }) => {
  const { matchedAnswer } = useContext(AnswerFeedbackContext);

  return (
    <>
      <div className={`${classBlock}__category`}>{question.category}</div>
      <div
        className={`${classBlock}__question ${
          matchedAnswer
            ? 'correct'
            : matchedAnswer === false
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

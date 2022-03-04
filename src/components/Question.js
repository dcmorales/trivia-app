import ReactHtmlParser from 'react-html-parser';

const Question = ({ question, className }) => {
  return (
    <>
      <h3>{question.category}</h3>
      <div className={`${className ? className : ''}`}>
        {ReactHtmlParser(question.question)}
      </div>
    </>
  );
};

export default Question;

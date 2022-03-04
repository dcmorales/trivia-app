import QuizCard from '../QuizCard';

const QuizScreen = ({
  currentQuestionIdx,
  triviaQuestions,
  handleAnswerClick,
}) => {
  return (
    currentQuestionIdx !== -1 &&
    currentQuestionIdx <= triviaQuestions.length &&
    triviaQuestions
      .filter((question, i) => i === currentQuestionIdx)
      .map((question) => {
        return (
          <QuizCard
            key={question}
            question={question}
            handleAnswerClick={handleAnswerClick}
            currentQuestionIdx={currentQuestionIdx}
          />
        );
      })
  );
};

export default QuizScreen;

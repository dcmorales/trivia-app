import QuizCard from '../QuizCard';

const QuizScreen = ({
  currentQuestionIdx,
  triviaQuestions,
  handleAnswerClick,
}) => {
  return (
    currentQuestionIdx !== -1 &&
    currentQuestionIdx < triviaQuestions.length &&
    triviaQuestions
      .filter((_, i) => i === currentQuestionIdx)
      .map((question) => {
        return (
          <QuizCard
            key={question}
            question={question}
            triviaLength={triviaQuestions.length}
            handleAnswerClick={handleAnswerClick}
            currentQuestionIdx={currentQuestionIdx}
          />
        );
      })
  );
};

export default QuizScreen;

import QuizCard from './QuizCard';

const QuizScreen = ({
  currentQuestion,
  triviaQuestions,
  handleAnswerClick,
}) => {
  return (
    currentQuestion > 0 &&
    currentQuestion <= triviaQuestions.length &&
    triviaQuestions
      .filter((question, i) => i + 1 === currentQuestion)
      .map((question) => {
        return (
          <QuizCard
            key={question}
            question={question}
            handleAnswerClick={handleAnswerClick}
            currentQuestion={currentQuestion}
          />
        );
      })
  );
};

export default QuizScreen;

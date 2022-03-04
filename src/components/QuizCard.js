import { Button } from './common/Button';
import Question from './Question';

const QuizCard = ({
  question,
  handleAnswerClick,
  currentQuestionIdx,
  triviaLength,
}) => {
  const isCorrect = question.userAnswer === question.correct_answer;
  const isWrong =
    question.userAnswer && question.userAnswer !== question.correct_answer;
  const className = `quiz-card__question ${
    isCorrect ? 'quiz-card__correct' : isWrong ? 'quiz-card__wrong' : ''
  }`;

  return (
    <div className="screen-content quiz-card">
      <Question question={question} className={className} />

      <div>
        <Button
          className="quiz-card__answer-button"
          title="True"
          buttonText="true"
          onClick={() => handleAnswerClick('True', question)}
        />

        <Button
          className="quiz-card__answer-button"
          title="False"
          buttonText="false"
          onClick={() => handleAnswerClick('False', question)}
        />
      </div>

      <div>
        {currentQuestionIdx + 1} of {triviaLength}
      </div>
    </div>
  );
};

export default QuizCard;

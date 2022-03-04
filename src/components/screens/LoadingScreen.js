import { Button } from '../common/Button';

const LoadingScreen = ({
  triviaQuestions,
  currentQuestionIdx,
  errorMessage,
  resetTrivia,
}) => {
  return !errorMessage ? (
    !triviaQuestions.length && currentQuestionIdx !== -1 && (
      <div className="screen-content loading-screen">
        <div className="loading-screen__spinner" />
        <div>...loading</div>
      </div>
    )
  ) : (
    <div className="screen-content error-screen">
      <p className="error-screen__message">{errorMessage}</p>

      <Button title="Back to Home" buttonText="back" onClick={resetTrivia} />
    </div>
  );
};

export default LoadingScreen;

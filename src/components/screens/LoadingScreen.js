import { Button } from '../common/Button';

const LoadingScreen = ({
  triviaQuestions,
  currentQuestionIdx,
  errorMessage,
  resetTrivia,
}) => {
  return !errorMessage ? (
    !triviaQuestions.length && currentQuestionIdx !== -1 && (
      <div className="screen-container">
        <div className="loading-screen">
          <div className="loading-screen__spinner" />
          <div>...loading</div>
        </div>
      </div>
    )
  ) : (
    <div className="screen-container">
      <Button title="Back to Home" buttonText="back" onClick={resetTrivia} />

      <div className="loading-screen">{errorMessage}</div>
    </div>
  );
};

export default LoadingScreen;

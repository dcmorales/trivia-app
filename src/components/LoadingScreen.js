const LoadingScreen = ({
  triviaQuestions,
  currentQuestion,
  errorMessage,
  resetTrivia,
}) => {
  return !errorMessage ? (
    !triviaQuestions.length && currentQuestion === 1 && (
      <div className="screen-container">
        <div className="loading-screen">
          <div className="loading-screen__spinner" />
          <div>...loading</div>
        </div>
      </div>
    )
  ) : (
    <div>
      <button onClick={() => resetTrivia()}>Back</button>
      {errorMessage}
    </div>
  );
};

export default LoadingScreen;

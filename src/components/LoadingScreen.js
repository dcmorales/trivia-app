const LoadingScreen = ({ triviaQuestions, currentQuestion, errorMessage }) => {
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
    <div>{errorMessage}</div>
  );
};

export default LoadingScreen;

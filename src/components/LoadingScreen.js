const LoadingScreen = ({ triviaQuestions, currentQuestion }) => {
  return (
    !triviaQuestions.length &&
    currentQuestion === 1 && (
      <div className="screen-container">
        <div className="loading-screen">
          <div className="loading-screen__spinner" />
          <div>...loading</div>
        </div>
      </div>
    )
  );
};

export default LoadingScreen;

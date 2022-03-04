const HomeScreen = ({ currentQuestion, handleBeginClick }) => {
  return (
    currentQuestion < 1 && (
      <div className="screen-container">
        <div className="home screen-content">
          <h1 className="home__header">Welcome to the Trivia Challenge</h1>

          <h2 className="home__directions">
            You will be presented with 10 True or False questions.
          </h2>

          <p>Can you score 100%?</p>

          <button
            title="Begin Trivia Challenge"
            onClick={() => handleBeginClick()}
          >
            begin
          </button>
        </div>
      </div>
    )
  );
};

export default HomeScreen;

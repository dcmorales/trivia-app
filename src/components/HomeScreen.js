const HomeScreen = ({ currentQuestion, handleBeginClick }) => {
  return (
    currentQuestion < 1 && (
      <div className="screen-container">
        <div className="home screen-content">
          <h1 className="home__header">Welcome to the Trivia Challenge</h1>
          <div className="home__directions">
            You will be presented with 10 True or False questions.
          </div>
          <div>Can you score 100%?</div>
          <button onClick={() => handleBeginClick()}>begin</button>
        </div>
      </div>
    )
  );
};

export default HomeScreen;

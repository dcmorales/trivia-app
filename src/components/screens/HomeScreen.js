import { Button } from '../common/Button';

const HomeScreen = ({ currentQuestionIdx, handleBeginClick }) => {
  return (
    currentQuestionIdx === -1 && (
      <div className="screen-container">
        <div className="home screen-content">
          <h1 className="home__header">Welcome to the Trivia Challenge</h1>

          <h2 className="home__directions">
            You will be presented with 10 True or False questions.
          </h2>

          <p>Can you score 100%?</p>

          <Button
            title="Begin Trivia Challenge"
            buttonText="begin"
            onClick={handleBeginClick}
          />
        </div>
      </div>
    )
  );
};

export default HomeScreen;

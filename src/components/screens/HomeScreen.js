import { Button } from '../common/Button';

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

          <Button
            title="Begin Trivia Challenge"
            buttonText="begin"
            handleClick={handleBeginClick}
          />
        </div>
      </div>
    )
  );
};

export default HomeScreen;

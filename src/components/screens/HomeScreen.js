import { Button } from '../common/Button';

const HomeScreen = ({ currentQuestionIdx, handleBeginClick }) => {
  return (
    currentQuestionIdx === -1 && (
      <div className="screen-content home-screen">
        <h1 className="home-screen__header">Welcome to the Trivia Challenge</h1>

        <h2 className="home-screen__directions">
          You will be presented with 10 True or False questions.
        </h2>

        <p>Can you score 100%?</p>

        <Button
          title="Begin Trivia Challenge"
          buttonText="begin"
          onClick={handleBeginClick}
        />
      </div>
    )
  );
};

export default HomeScreen;

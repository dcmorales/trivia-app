import { Button } from '../common/Button';

const ErrorScreen = ({ errorMessage, resetError }) => {
  return (
    <div className="screen-content error-screen">
      <p className="error-screen__message">{errorMessage}</p>

      <Button title="Back to Home" buttonText="back" onClick={resetError} />
    </div>
  );
};

export default ErrorScreen;

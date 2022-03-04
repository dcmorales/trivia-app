export const Button = ({ title, buttonText, handleClick }) => {
  return (
    <button title={title} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

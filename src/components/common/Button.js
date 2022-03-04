export const Button = ({ className, title, buttonText, handleClick }) => {
  return (
    <button
      className={`${className ? className : ''}`}
      title={title}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

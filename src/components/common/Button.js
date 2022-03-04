export const Button = ({ className, title, buttonText, onClick }) => {
  return (
    <button
      className={`${className ? className : ''}`}
      title={title}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

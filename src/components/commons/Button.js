const Button = ({ text, classes, ...rest }) => {
  return (
    <button className={`font-semibold text-base px-8 py-1 rounded-lg outline-none ${classes}`} {...rest}>
      {text}
    </button>
  );
};

export default Button;

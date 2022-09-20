const ErrorText = ({ text, classes, ...rest }) => {
  return (
    <p className={`text-[#D80027] text-xs font-light ml-4 ${classes} `} {...rest}>
      {text}
    </p>
  );
};

export default ErrorText;

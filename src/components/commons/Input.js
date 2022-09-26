const Input = ({ classes, ...rest }) => {
  return (
    <input
      className={`outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 text-xs ${classes}`}
      {...rest}
    />
  );
};

export default Input;

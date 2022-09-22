const LoginInput = ({ classes, ...rest }) => {
  return (
    <input
      className={`rounded-md w-full outline-none bg-[#F5F6FA] border border-[#E7E7E7] p-2 ${classes}`}
      {...rest}
    />
  );
};

export default LoginInput;

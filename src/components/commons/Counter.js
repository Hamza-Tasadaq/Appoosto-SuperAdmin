const Counter = ({
  label = "",
  value = "",
  minusHandler = () => {},
  plusHandler = () => {},
}) => {
  return (
    <div className="space-y-2">
      <h1 className="font-semibold text-sm">{label}</h1>
      <div className=" flex h-10">
        <div
          onClick={minusHandler}
          className="rounded-l-lg bg-[#F2F2F3] w-10 border border-[#484A5442] text-[#31363A] font-semibold cursor-pointer flex justify-center items-center"
        >
          -
        </div>
        <div className="border-y border-[#484A5442] text-xs flex justify-center items-center w-full">
          {value}
        </div>
        <div
          onClick={plusHandler}
          className="rounded-r-lg bg-[#14365DCC] cursor-pointer w-10 border text-[#ffffff] font-semibold border-[#484A5442] flex justify-center items-center"
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Counter;

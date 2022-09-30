const Counter = ({ text }) => {
  return (
    <div className=" flex h-10">
      <div className="rounded-l-lg bg-[#F2F2F3] w-10 border border-[#484A5442] text-[#31363A] font-semibold cursor-pointer flex justify-center items-center">
        {" "}
        -
      </div>
      <div className="border-y border-[#484A5442] flex justify-center items-center w-32 lg:w-40">
        {text}
      </div>
      <div className="rounded-r-lg bg-[#14365DCC] cursor-pointer w-10 border text-[#ffffff] font-semibold border-[#484A5442] flex justify-center items-center">
        {" "}
        +
      </div>
    </div>
  );
};

export default Counter;

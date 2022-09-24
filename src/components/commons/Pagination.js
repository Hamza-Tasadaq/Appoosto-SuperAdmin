import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const iconStyle = { color: "#14365D" };

const Pagination = ({
  currentPage = "",
  totalPages = "",
  setPage = () => {},
}) => {
  const paginate = (offSet) => {
    setPage(offSet);
  };

  return (
    <div className="flex justify-center items-center space-x-8 my-4">
      <div
        onClick={() => {
          if (currentPage > 1) paginate(1);
        }}
        className="flex items-center"
      >
        <IoIosArrowBack style={iconStyle} />
        <IoIosArrowBack style={iconStyle} />
      </div>
      <div className="flex items-center space-x-3">
        <IoIosArrowBack
          onClick={() => {
            if (currentPage > 1) paginate(currentPage - 1);
          }}
          style={iconStyle}
        />
        <div className="flex items-center space-x-2">
          <p
            className={`bg-[#8787D5] w-9 h-9 flex items-center justify-center rounded-full font-bold text-[#14365D]`}
          >
            {currentPage}
          </p>
          <div className="w-1 h-1 rounded-full bg-[#14365D]"></div>
          <div className="w-1 h-1 rounded-full bg-[#14365D]"></div>
          <div className="w-1 h-1 rounded-full bg-[#14365D]"></div>
          <p className="bg-[#E3E3F0] w-9 h-9 flex items-center justify-center rounded-full font-bold text-[#14365D]">
            {totalPages}
          </p>
        </div>
        <IoIosArrowForward
          onClick={() => {
            if (currentPage < totalPages) paginate(currentPage + 1);
          }}
          style={iconStyle}
        />{" "}
      </div>
      <div
        onClick={() => {
          if (currentPage < totalPages) paginate(totalPages);
        }}
        className="flex items-center"
      >
        <IoIosArrowForward style={iconStyle} />
        <IoIosArrowForward style={iconStyle} />
      </div>
    </div>
  );
};

export default Pagination;

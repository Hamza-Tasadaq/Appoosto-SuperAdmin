import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = ({ classes, value, dropdownValues = [], ...rest }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        className={`outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 cursor-pointer flex items-center justify-between ${classes}`}
      >
        <h3>{value}</h3>
        <AiFillCaretDown />
      </div>
      {isClicked && (
        <div className="bg-[#ffffff] border border-[#d9d9d9] z-50 drop-shadow-xl absolute w-full">
          <ul>
            {dropdownValues?.map((text) => (
              <li
                onClick={() => {
                  setIsClicked(!isClicked);
                }}
                className="py-1 px-3  duration-300 hover:bg-[#D9D9D9]"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

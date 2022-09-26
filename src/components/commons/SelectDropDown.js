import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const SelectDropDown = ({
  classes,
  value,
  dropdownValues = [],
  updateDropDown,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const handleDropDownClick = (id, name) => {
    updateDropDown(id);
    setIsSelected(name);
    setIsClicked(!isClicked);
  };
  return (
    <div className="relative">
      <div
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        className={`outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 cursor-pointer flex items-center justify-between ${classes}`}
      >
        <h3 className={`${!isSelected && "text-[#9CACCB]"}`}>
          {isSelected ? isSelected : value}
        </h3>
        <AiFillCaretDown />
      </div>
      {isClicked && (
        <div className="bg-[#ffffff] border border-[#d9d9d9] z-50 drop-shadow-xl absolute w-full">
          <ul>
            {dropdownValues?.map(({ name, id }, index) => (
              <li
                key={index + 1}
                onClick={() => handleDropDownClick(id, name)}
                className="py-1 px-3  duration-300 hover:bg-[#D9D9D9]"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectDropDown;

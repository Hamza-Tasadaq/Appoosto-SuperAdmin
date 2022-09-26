import { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = ({
  classes,
  value,
  dropdownValues = [],
  updateDropDown,
  ...rest
}) => {
  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isClicked && ref.current && !ref.current.contains(e.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isClicked]);

  const handleDropDownClick = () => {
    updateDropDown();
    setIsClicked(!isClicked);
  };
  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => {
          setIsClicked(true);
        }}
        className={`outline-none text-xs border border-[#D9D9D9] rounded-lg px-3 py-2 cursor-pointer flex items-center justify-between ${classes}`}
      >
        <h3>{value}</h3>
        <AiFillCaretDown />
      </div>
      {isClicked && (
        <div className="bg-[#ffffff] border border-[#d9d9d9] z-50 drop-shadow-xl absolute w-full">
          <ul>
            {dropdownValues?.map((text, index) => (
              <li
                key={index + 1}
                onClick={() => handleDropDownClick()}
                className="py-1 px-3 text-xs duration-300 hover:bg-[#D9D9D9]"
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

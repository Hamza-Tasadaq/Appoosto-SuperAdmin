import { useState } from "react";

const Switch = ({ text = "" }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <label className="inline-flex flex-row-reverse relative space-x-2 items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={enabled}
        readOnly
      />
      <div
        onClick={() => {
          setEnabled(!enabled);
        }}
        className="w-11 h-6 bg-[#E9E9E9] rounded-full peer  peer-focus:[#FF6422]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[22px] after:bg-[white] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-[#FF6422] to-[#D85C2700]"
      />

      <span className=" text-base font-semibold text-[#809091]">{text}</span>
    </label>
  );
};

export default Switch;

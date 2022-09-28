import { useState } from "react";
import Button from "../../commons/Button";
import Switch from "../../commons/Switch";
import Trash from "../../commons/Trash";

const ResturantItem = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="bg-[#FFFFFF] rounded-lg px-6 py-4 ">
      <div onClick={() => setIsClicked(true)} className="flex">
        <div className="flex-1">
          <h1 className="font-bold">Username</h1>
        </div>
        <div className="flex-1">
          <h2 className="font-medium">restaurant-name</h2>
        </div>
        <div className="flex-1">
          <h2 className="font-medium">mail@mail.com</h2>
        </div>
        <div className="flex-1">
          <h2 className="font-medium">23/12/2021 08:4am</h2>
        </div>
        {isClicked && (
          <div className="flex-1 flex items-center justify-end">
            <Trash />
            <Switch />
          </div>
        )}
      </div>

      {isClicked && (
        <div className="flex items-center justify-end space-x-6 mt-6">
          <Button
            onClick={() => {
              setIsClicked(false);
            }}
            classes="bg-[#14365D] text-[#ffffff]"
            text="Back"
          />
          <Button classes="bg-[#009959] text-[#ffffff]" text="Save" />
        </div>
      )}
    </div>
  );
};

export default ResturantItem;

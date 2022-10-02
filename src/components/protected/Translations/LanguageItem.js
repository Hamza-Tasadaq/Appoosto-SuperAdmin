import { useState } from "react";
import Button from "../../commons/Button";
import Input from "../../commons/Input";
import Switch from "../../commons/Switch";
import Trash from "../../commons/Trash";

const LanguageItem = ({ data }) => {
  const [languageData, setLanguageData] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div
      className={` bg-[#ffffff] space-y-4 rounded-lg p-4 ${
        isOpen && " border border-[#EF5350] "
      }`}
    >
      <div className="flex items-center">
        <div className="flex-1 flex justify-between items-center">
          <h1 className="font-bold">{languageData.name}</h1>
          <h2 className="font-semibold">{languageData.iso_code}</h2>
          <div>
            {!isOpen && (
              <div className="bg-[#3A86FE] border border-[#D9D9D9] text-[#ffffff] rounded-full w-28 text-center">
                <p className="font-semibold">Active</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 flex justify-end ">
          {isOpen ? (
            <div className="flex items-center space-x-4">
              <div>
                <Switch text="active" enable={languageData.active} />
              </div>
              <Trash />
            </div>
          ) : (
            <Button
              onClick={() => {
                setIsOpen(true);
              }}
              text="Edit Translation"
              classes={"bg-[#D85C27] text-[#ffffff]"}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="flex items-center">
          <div className="flex flex-1 items-center space-x-4">
            <Input
              value={languageData.name}
              onChange={(e) => {
                setLanguageData({
                  ...languageData,
                  name: e.target.value,
                });
              }}
            />
            <Input
              value={languageData.iso_code}
              onChange={(e) => {
                setLanguageData({
                  ...languageData,
                  iso_code: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex-1 space-x-4 flex items-center justify-end">
            <Button
              text="Back"
              onClick={() => {
                setIsOpen(false);
              }}
              classes={"text-[#ffffff] bg-[#14365D]"}
            />
            <Button text="Save" classes={"text-[#ffffff] bg-[#009959]"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageItem;

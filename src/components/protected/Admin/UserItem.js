import { useState } from "react";
import { TrashIcon } from "../../../icons";
import { Button, Input, Switch, Dropdown } from "../../index";

const UserItem = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="rounded-lg  bg-[#ffffff] py-4 px-6 space-y-4">
      <div
        onClick={() => {
          setIsClicked(true);
        }}
        className="font-medium  flex items-center space-x-2"
      >
        <div className="flex-1">
          <h1 className="font-semibold w-full">User</h1>
        </div>
        <div className="flex-1">
          <h2>mail@mail.com</h2>
        </div>
        <div className="flex-1">
          {isClicked ? (
            <Dropdown
              value={"Role"}
              dropdownValues={["Value1", "Value2", "Value3", "Value4"]}
            />
          ) : (
            <h2>Role 1</h2>
          )}
        </div>
        <div className="flex-1">
          {isClicked ? (
            <Input
              type="password"
              value="12345678"
              classes={"tracking-[0.2rem] w-full"}
            />
          ) : (
            <input
              type="password"
              value="12345678"
              className="outline-none bg-transparent tracking-[0.2rem]"
              disabled={true}
            />
          )}
        </div>

        <div className="flex-1 flex justify-end">
          {isClicked && (
            <div className="flex items-center">
              <div className="bg-[#F0E3E7] rounded-lg p-1.5 cursor-pointer">
                <TrashIcon />
              </div>
              <Switch />
            </div>
          )}
        </div>
      </div>
      {isClicked && (
        <div className="flex items-center justify-end space-x-6">
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

export default UserItem;

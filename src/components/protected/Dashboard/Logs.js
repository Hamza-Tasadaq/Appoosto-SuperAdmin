import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import Dropdown from "../../commons/Dropdown";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Logs = () => {
  return (
    <div className="bg-[#ffffff] rounded-lg px-5 py-6">
      <div className="flex items-start">
        <div className="w-1/4">
          <h1 className="px-3 py-2 font-bold text-lg">Logs(117)</h1>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <div className="border border-[#D9D9D9] rounded-lg px-3 py-2 cursor-pointer flex items-center justify-between ">
                <DatePicker
                  placeholderText="From Date"
                  className="outline-none"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="border border-[#D9D9D9] rounded-lg px-3 py-2 cursor-pointer flex items-center justify-between ">
                <DatePicker
                  placeholderText="To Date"
                  className="outline-none"
                />
                <BsCalendar3 />
              </div>
            </div>
            <div className="flex-1">
              <Dropdown
                value={"Today"}
                dropdownValues={["value 1", "value 2"]}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <Dropdown
                value={"Guests"}
                dropdownValues={["value 1", "value 2"]}
              />
            </div>
            <div className="flex-1">
              <Dropdown
                value={"Desktop"}
                dropdownValues={["value 1", "value 2"]}
              />
            </div>
            <div className="flex-1">
              <Dropdown
                value={"Landing Page"}
                dropdownValues={["value 1", "value 2"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;

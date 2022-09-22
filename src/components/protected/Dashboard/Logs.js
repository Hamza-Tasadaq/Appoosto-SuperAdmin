import React from "react";
import Dropdown from "../../commons/Dropdown";
import DatePicker from "../../commons/Datepicker";
import { CalendarIcon } from "../../../icons";

import { BarChart } from "../../index";

const Logs = () => {
  return (
    <div className="bg-[#ffffff] rounded-lg px-5 py-6 space-y-4">
      <div className="flex items-start">
        <div className="w-1/4">
          <h1 className="px-3 py-2 font-bold text-lg">Logs(117)</h1>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <div className="border border-[#D9D9D9] rounded-lg px-3 py-2 cursor-pointer flex items-center justify-between ">
                <DatePicker placeholderText="From Date" />
                <CalendarIcon />
              </div>
            </div>
            <div className="flex-1">
              <div className="border border-[#D9D9D9] rounded-lg px-3 py-2 cursor-pointer flex items-center justify-between ">
                <DatePicker placeholderText="To Date" />
                <CalendarIcon />
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

      <div className="bg-[#EFF3F7] p-4 rounded-lg">
        <h1 className="text-[#14355E] font-semibold border-b border-[#14365D80] py-1 pb-2">
          Top referrers
        </h1>
        <div className="flex space-x-5 lg:space-x-8">
          <div className="mt-6 lg:mt-10 space-y-2">
            <div className="flex items-center">
              <h3 className="w-36 lg:w-40 text-sm lg:text-base text-[#000000]">
                Direct,Email,Sms
              </h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
            <div className="flex items-center">
              <h3 className="w-36 lg:w-40 text-sm lg:text-base text-[#000000]">
                Google
              </h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
            <div className="flex items-center">
              <h3 className="w-36 lg:w-40 text-sm lg:text-base text-[#000000]">
                Direct,Email,Sms
              </h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>{" "}
            <div className="flex items-center">
              <h3 className="w-36 lg:w-40 text-sm lg:text-base text-[#000000]">
                Google
              </h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
          </div>
          <div className="flex-1">
            <BarChart />
          </div>
        </div>
      </div>

      <div className="bg-[#EFF3F7] p-4 rounded-lg">
        <h1 className="text-[#14355E] font-semibold border-b border-[#14365D80] py-1 pb-2">
          Top referrers
        </h1>
        <div className="flex space-x-5 lg:space-x-8">
          <div className="mt-6 lg:mt-10 space-y-2">
            <div className="flex items-center">
              <h3 className="w-36 lg:w-40 text-sm lg:text-base text-[#000000]">
                Italy
              </h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
            <div className="flex items-center">
              <h3 className="w-36 lg:w-40 text-sm lg:text-base text-[#000000]">
                Spain
              </h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
            <div className="flex items-center">
              <h3 className="w-36 lg:w-40 text-sm lg:text-base text-[#000000]">
                Germany
              </h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>{" "}
            <div className="flex items-center">
              <h3 className="w-36 lg:w-40 text-sm lg:text-base text-[#000000]">
                France
              </h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
          </div>
          <div className="flex-1">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;

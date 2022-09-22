import React from "react";
import { CalendarIcon } from "../../../icons";
import Dropdown from "../../commons/Dropdown";
import DatePicker from "../../commons/Datepicker";
import Heading from "./Heading";
import { BarChart, PieChart } from "../../index";

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
        <Heading text="Top referrers" />
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
        <Heading text="Top locations" />
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

      <div className="flex space-x-4">
        <div className="bg-[#EFF3F7] space-y-4 flex-1 p-4 rounded-lg">
          <Heading text="Top Platforms" />

          <div className=" space-y-3">
            <div className="flex justify-between items-center">
              <h3 className=" text-sm lg:text-base text-[#000000]">Chrome</h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h3 className=" text-sm lg:text-base text-[#000000]">Edge</h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h3 className=" text-sm lg:text-base text-[#000000]">Safari</h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
          </div>
          <PieChart />
        </div>
        <div className="bg-[#EFF3F7] space-y-4 flex-1 p-4 rounded-lg">
          <Heading text=" Top Browswers" />

          <div className=" space-y-3">
            <div className="flex justify-between items-center">
              <h3 className=" text-sm lg:text-base text-[#000000]">Windows</h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h3 className=" text-sm lg:text-base text-[#000000]">Ios</h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h3 className=" text-sm lg:text-base text-[#000000]">Android</h3>
              <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                {" "}
                125
              </h1>
            </div>
          </div>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Logs;

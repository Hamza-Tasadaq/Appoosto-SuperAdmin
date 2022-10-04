import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { CalendarIcon } from "../../../icons";
import Dropdown from "../../commons/Dropdown";
import DatePicker from "../../commons/Datepicker";
import { Loading } from "../../index";
import Heading from "./Heading";
import { BarChart, PieChart } from "../../index";
import { DASHBOARD_DATA } from "../../../graphQl";

const Logs = () => {
  const {
    data: dashboardData,
    loading: dashboardLoading,
    error: dashboardError,
  } = useQuery(DASHBOARD_DATA);

  const [topLoactions, setTopLocations] = useState([]);
  const [topBrowsers, setTopBrowsers] = useState([]);
  const [topPlatForms, setTopPlatforms] = useState([]);

  useEffect(() => {
    if (dashboardData) {
      const { topBrowsers, topLocations, topPlatForms } =
        dashboardData?.dashBoardQuery.responscedata;

      setTopLocations(topLocations);
      setTopBrowsers(topBrowsers);
      setTopPlatforms(topPlatForms);
    }
  }, [dashboardData]);

  if (dashboardLoading) {
    return <Loading />;
  }

  if (dashboardError) {
    return (
      <div className="flex justify-center">
        <h1 className=" text-[#D85C27] font-bold text-2xl">Not Authorized</h1>
      </div>
    );
  }
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
        <div className="flex space-x-5 lg:space-x-8 mt-5">
          <div className="mt-6  space-y-2">
            {topLoactions?.map(({ name, count }, index) => (
              <div key={index} className="flex items-center">
                <h3 className="w-36 lg:w-40 text-sm lg:text-base text-[#000000]">
                  {name}
                </h3>
                <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                  {count}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <BarChart chartData={topLoactions} />
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="bg-[#EFF3F7] space-y-4 flex-1 p-4 rounded-lg">
          <Heading text="Top Platforms" />

          <div className=" space-y-3">
            {topPlatForms.map(({ name, count }, index) => (
              <div key={index} className="flex justify-between items-center">
                <h3 className=" text-sm lg:text-base text-[#000000]">{name}</h3>
                <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                  {count}
                </h1>
              </div>
            ))}
          </div>
          <PieChart chartData={topPlatForms} />
        </div>
        <div className="bg-[#EFF3F7] space-y-4 flex-1 p-4 rounded-lg">
          <Heading text=" Top Browswers" />

          <div className=" space-y-3">
            {topBrowsers.map(({ name, count }, index) => (
              <div key={index} className="flex justify-between items-center">
                <h3 className=" text-sm lg:text-base text-[#000000]">{name}</h3>
                <h1 className="bg-[#14355E] rounded-full text-center py-[2px] px-6 lg:px-8 text-[#ffffff] font-medium lg:font-semibold text-sm lg:text-base">
                  {count}
                </h1>
              </div>
            ))}
          </div>
          <PieChart chartData={topBrowsers} />
        </div>
      </div>
    </div>
  );
};

export default Logs;

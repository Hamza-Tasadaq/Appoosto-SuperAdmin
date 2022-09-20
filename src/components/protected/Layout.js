import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="bg-[#EEF5FC] min-h-screen">
      <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <div className="flex px-4 pt-24 relative">
        <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        <div className=" w-full  lg:ml-72 p-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

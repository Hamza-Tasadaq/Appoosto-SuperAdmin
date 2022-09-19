import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="bg-[#EEF5FC] min-h-screen">
      <Header />
      <div className="flex px-4 pt-24 relative">
        <Sidebar />
        <div className="bg-[#ffffff] rounded-lg w-full  ml-72 p-5 boxShadow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

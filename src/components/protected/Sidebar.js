import { RiCloseCircleLine } from "react-icons/ri";
import Navbar from "./Navbar";

const Sidebar = ({ setShowSideBar = () => {}, showSideBar = "" }) => {
  return (
    <div
      className={`${
        showSideBar ? "left-0" : "-left-[500px]"
      } bg-[#FFFFFF] lg:rounded-lg p-4 lg:left-4 w-64 boxShadow duration-300 fixed top-0 lg:top-24 bottom-0 lg:border-none lg:bottom-2 z-50 border border-r-[#14365D] `}
    >
      <div
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
        className="absolute lg:hidden top-10 -right-4 bg-[#ffffff] rounded-full border-r border-[#14365D] cursor-pointer"
      >
        <RiCloseCircleLine
          style={{ color: "#14365D", fontSize: "1.5rem", background: "#fffff" }}
        />
      </div>
      <div className="lg:hidden flex justify-center">
        <img src="./assets/icons/logo.svg" alt="logo" />
      </div>
      <div className="my-8 lg:my-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Sidebar;

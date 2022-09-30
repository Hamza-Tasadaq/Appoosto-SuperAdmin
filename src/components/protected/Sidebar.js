import { useNavigate } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import Navbar from "./Navbar";
import { clearItem } from "../../services";

const Sidebar = ({ setShowSideBar = () => {}, showSideBar = "" }) => {
  const navigate = useNavigate();
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

      <div
        onClick={() => {
          clearItem("token");
          navigate("/login");
        }}
        className="absolute bottom-8 left-1/2 cursor-pointer -translate-x-1/2 flex items-center space-x-4"
      >
        <FiLogOut
          style={{ color: "#D85C27", fontSize: "1.5rem", fontWeight: "bold" }}
        />
        <h2 className="text-[#D85C27] font-semibold text-lg">Logout</h2>
      </div>
    </div>
  );
};

export default Sidebar;

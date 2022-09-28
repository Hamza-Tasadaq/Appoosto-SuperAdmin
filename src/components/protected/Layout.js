import { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../commons/Container";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="bg-[#EEF5FC] min-h-screen">
      <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <Container>
        <div className="flex px-4 pt-24 relative overflow-x-hidden">
          {!pathname.includes("profile") && (
            <Sidebar
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar}
            />
          )}
          <div
            className={` w-full  ${
              !pathname.includes("profile") && "lg:ml-72"
            } p-5`}
          >
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Layout;

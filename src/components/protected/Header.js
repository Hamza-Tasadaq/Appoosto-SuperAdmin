import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ showSideBar, setShowSideBar = () => {} }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#ffffff] px-8 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-4">
        <div
          onClick={() => {
            setShowSideBar(true);
          }}
          className="lg:hidden cursor-pointer"
        >
          <GiHamburgerMenu />
        </div>

        <img src="./assets/icons/logo.svg" alt="logo" />
      </div>
      <div
        onClick={() => {
          navigate("/profile");
        }}
        className="flex items-center space-x-2"
      >
        <div className="text-right">
          <h1 className="font-semibold text-lg">John Doe</h1>
          <p className="text-sm">User</p>
        </div>
        <img
          className="w-11 h-11"
          src="./assets/images/avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;

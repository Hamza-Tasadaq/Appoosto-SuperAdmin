import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({ NavItemData = {}, setShowSideBar = () => {} }) => {
  const location = useLocation();
  const { text = "", href = "" } = NavItemData;
  console.log();
  return (
    <NavLink
      onClick={() => {
        setShowSideBar(false);
      }}
      to={href}
    >
      <div
        className={`${
          location.pathname === href && "bg-[#14365D] text-[#ffffff] font-bold"
        } rounded-lg p-3 flex items-center font-semibold space-x-3`}
      >
        <h1>{text}</h1>
      </div>
    </NavLink>
  );
};

const NavBarData = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: "/admin",
    text: "Admin",
  },
  {
    href: "/restaurants",
    text: "Restaurants",
  },
  {
    href: "/plans",
    text: "Plans",
  },
  {
    href: "/subscriptions",
    text: "Subscriptions",
  },
  {
    href: "/translations",
    text: "Translations",
  },
];
const Navbar = () => {
  return (
    <div>
      {NavBarData.map((NavBarItem) => (
        <NavItem
          key={NavBarItem.href}
          //   setShowSideBar={setShowSideBar}
          NavItemData={NavBarItem}
        />
      ))}
    </div>
  );
};

export default Navbar;

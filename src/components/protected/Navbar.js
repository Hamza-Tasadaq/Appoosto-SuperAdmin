import { NavLink } from "react-router-dom";

const NavItem = ({ NavItemData = {}, setShowSideBar = () => {} }) => {
  const { text = "", href = "" } = NavItemData;
  return (
    <NavLink
      onClick={() => {
        setShowSideBar(false);
      }}
      to={href}
    >
      {({ isActive }) => (
        <div
          className={`${
            isActive && "bg-[#14365D] text-[#ffffff] font-bold"
          } rounded-lg p-3 flex items-center font-semibold space-x-3`}
        >
          {console.log(isActive)}
          <h1>{text}</h1>
        </div>
      )}
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

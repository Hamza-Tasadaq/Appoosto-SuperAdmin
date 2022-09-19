const Header = () => {
  return (
    <div className="bg-[#ffffff] px-8 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <img src="./assets/icons/logo.svg" alt="logo" />

      <div className="flex items-center space-x-2">
        <div className="text-right">
            <h1 className="font-semibold text-lg">John Doe</h1>
            <p className="text-sm">User</p>
        </div>
        <img src="./assets/images/avatar.png" alt="avatar" />
      </div>
    </div>
  );
};

export default Header;

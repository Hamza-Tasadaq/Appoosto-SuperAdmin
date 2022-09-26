import { useState } from "react";

import { Admins, Permissions } from "../components";

const tabs = {
  1: Admins,
  2: Permissions,
};

const Admin = () => {
  const [tab, setTab] = useState(1);
  const Tab = tabs[tab];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pr-4">
        <h2 className="text-[#14365D] font-bold text-lg">
          {tab === 1 ? "Add Admin" : "Add Permission"}
        </h2>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              setTab(2);
            }}
            className={`${
              tab === 2 ? "bg-[#14365D] text-[#ffffff]" : "text-[#14365D]"
            } border border-[#14365D] px-4 py-1 rounded-lg font-semibold text-base`}
          >
            Permissions
          </button>
          <button
            onClick={() => {
              setTab(1);
            }}
            className={`${
              tab === 1 ? "bg-[#14365D] text-[#ffffff]" : "text-[#14365D]"
            } border border-[#14365D] px-4 py-1 rounded-lg font-semibold text-base`}
          >
            Admins
          </button>
        </div>
      </div>
      <Tab />
    </div>
  );
};

export default Admin;

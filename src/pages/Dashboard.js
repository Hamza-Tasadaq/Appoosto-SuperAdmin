import { useEffect, useState } from "react";
import { Home, Logs } from "../components";

import { useMutation } from "@apollo/client";
import { CREATE_PERMISSION } from "../graphQl/Mutation";

const tabs = {
  1: Logs,
  2: Home,
};

const Dashboard = () => {
  const [tab, setTab] = useState(1);
  const Tab = tabs[tab];

  const [createPermission, { data, loading, error }] =
    useMutation(CREATE_PERMISSION);

  useEffect(() => {
    const r = async () => {
      const res = await createPermission({
        variables: {
          name: "Permission 1",
        },
      });

    };
    r();
  }, [createPermission]);
  console.log(error, loading,data);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pr-4">
        <h2 className="text-[#14365D] font-bold text-lg">Dashboard</h2>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              setTab(2);
            }}
            className={`${
              tab === 2 ? "bg-[#14365D] text-[#ffffff]" : "text-[#14365D]"
            } border border-[#14365D] px-4 py-1 rounded-lg font-semibold text-base`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setTab(1);
            }}
            className={`${
              tab === 1 ? "bg-[#14365D] text-[#ffffff]" : "text-[#14365D]"
            } border border-[#14365D] px-4 py-1 rounded-lg font-semibold text-base`}
          >
            Logs
          </button>
        </div>
      </div>
      <Tab />
    </div>
  );
};

export default Dashboard;

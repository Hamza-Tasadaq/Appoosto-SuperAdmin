import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PAGINATION_DATA, GET_PERMISSIONS_ID } from "../../../graphQl";
import { Button, Input, Switch, SelectDropDown, Trash } from "../../index";

const UserItem = ({ adminData }) => {
  const [admins, setAdmins] = useState(adminData);

  const { data: paginationData } = useQuery(GET_PAGINATION_DATA, {
    variables: {
      page: 1,
      size: 1,
    },
  });
  const { data: permissionsData } = useQuery(GET_PERMISSIONS_ID, {
    variables: {
      page: 1,
      size: paginationData?.getPermission.responscedata.totalItems,
    },
  });

  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="rounded-lg  bg-[#ffffff] py-4 px-6 space-y-6">
      <div
        onClick={() => {
          setIsClicked(true);
        }}
        className="font-medium  flex items-center space-x-2"
      >
        <div className="flex-1">
          <h1 className="font-semibold w-full">{admins.username}</h1>
        </div>
        <div className="flex-1">
          <h2>{admins.email}</h2>
        </div>
        <div className="flex-1">
          {isClicked ? (
            <SelectDropDown
              updateDropDown={(id) => {
                setAdmins({
                  ...admins,
                  permission:
                    permissionsData?.getPermission?.responscedata?.permissions?.find(
                      (perm) => perm.id === id
                    ),
                });
              }}
              // classes={`w-full ${
              //   showErrors &&
              //   formData.permissionId === "" &&
              //   " border-[#D85C27]"
              // }`}
              value={admins.permission.name}
              dropdownValues={permissionsData?.getPermission?.responscedata?.permissions?.filter(
                (permissionItem) => permissionItem
              )}
            />
          ) : (
            <h2>{admins.permission.name}</h2>
          )}
        </div>
        <div className="flex-1">
          {isClicked ? (
            <Input
              type="password"
              value={admins.password}
              classes={"tracking-[0.2rem] w-full"}
              onChange={(e) => {
                setAdmins({
                  ...admins,
                  password: e.target.value,
                });
              }}
            />
          ) : (
            <input
              type="password"
              value={admins.password}
              className="outline-none bg-transparent tracking-[0.2rem]"
              disabled={true}
            />
          )}
        </div>

        <div className="flex-1 flex justify-end">
          {isClicked && (
            <div className="flex items-center">
              <Trash />
              <Switch />
            </div>
          )}
        </div>
      </div>
      {isClicked && (
        <div className="flex items-center justify-end space-x-6">
          <Button
            onClick={() => {
              setIsClicked(false);
            }}
            classes="bg-[#14365D] text-[#ffffff]"
            text="Back"
          />
          <Button classes="bg-[#009959] text-[#ffffff]" text="Save" />
        </div>
      )}
    </div>
  );
};

export default UserItem;

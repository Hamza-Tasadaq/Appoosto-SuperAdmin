import { useQuery } from "@apollo/client";
import { GET_PAGINATION_DATA, GET_PERMISSIONS_ID } from "../../../graphQl";
import { Input, Button, Dropdown } from "../../index";
import UsersList from "./UsersList";

const Users = () => {
  const {
    loading: paginationLoading,
    error: paginationError,
    data: paginationData,
  } = useQuery(GET_PAGINATION_DATA, {
    variables: {
      page: 1,
      size: 1,
    },
  });

  const {
    loading: permissionsLoading,
    error: permissionsError,
    data: permissionsData,
  } = useQuery(GET_PERMISSIONS_ID, {
    variables: {
      page: 1,
      size: paginationData?.getPermission.responscedata.totalItems,
    },
  });

  // 8993a8d0-812f-462c-b532-d470298b37d2
  // GET_PERMISSIONS
  console.log(permissionsData?.getPermission?.responscedata?.permissions)
  return (
    <div className="space-y-4">
      <div className="bg-[#ffffff] rounded-lg px-5 py-6 boxShadow flex  justify-between">
        <div className="flex-1 flex  space-x-3">
          <div className="space-y-1">
            <h3 className="text-[#727481]">Username</h3>
            <Input
              classes={"w-full"}
              placeholder="Insert Username"
              type="text"
            />
          </div>{" "}
          <div className="space-y-1">
            <h3 className="text-[#727481]">Email</h3>
            <Input classes={"w-full"} placeholder="Insert email" type="email" />
            {/* <ErrorText text="This Email Already Exist" /> */}
          </div>
          <div className="space-y-1">
            <h3 className="text-[#727481]">Password</h3>
            <Input
              classes={"w-full"}
              placeholder="Insert password"
              type="password"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-[#727481]">Permission</h3>

            <Dropdown
              // updateDropDown={() =>

              // }
              value={"Select Permissions"}
              dropdownValues={permissionsData?.getPermission?.responscedata?.permissions?.map(
                (permissionItem) => permissionItem.name
              )}
            />
          </div>
        </div>
        <div className=" flex items-center justify-end">
          <Button classes="bg-[#009959] text-[#ffffff]" text="Save" />
        </div>
      </div>

      <UsersList />
    </div>
  );
};

export default Users;

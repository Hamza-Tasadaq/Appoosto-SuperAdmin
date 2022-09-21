import Dropdown from "../../commons/Dropdown";
import UserItem from "./UserItem";

const UsersList = () => {
  return (
    <div className="bg-[#ffffff] rounded-lg w-full px-5 py-6 boxShadow space-y-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold">Users (17)</h1>
        <div className="w-48">
          <Dropdown
            value={"Filter by role"}
            dropdownValues={["Value1", "Value2", "Value3", "Value4"]}
          />
        </div>
      </div>

      <div className="mx-1 rounded-lg p-4  bg-[#EFF3F7] space-y-3">
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    </div>
  );
};

export default UsersList;

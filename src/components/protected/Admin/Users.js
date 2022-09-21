import { Input, Button } from "../../index";
import UsersList from "./UsersList";

const Users = () => {
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

import { Input, Button, ErrorText } from "../../index";

const Users = () => {
  return (
    <div className="space-y-4">
      <div className="bg-[#ffffff] rounded-lg px-5 py-6 boxShadow flex  justify-between">
        <div className="flex-1 flex  space-x-3">
          <div className="space-y-1">
            <h3 className="text-[#727481]">Username</h3>
            <Input classes={"w-full"} placeholder="Insert Username" type="text" />
          </div>{" "}
          <div className="space-y-1">
            <h3 className="text-[#727481]">Email</h3>
            <Input classes={"w-full"} placeholder="Insert email" type="email" />
            {/* <ErrorText text="This Email Already Exist" /> */}
          </div>
          <div className="space-y-1">
            <h3 className="text-[#727481]">Password</h3>
            <Input classes={"w-full"} placeholder="Insert password" type="password" />
          </div>
        </div>
        <div className=" flex items-center justify-end">
          <Button classes="bg-[#009959] text-[#ffffff]" text="Save" />
        </div>
      </div>

      <div className="bg-[#ffffff] rounded-lg w-full px-5 py-6 boxShadow space-y-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold">Users (17)</h1>
          <div>Filter</div>
        </div>

        <div className="mx-1 rounded-lg p-4 bg-[#EFF3F7]">
          <div className="rounded-lg bg-[#ffffff] py-4 px-6 flex items-center">
            <div className="flex-1">
              <h1 className="font-semibold">User</h1>
            </div>
            <div className="flex-1">
              <h2 className="font-medium">mail@mail.com</h2>
            </div>
            <div className="flex-1">
              <h2 className="font-medium">Role 1</h2>
            </div>
            <div className="flex-1">
              <input type={"password"} value="hhhhhhhhhhhhhhh" />
            </div>
            <div className="flex-1">button</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

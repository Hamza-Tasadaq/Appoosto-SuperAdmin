import { Input, Button, ErrorText } from "../../index";

const Users = () => {
  return (
    <div>
      {" "}
      <div className="bg-[#ffffff] rounded-lg px-5 py-6 boxShadow flex  justify-between">
        <div className="flex-1 flex  space-x-6">
          <div className="space-y-1">
            <h3 className="text-[#727481]">Username</h3>
            <Input placeholder="Insert Username" type="text" />
          </div>{" "}
          <div className="space-y-1">
            <h3 className="text-[#727481]">Email</h3>
            <Input placeholder="Insert email" type="email" />
            <ErrorText text="This Email Already Exist" />
          </div>
          <div className="space-y-1">
            <h3 className="text-[#727481]">Password</h3>
            <Input placeholder="Insert password" type="password" />
          </div>
        </div>
        <div className=" flex items-center justify-end">
          <Button classes="bg-[#009959] text-[#ffffff]" text="Save" />
        </div>
      </div>
    </div>
  );
};

export default Users;

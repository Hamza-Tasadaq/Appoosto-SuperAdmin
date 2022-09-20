import { Input, Button } from "../../index";

const Permissions = () => {
  return (
    <div>
      <div className="bg-[#ffffff] rounded-lg px-5 py-6 boxShadow flex items-end justify-between">
        <div className="flex-1 space-y-2">
          <h3 className="text-[#727481]">Role Name</h3>
          <Input placeholder="Insert role name ...." classes={"w-full"} />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <Button classes="bg-[#009959] text-[#ffffff]" text="Save" />
        </div>
      </div>
    </div>
  );
};

export default Permissions;
import { useState } from "react";
import { Button, Input } from "../../index";
import PlansList from "./PlansList";

const Plan = () => {
  const [formData, setFormData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#ffffff] rounded-lg px-5 py-6 boxShadow flex justify-between items-end"
      >
        <div className="space-y-1 flex-1 mx-1.5 my-1.5">
          <h3 className="text-[#727481] text-sm">Plan name</h3>
          <Input placeholder="insert Pln name ...." classes={"w-full"} />
        </div>
        <div className="flex-1">
          <Button
            type="submit"
            classes={`bg-[#009959] m-1.5 text-[#ffffff] ${""}`}
            text="Save"
          />
        </div>
      </form>

      <PlansList />
    </div>
  );
};

export default Plan;

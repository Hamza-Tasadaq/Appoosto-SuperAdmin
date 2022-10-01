import { useState } from "react";

const SubscriptionItem = ({ data }) => {
  console.log(data);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={` ${
        isOpen && "border border-[#EF5350]"
      } rounded-lg bg-[#ffffff] px-4 py-4 `}
    >
      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <h1 className="font-semibold">{data.user.username}</h1>
        </div>{" "}
        <div className="flex-1">
          <h3 className="font-medium">
            {new Date(data.createdAt).toDateString()}
          </h3>
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{data.plan.planType}</h3>
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{data.plan.price}</h3>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-[#FD5426] text-center">{data.plan.name}</h3>
        </div>
        <div className="flex-1">
          <p className="bg-[#D2B051] rounded-full text-[#ffffff] text-center font-semibold w-28 py-1 ">
            New
          </p>
        </div>
        <div className="flex-1">
          <p className="bg-[#D73D24] rounded-full text-[#ffffff] text-center font-semibold w-28 py-1">
            rejected
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionItem;

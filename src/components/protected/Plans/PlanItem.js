import { useState } from "react";
import { Button, Counter, Input, Switch, Trash } from "../../";

const PlanItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [planData, setPlanData] = useState(data);
  return (
    <div
      className={`rounded-lg bg-[#ffffff] border boxShadow p-6 space-y-4  ${
        isOpen && "border-[#EF5350]"
      }`}
    >
      <div className="flex">
        <div className="flex-1 flex items-center space-x-16">
          <div>
            <h1 className="text-[#000000] font-semibold text-lg">
              {planData.planType}
            </h1>
            <p className="text-[#809091] text-xs">3 Members</p>
          </div>
          {isOpen && (
            <div>
              <Switch text={"Enabled"} enable={planData.enabled} />
            </div>
          )}
        </div>

        <div className="flex-1 flex justify-end items-center space-x-16">
          {isOpen ? (
            <Trash />
          ) : (
            <div className="flex items-center space-x-16">
              <img src="./assets/icons/close-eye.svg" alt="close-eye" />
              <img src="./assets/icons/free.svg" alt="free" />
            </div>
          )}

          <Button
            onClick={() => {
              setIsOpen(true);
            }}
            text="Permission"
            classes={`text-[#ffffff] ${
              isOpen ? " bg-[#EF5350] " : " bg-[#14365D] "
            }`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="space-y-4">
          <div className="bg-[#EFF3F7] rounded-lg p-2 space-y-2">
            <div className="bg-[#FFFFFF] flex px-6 py-6 rounded-lg ">
              <h1 className="font-bold text-base w-24">Main</h1>
              <div className="flex-1 space-y-4">
                <div className="flex-1 space-x-4 flex items-center">
                  <div className="flex-1 ">
                    <Input
                      classes={"w-full"}
                      value={planData.name}
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      classes={"w-full"}
                      value={planData.description}
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div className="flex-1 flex items-center space-x-4">
                  <div className="flex-1">
                    <Counter text="Users" />
                  </div>
                  <div className="flex-1">
                    <Counter text="Menu" />
                  </div>
                </div>
                <div className="flex-1 flex items-center space-x-4">
                  <div className="flex-1">
                    <Counter text="Languages" />
                  </div>
                  <div className="flex-1">
                    <Counter text="Products" />
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="Dine in"
                      name="Dine in"
                      onChange={() => {}}
                      checked={planData.dine_in}
                    />
                    <label className="text-[#727481] text-xs" htmlFor="Dine in">
                      {" "}
                      Dine in
                    </label>
                  </div>
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="Booking"
                      name="Booking"
                      onChange={() => {}}
                      checked={planData.booking}
                    />
                    <label className="text-[#727481] text-xs" htmlFor="Booking">
                      {" "}
                      Booking
                    </label>
                  </div>
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="Delivery"
                      name="Delivery"
                      onChange={() => {}}
                      checked={planData.delivery}
                    />
                    <label
                      className="text-[#727481] text-xs"
                      htmlFor="Delivery"
                    >
                      {" "}
                      Delivery
                    </label>
                  </div>
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="Take away"
                      name="Take away"
                      onChange={() => {}}
                      checked={planData.take_away}
                    />
                    <label
                      className="text-[#727481] text-xs"
                      htmlFor="Take away"
                    >
                      {" "}
                      Take away
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] flex px-6 py-6 rounded-lg ">
              <h1 className="font-bold text-base w-24">Pricing</h1>
              <div className="flex-1 space-y-4">
                <div className="flex-1 flex items-center">
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="is hidden"
                      name="is hidden"
                      onChange={() => {}}
                      checked={planData.hidden}
                    />
                    <label
                      className="text-[#727481] text-xs"
                      htmlFor="is hidden"
                    >
                      {" "}
                      Is hidden
                    </label>
                  </div>
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="Is Free"
                      name="Is Free"
                      onChange={() => {}}
                      checked={planData.is_free}
                    />
                    <label className="text-[#727481] text-xs" htmlFor="Is Free">
                      {" "}
                      Is Free
                    </label>
                  </div>
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="is default plan"
                      name="is default plan"
                      onChange={() => {}}
                      checked={planData.isDefault}
                    />
                    <label
                      className="text-[#727481] text-xs"
                      htmlFor="is default plan"
                    >
                      {" "}
                      Is default plan
                    </label>
                  </div>
                  <div className="flex-1"></div>
                </div>
                <div className="flex-1 flex items-center">
                  <div className="flex-1s  flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="Is trial"
                      name="Is trial"
                      onChange={() => {}}
                      checked={planData.trial}
                    />
                    <label
                      className="text-[#727481] text-xs"
                      htmlFor="Is trial"
                    >
                      {" "}
                      Is trial
                    </label>
                  </div>

                  <div className="flex-1 flex justify-center">
                    <Input classes={"w-1/2 mx-auto"} placeholder="Trial days" />
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  <div className="flex-1 flex justify-centers">
                    <Input
                      classes={"w-10/12 mx-autos"}
                      placeholder="Monthly Price"
                    />
                  </div>
                  <div className="flex-1 flex justify-centers">
                    <Input
                      classes={"w-10/12 mx-autos"}
                      placeholder="Yearly Price"
                    />
                  </div>
                  <div className="flex-1 flex justify-centers">
                    <Input
                      classes={"w-10/12 mx-autos"}
                      value={planData.trial_days}
                      placeholder="Trial days"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] flex px-6 py-6 rounded-lg ">
              <h1 className="font-bold text-base w-24">Apps</h1>
              <div className="flex-1 flex items-center">
                <div className="flex-1 flex items-center space-x-2">
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    id="waiter app"
                    name="waiter app"
                    onChange={() => {}}
                    checked={planData.waiter_app}
                  />
                  <label
                    className="text-[#727481] text-xs"
                    htmlFor="waiter app"
                  >
                    {" "}
                    Waiter app
                  </label>
                </div>
                <div className="flex-1 flex items-center space-x-2">
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    id="Kitchen app"
                    name="Kitchen app"
                    onChange={() => {}}
                    checked={planData.kitchen_app}
                  />
                  <label
                    className="text-[#727481] text-xs"
                    htmlFor="Kitchen app"
                  >
                    {" "}
                    Kitchen app
                  </label>
                </div>
                <div className="flex-1 flex items-center space-x-2">
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    id="POS app"
                    name="POS app"
                    onChange={() => {}}
                    checked={planData.pos_app}
                  />
                  <label className="text-[#727481] text-xs" htmlFor="POS app">
                    {" "}
                    POS app
                  </label>
                </div>

                <div className="flex-1"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-6">
            <Button
              onClick={() => {
                setIsOpen(false);
              }}
              text="Back"
              classes={`text-[#ffffff] bg-[#14365D] `}
            />
            <Button
              onClick={() => {
                setIsOpen(false);
              }}
              text="Save"
              classes={`text-[#ffffff] bg-[#009959] `}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanItem;

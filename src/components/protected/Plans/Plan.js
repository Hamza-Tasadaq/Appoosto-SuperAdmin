import { useState } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { Button, Input, Counter, SelectDropDown } from "../../index";
import PlansList from "./PlansList";
import { CREATE_PLAN } from "../../../graphQl";

const Plan = () => {
  const [createPlan, { loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_PLAN);

  const [showErrors, setShowErrors] = useState(false);

  const [formData, setFormData] = useState({
    enabled: false,
    name: "",
    description: "",
    trial: false,
    trial_days: 0,
    hidden: false,
    is_free: false,
    isDefault: false,
    price: 0,
    interval_count: 0,
    planType: "",
    kitchen_app: false,
    waiter_app: false,
    pos_app: false,
    products: 0,
    users: 0,
    languages: 0,
    menu: 0,
    dine_in: false,
    booking: false,
    delivery: false,
    take_away: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Click");
    try {
      const { planName } = formData;

      if (planName) {
        const { data } = await createPlan({
          variables: {
            ...formData,
          },
        });
        console.log(data);
        if (data.createPlan === "Success") {
          console.log("Plan Created ");
          // Permission Added Success
          toast.success("Permission Added", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFormData({
            planName: "",
          });
        } else if (mutationError) {
          // Permission Added Failure
          toast.error("Some Thing Wrong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        setShowErrors(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#ffffff] rounded-lg px-4 py-3 boxShadow "
      >
        <div className="space-y-4">
          <div className="bg-[#EFF3F7] rounded-lg p-2 space-y-2">
            <div className="bg-[#FFFFFF] flex py-2 px-4 rounded-lg ">
              <h1 className="font-bold text-base w-24">Main</h1>
              <div className="flex-1 space-y-4">
                <div className="flex-1 space-x-4 flex items-center">
                  <div className="flex-1 space-y-2">
                    <h1 className="font-bold text-sm">Enter Plan Name</h1>
                    <Input
                      classes={"w-full"}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        });
                      }}
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h1 className="font-bold text-sm">
                      Enter Plan Description
                    </h1>
                    <Input
                      classes={"w-full"}
                      value={formData.description}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        });
                      }}
                      placeholder="Description"
                    />
                  </div>{" "}
                  <div className="flex-1 space-y-2">
                    <h1 className="font-bold text-sm">Select Plan Type</h1>
                    <SelectDropDown
                      value="Plan Type"
                      dropdownValues={[
                        { id: "Day", name: "Day" },
                        { id: "Month", name: "Month" },
                        { id: "Week", name: "Week" },
                        { id: "Year", name: "Year" },
                      ]}
                      updateDropDown={(text) => {
                        console.log({ text });
                        setFormData({
                          ...formData,
                          planType: text,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 flex items-center space-x-4">
                  <div className="flex-1">
                    <Counter
                      label="Users"
                      value={formData.users}
                      minusHandler={() => {
                        if (formData.users > 0) {
                          setFormData({
                            ...formData,
                            users: formData.users - 1,
                          });
                        }
                      }}
                      plusHandler={() => {
                        setFormData({
                          ...formData,
                          users: formData.users + 1,
                        });
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <Counter
                      label="Menu"
                      value={formData.menu}
                      minusHandler={() => {
                        if (formData.menu > 0) {
                          setFormData({
                            ...formData,
                            menu: formData.menu - 1,
                          });
                        }
                      }}
                      plusHandler={() => {
                        setFormData({
                          ...formData,
                          menu: formData.menu + 1,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 flex items-center space-x-4">
                  <div className="flex-1">
                    <Counter
                      label="Languages"
                      value={formData.languages}
                      minusHandler={() => {
                        if (formData.languages > 0) {
                          setFormData({
                            ...formData,
                            languages: formData.languages - 1,
                          });
                        }
                      }}
                      plusHandler={() => {
                        setFormData({
                          ...formData,
                          languages: formData.languages + 1,
                        });
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <Counter
                      label="Products"
                      value={formData.products}
                      minusHandler={() => {
                        if (formData.products > 0) {
                          setFormData({
                            ...formData,
                            products: formData.products - 1,
                          });
                        }
                      }}
                      plusHandler={() => {
                        setFormData({
                          ...formData,
                          products: formData.products + 1,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="Dine in"
                      name="Dine in"
                      onChange={() => {
                        setFormData({
                          ...formData,
                          dine_in: !formData.dine_in,
                        });
                      }}
                      checked={formData.dine_in}
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
                      onChange={() => {
                        setFormData({
                          ...formData,
                          booking: !formData.booking,
                        });
                      }}
                      checked={formData.booking}
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
                      onChange={() => {
                        setFormData({
                          ...formData,
                          delivery: !formData.delivery,
                        });
                      }}
                      checked={formData.delivery}
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
                      onChange={() => {
                        setFormData({
                          ...formData,
                          take_away: !formData.take_away,
                        });
                      }}
                      checked={formData.take_away}
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

            <div className="bg-[#FFFFFF] flex py-2 px-4 rounded-lg ">
              <h1 className="font-bold text-base w-24">Pricing</h1>
              <div className="flex-1 space-y-4">
                <div className="flex-1 flex items-center">
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="is hidden"
                      name="is hidden"
                      onChange={() => {
                        setFormData({
                          ...formData,
                          hidden: !formData.hidden,
                        });
                      }}
                      checked={formData.hidden}
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
                      onChange={() => {
                        setFormData({
                          ...formData,
                          is_free: !formData.is_free,
                        });
                      }}
                      checked={formData.is_free}
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
                      onChange={() => {
                        setFormData({
                          ...formData,
                          isDefault: !formData.isDefault,
                        });
                      }}
                      checked={formData.isDefault}
                    />
                    <label
                      className="text-[#727481] text-xs"
                      htmlFor="is default plan"
                    >
                      {" "}
                      Is default plan
                    </label>
                  </div>
                  <div className="flex-1  flex items-center space-x-2">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="Is trial"
                      name="Is trial"
                      onChange={() => {
                        setFormData({
                          ...formData,
                          trial: !formData.trial,
                        });
                      }}
                      checked={formData.trial}
                    />
                    <label
                      className="text-[#727481] text-xs"
                      htmlFor="Is trial"
                    >
                      {" "}
                      Is trial
                    </label>
                  </div>
                </div>
                <div className="flex-1 flex items-center space-x-4">
                  <div className="flex-1 space-y-2 ">
                    <h1 className="font-bold text-sm">Enter Trail Days</h1>
                    <Input
                      type="number"
                      classes={"w-full mx-auto"}
                      placeholder="Trial days"
                      value={formData.trial_days}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          trial_days: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h1 className="font-bold text-sm">Enter Price</h1>
                    <Input
                      type="number"
                      classes={"w-full mx-auto"}
                      placeholder="Price"
                      value={formData.price}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          price: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  {/* <div className="flex-1 flex justify-centers">
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
                  </div> */}
                  <div className="flex-1 flex justify-centers">
                    {/* <Input
                      classes={"w-full mx-autos"}
                      value={formData.trial_days}
                      placeholder="Trial days"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] flex py-2 px-4 rounded-lg ">
              <h1 className="font-bold text-base w-24">Apps</h1>
              <div className="flex-1 flex items-center">
                <div className="flex-1 flex items-center space-x-2">
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    id="waiter app"
                    name="waiter app"
                    onChange={() => {
                      setFormData({
                        ...formData,
                        waiter_app: !formData.waiter_app,
                      });
                    }}
                    checked={formData.waiter_app}
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
                    onChange={() => {
                      setFormData({
                        ...formData,
                        kitchen_app: !formData.kitchen_app,
                      });
                    }}
                    checked={formData.kitchen_app}
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
                    onChange={() => {
                      setFormData({
                        ...formData,
                        pos_app: !formData.pos_app,
                      });
                    }}
                    checked={formData.pos_app}
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
        </div>
        <div className="flex-1 flex justify-center">
          <Button
            disabled={mutationLoading}
            type="submit"
            classes={`bg-[#009959] m-1.5 text-[#ffffff] w-full ${
              mutationLoading && "opacity-50"
            }`}
            text="Save"
          />
        </div>
      </form>

      <PlansList />
    </div>
  );
};

export default Plan;

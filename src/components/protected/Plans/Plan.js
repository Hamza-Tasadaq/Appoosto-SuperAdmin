import { useState } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { Button, Input } from "../../index";
import PlansList from "./PlansList";
import { CREATE_PLAN } from "../../../graphQl";

const Plan = () => {
  const [createPlan, { loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_PLAN);

  const [showErrors, setShowErrors] = useState(false);

  const [formData, setFormData] = useState({
    planName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { planName } = formData;

      if (planName) {
        const { data } = await createPlan({
          variables: {
            name: planName,
            enabled: false,
            description: "Plan description",
            trial: false,
            trial_days: 0,
            hidden: false,
            is_free: false,
            isDefault: false,
            price: 0,
            interval_count: 0,
            planType: "month",
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
        className="bg-[#ffffff] rounded-lg px-5 py-6 boxShadow flex justify-between items-end"
      >
        <div className="space-y-1 flex-1 mx-1.5 my-1.5">
          <h3 className="text-[#727481] text-sm">Plan name</h3>
          <Input
            value={formData.planName}
            onChange={(e) => {
              setFormData({
                ...formData,
                planName: e.target.value,
              });
            }}
            placeholder="insert Pln name ...."
            classes={`w-full ${
              showErrors && formData.planName === "" && " border-[#D85C27] "
            }`}
          />
        </div>
        <div className="flex-1">
          <Button
            disabled={mutationLoading}
            type="submit"
            classes={`bg-[#009959] m-1.5 text-[#ffffff] ${
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

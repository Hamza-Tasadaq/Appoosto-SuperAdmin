import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { Input, Button } from "../../index";
import PermissionsList from "./PermissionsList";
import { CREATE_PERMISSION, GET_PERMISSIONS } from "../../../graphQl";

const Permissions = () => {
  const [createPermission, { loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_PERMISSION);

  const [showErrors, setShowErrors] = useState(false);

  const [formData, setFormData] = useState({
    permissionName: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (formData.permissionName) {
        const { data } = await createPermission({
          variables: {
            name: formData.permissionName,
          },
          refetchQueries: [{ query: GET_PERMISSIONS }, "getPermissions"],
          awaitRefetchQueries: true,
        });
        if (data?.createPermission === "Success") {
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
            permissionName: "",
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
        onSubmit={submitHandler}
        className="bg-[#ffffff] rounded-lg px-5 py-6 boxShadow flex items-end space-x-4"
      >
        <div className="flex-1 space-y-2">
          <h3 className="text-[#727481] text-sm">Permission Name</h3>
          <Input
            value={formData.permissionName}
            onChange={(e) => {
              setFormData({
                permissionName: e.target.value,
              });
            }}
            placeholder="Insert permission name ...."
            classes={`w-full ${
              showErrors &&
              formData.permissionName === "" &&
              " border-[#D85C27] "
            }`}
          />
        </div>
        <div className="flex-1 flex items-center ">
          <Button
            disabled={mutationLoading}
            type="submit"
            classes={`bg-[#009959] border border-[#009959] text-[#ffffff] ${
              mutationLoading && "opacity-50"
            }`}
            text="Save"
          />
        </div>
      </form>

      <PermissionsList />
    </div>
  );
};

export default Permissions;

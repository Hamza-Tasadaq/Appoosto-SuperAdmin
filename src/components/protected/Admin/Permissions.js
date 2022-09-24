import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@apollo/client";
import { Input, Button } from "../../index";
import PermissionsList from "./PermissionsList";
import { CREATE_PERMISSION, GET_PERMISSIONS } from "../../../graphQl";

const Permissions = () => {
  const [
    createPermission,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(CREATE_PERMISSION);

  const {
    loading: permissionsLoading,
    error: paginationError,
    data: permissionsData,
  } = useQuery(GET_PERMISSIONS, {
    variables: {
      page: 1,
      size: 10,
    },
  });

  const [showErrors, setShowErrors] = useState(false);

  const [formData, setFormData] = useState({
    permissionName: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData.permissionName) {
      await createPermission({
        variables: {
          name: formData.name,
        },
      });
      if (mutationData.createPermission === "Success") {
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
  };

  return (
    <div className="space-y-4">
      <form
        onSubmit={submitHandler}
        className="bg-[#ffffff] rounded-lg px-5 py-6 boxShadow flex items-end justify-between"
      >
        <div className="flex-1 space-y-2">
          <h3 className="text-[#727481]">Permission Name</h3>
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
        <div className="flex-1 flex items-center justify-end">
          <Button
            disabled={mutationLoading}
            type="submit"
            classes={`bg-[#009959] text-[#ffffff] ${
              mutationLoading && "opacity-50"
            }`}
            text="Save"
          />
        </div>
      </form>
      {permissionsLoading ? (
        <>Loading</>
      ) : (
        <PermissionsList queryData={permissionsData} />
      )}
    </div>
  );
};

export default Permissions;

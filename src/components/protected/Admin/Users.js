import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import {
  CREATE_MEMBER,
  GET_PAGINATION_DATA,
  GET_PERMISSIONS_ID,
} from "../../../graphQl";
import { Input, Button, ErrorText, SelectDropDown } from "../../index";
import UsersList from "./UsersList";

const Users = () => {
  const {
    loading: paginationLoading,
    error: paginationError,
    data: paginationData,
  } = useQuery(GET_PAGINATION_DATA, {
    variables: {
      page: 1,
      size: 1,
    },
  });
  const {
    loading: permissionsLoading,
    error: permissionsError,
    data: permissionsData,
  } = useQuery(GET_PERMISSIONS_ID, {
    variables: {
      page: 1,
      size: paginationData?.getPermission.responscedata.totalItems,
    },
  });

  const [createMember, { loading: memberLoading }] = useMutation(CREATE_MEMBER);
  const [showValidationError, setShowValidationError] = useState(false);

  const [showErrors, setShowErrors] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    permissionId: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true);
    setShowValidationError(false);
    try {
      if (
        formData.email &&
        formData.password &&
        formData.userName &&
        formData.permissionId
      ) {
        const { data } = await createMember({
          variables: {
            username: formData.userName,
            password: formData.password,
            email: formData.email,
            permissionId: formData.permissionId,
          },
        });
        if (data.createMember === "success") {
          toast.success("User Added", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setShowErrors(false);
          setFormData({
            userName: "",
            email: "",
            password: "",
            permissionId: "",
          });
        } else if (data.createMember === "Validation error") {
          setShowValidationError(true);
        }
      }
    } catch (err) {
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
  };

  if (permissionsLoading || paginationLoading) {
    return <div className="flex justify-center">Loading</div>;
  }
  if (permissionsError || paginationError) {
    return <div>Some thing Wrong</div>;
  }

  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#ffffff] rounded-lg px-5 py-6 boxShadow flex  justify-between items-end"
      >
        <div className="flex-1 flex">
          <div className="space-y-1 mx-1.5 my-1.5">
            <h3 className="text-[#727481]">Username</h3>
            <Input
              onChange={handleChange}
              name="userName"
              classes={`w-full ${
                showErrors && formData.userName === "" && " border-[#D85C27]"
              }`}
              placeholder="Insert Username"
              type="text"
              value={formData.userName}
            />{" "}
            {showValidationError && (
              <ErrorText text="This Username Already Exist" />
            )}
          </div>{" "}
          <div className="space-y-1 mx-1.5 my-1.5">
            <h3 className="text-[#727481]">Email</h3>
            <Input
              onChange={handleChange}
              name="email"
              classes={`w-full ${
                showErrors && formData.email === "" && " border-[#D85C27]"
              }`}
              placeholder="Insert email"
              type="email"
              value={formData.email}
            />
            {showValidationError && (
              <ErrorText text="This Email Already Exist" />
            )}
          </div>
          <div className="space-y-1 mx-1.5 my-1.5">
            <h3 className="text-[#727481]">Password</h3>
            <Input
              onChange={handleChange}
              name="password"
              classes={`w-full ${
                showErrors && formData.password === "" && " border-[#D85C27]"
              }`}
              placeholder="Insert password"
              type="password"
              value={formData.password}
            />
          </div>
          <div className="space-y-1 mx-1.5 my-1.5">
            <h3 className="text-[#727481]">Permission</h3>
            <SelectDropDown
              updateDropDown={(id) => {
                setFormData({
                  ...formData,
                  permissionId: id,
                });
              }}
              classes={`w-full ${
                showErrors &&
                formData.permissionId === "" &&
                " border-[#D85C27]"
              }`}
              value={"Select Permissions"}
              dropdownValues={permissionsData?.getPermission?.responscedata?.permissions?.map(
                (permissionItem) => permissionItem
              )}
            />
          </div>
        </div>
        <div className=" flex items-center justify-end">
          <Button
            disabled={memberLoading}
            type="submit"
            classes={`bg-[#009959] m-1.5 text-[#ffffff] ${
              memberLoading && "opacity-50"
            }`}
            text="Save"
          />
        </div>
      </form>

      <UsersList />
    </div>
  );
};

export default Users;

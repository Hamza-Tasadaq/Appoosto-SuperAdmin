import { useState, useEffect, useRef } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Button from "../../commons/Button";
import Dropdown from "../../commons/Dropdown";
import Trash from "../../commons/Trash";
import {
  DELETE_PERMISSION,
  EDIT_PERMISSION,
  GET_PERMISSIONS,
} from "../../../graphQl";
import { deletePerm } from "../../../app/slices/PermissionsSlice";

const PermissionItem = ({ permissionData }) => {
  const dispatch = useDispatch();

  const [deletePermission, { loading: deleteLoading }] =
    useMutation(DELETE_PERMISSION);
  const [editPermission, { loading: editLoading }] =
    useMutation(EDIT_PERMISSION);

  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isClicked && ref.current && !ref.current.contains(e.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isClicked]);

  const [permissions, setPermissions] = useState(permissionData);

  const handleSave = async () => {
    try {
      const { data } = await editPermission({
        variables: {
          ...permissions,
        },
        refetchQueries: [{ query: GET_PERMISSIONS }, "getPermissions"],
        awaitRefetchQueries: true,
      });
      if (data?.editPermission === "Success") {
        // Permission Edit Success
        toast.success("Permission Edited", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      // Permission Deleted Failure
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

  const handleDelete = async (id) => {
    try {
      const { data } = await deletePermission({
        variables: {
          id,
        },
        refetchQueries: [{ query: GET_PERMISSIONS }, "getPermissions"],
        awaitRefetchQueries: true,
      });

      if (data?.deletePermission === "Success") {
        // Delete Permission from the redux Store
        dispatch(deletePerm({ id }));
        // Permission Deleted Success
        toast.success("Permission Deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      // Permission Deleted Failure
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

  return (
    <div
      ref={ref}
      className="bg-[#ffffff] rounded-lg w-full px-5 py-6 boxShadow space-y-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-base">{permissions.name}</h1>
          <p className="text-xs">{permissions.usersCount} Members</p>
        </div>
        <div>
          {isClicked ? (
            <div className="flex items-center space-x-3">
              <div
                onClick={() => {
                  if (!deleteLoading) {
                    handleDelete(permissions.id);
                  }
                }}
              >
                <Trash classes={deleteLoading && "opacity-50"} />
              </div>
              <Button
                classes={"bg-[#EF5350] text-[#ffffff]"}
                text="Permission"
              />
            </div>
          ) : (
            <Button
              onClick={() => {
                setIsClicked(!isClicked);
              }}
              classes={"text-[#ffffff] bg-[#14365D]"}
              text="Permission"
            />
          )}
        </div>
      </div>
      {isClicked && (
        <div className="bg-[#EFF3F7] px-5 py-4 rounded-lg space-y-2">
          <div className="flex items-center  p-3">
            <div className="flex-1">
              <h3 className="font-semibold text-[#809091]">Module</h3>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#809091]">view</h3>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#809091]">Add</h3>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#809091]">Edit</h3>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#809091]">Delete</h3>
            </div>
          </div>
          <div className="flex items-center bg-[#ffffff] px-3 py-2 rounded-lg space-x-4">
            <div className="flex-1">
              <h1 className="font-bold">Admins</h1>
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    view_admins: !permissions.view_admins,
                  })
                }
                value={permissions.view_admins ? "Yes" : "No"}
                dropdownValues={[permissions.view_admins ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    add_admin: !permissions.add_admin,
                  })
                }
                value={permissions.add_admin ? "Yes" : "No"}
                dropdownValues={[permissions.add_admin ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    edit_admin: !permissions.edit_admin,
                  })
                }
                value={permissions.edit_admin ? "Yes" : "No"}
                dropdownValues={[permissions.edit_admin ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    delete_admin: !permissions.delete_admin,
                  })
                }
                value={permissions.delete_admin ? "Yes" : "No"}
                dropdownValues={[permissions.delete_admin ? " No " : "Yes"]}
              />
            </div>
          </div>
          <div className="flex items-center bg-[#ffffff] px-3 py-2 rounded-lg space-x-4">
            <div className="flex-1">
              <h1 className="font-bold">Users</h1>
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    view_users: !permissions.view_users,
                  })
                }
                value={permissions.view_users ? "Yes" : "No"}
                dropdownValues={[permissions.view_users ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    add_user: !permissions.add_user,
                  })
                }
                value={permissions.add_user ? "Yes" : "No"}
                dropdownValues={[permissions.add_user ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    edit_user: !permissions.edit_user,
                  })
                }
                value={permissions.edit_user ? "Yes" : "No"}
                dropdownValues={[permissions.edit_user ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    delete_user: !permissions.delete_user,
                  })
                }
                value={permissions.delete_user ? "Yes" : "No"}
                dropdownValues={[permissions.delete_user ? " No " : "Yes"]}
              />
            </div>
          </div>
          <div className="flex items-center bg-[#ffffff] px-3 py-2 rounded-lg space-x-4">
            <div className="flex-1">
              <h1 className="font-bold">Plans</h1>
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    view_plans: !permissions.view_plans,
                  })
                }
                value={permissions.view_plans ? "Yes" : "No"}
                dropdownValues={[permissions.view_plans ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    add_plan: !permissions.add_plan,
                  })
                }
                value={permissions.add_plan ? "Yes" : "No"}
                dropdownValues={[permissions.add_plan ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    edit_plan: !permissions.edit_plan,
                  })
                }
                value={permissions.edit_plan ? "Yes" : "No"}
                dropdownValues={[permissions.edit_plan ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    delete_plan: !permissions.delete_plan,
                  })
                }
                value={permissions.delete_plan ? "Yes" : "No"}
                dropdownValues={[permissions.delete_plan ? " No " : "Yes"]}
              />
            </div>
          </div>
          <div className="flex items-center bg-[#ffffff] px-3 py-2 rounded-lg space-x-4">
            <div className="flex-1">
              <h1 className="font-bold">Languages</h1>
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    view_languages: !permissions.view_languages,
                  })
                }
                value={permissions.view_languages ? "Yes" : "No"}
                dropdownValues={[permissions.view_languages ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    add_language: !permissions.add_language,
                  })
                }
                value={permissions.add_language ? "Yes" : "No"}
                dropdownValues={[permissions.add_language ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    edit_language: !permissions.edit_language,
                  })
                }
                value={permissions.edit_language ? "Yes" : "No"}
                dropdownValues={[permissions.edit_language ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    delete_language: !permissions.delete_language,
                  })
                }
                value={permissions.delete_language ? "Yes" : "No"}
                dropdownValues={[permissions.delete_language ? " No " : "Yes"]}
              />
            </div>
          </div>
          <div className="flex items-center bg-[#ffffff] px-3 py-2 rounded-lg space-x-4">
            <div className="flex-1">
              <h1 className="font-bold">Translations</h1>
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    view_translation: !permissions.view_translation,
                  })
                }
                value={permissions.view_translation ? "Yes" : "No"}
                dropdownValues={[permissions.view_translation ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    add_translation: !permissions.add_translation,
                  })
                }
                value={permissions.add_translation ? "Yes" : "No"}
                dropdownValues={[permissions.add_translation ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    edit_translation: !permissions.edit_translation,
                  })
                }
                value={permissions.edit_translation ? "Yes" : "No"}
                dropdownValues={[permissions.edit_translation ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    delete_translation: !permissions.delete_translation,
                  })
                }
                value={permissions.delete_translation ? "Yes" : "No"}
                dropdownValues={[
                  permissions.delete_translation ? " No " : "Yes",
                ]}
              />
            </div>
          </div>
          <div className="flex items-center bg-[#ffffff] px-3 py-2 rounded-lg space-x-4">
            <div className="flex-1">
              <h1 className="font-bold">Icons</h1>
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    view_icons: !permissions.view_icons,
                  })
                }
                value={permissions.view_icons ? "Yes" : "No"}
                dropdownValues={[permissions.view_icons ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    add_icon: !permissions.add_icon,
                  })
                }
                value={permissions.add_icon ? "Yes" : "No"}
                dropdownValues={[permissions.add_icon ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    edit_icon: !permissions.edit_icon,
                  })
                }
                value={permissions.edit_icon ? "Yes" : "No"}
                dropdownValues={[permissions.edit_icon ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                updateDropDown={() =>
                  setPermissions({
                    ...permissions,
                    delete_icon: !permissions.delete_icon,
                  })
                }
                value={permissions.delete_icon ? "Yes" : "No"}
                dropdownValues={[permissions.delete_icon ? " No " : "Yes"]}
              />
            </div>
          </div>

          <div className="flex items-center bg-[#ffffff] px-3 py-4 rounded-lg space-x-4">
            <div className="flex-1">
              <h1 className="font-bold">Actions</h1>
            </div>
            <div className="flex-1 flex items-center space-x-2">
              <input
                className="w-5 h-5"
                type="checkbox"
                id="Impersonate users"
                name="Impersonate users"
                onChange={() => {
                  setPermissions({
                    ...permissions,
                    impersonate_user: !permissions.impersonate_user,
                  });
                }}
                checked={permissions.impersonate_user}
              />
              <label htmlFor="Impersonate users"> Impersonate users</label>
            </div>
            <div className="flex-1 flex items-center space-x-2">
              <input
                className="w-5 h-5"
                type="checkbox"
                id="edit website"
                name="edit website"
                onChange={() => {
                  setPermissions({
                    ...permissions,
                    edit_website: !permissions.edit_website,
                  });
                }}
                checked={permissions.edit_website}
              />
              <label htmlFor="edit website">Edit website</label>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4">
            <Button
              onClick={() => {
                setIsClicked(!isClicked);
              }}
              classes={"text-[#ffffff] bg-[#14365D]"}
              text="Back"
            />
            <Button
              disabled={editLoading}
              onClick={handleSave}
              classes={`text-[#ffffff] bg-[#009959] ${
                editLoading && "opacity-50"
              }`}
              text="Save"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PermissionItem;

import { useState } from "react";
import Button from "../../commons/Button";
import Dropdown from "../../commons/Dropdown";
import Trash from "../../commons/Trash";

const PermissionItem = ({ permissionData }) => {
  const [isClicked, setIsClicked] = useState(false);
  // console.log("PermisItem");
  const [permissions, setPermissions] = useState(permissionData);
  return (
    <div className="bg-[#ffffff] rounded-lg w-full px-5 py-6 boxShadow space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-base">{permissions.name}</h1>
          <p className="text-xs">{permissions.usersCount} Members</p>
        </div>
        <div>
          {isClicked ? (
            <div className="flex items-center space-x-3">
              <Trash />
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
                value={permissions.view_admins ? "Yes" : "No"}
                dropdownValues={[permissions.view_admins ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                value={permissions.add_admin ? "Yes" : "No"}
                dropdownValues={[permissions.add_admin ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                value={permissions.add_admin ? "Yes" : "No"}
                dropdownValues={[permissions.add_admin ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
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
                value={permissions.view_users ? "Yes" : "No"}
                dropdownValues={[permissions.view_users ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                value={permissions.add_user ? "Yes" : "No"}
                dropdownValues={[permissions.add_user ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                value={permissions.edit_user ? "Yes" : "No"}
                dropdownValues={[permissions.edit_user ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
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
                value={permissions.view_plans ? "Yes" : "No"}
                dropdownValues={[permissions.view_plans ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                value={permissions.add_plan ? "Yes" : "No"}
                dropdownValues={[permissions.add_plan ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                value={permissions.edit_plan ? "Yes" : "No"}
                dropdownValues={[permissions.edit_plan ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
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
                value={permissions.view_languages ? "Yes" : "No"}
                dropdownValues={[permissions.view_languages ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                value={permissions.add_language ? "Yes" : "No"}
                dropdownValues={[permissions.add_language ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                value={permissions.edit_language ? "Yes" : "No"}
                dropdownValues={[permissions.edit_language ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
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
                value={permissions.view_translation ? "Yes" : "No"}
                dropdownValues={[permissions.view_translation ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                value={permissions.add_translation ? "Yes" : "No"}
                dropdownValues={[permissions.add_translation ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                value={permissions.edit_translation ? "Yes" : "No"}
                dropdownValues={[permissions.edit_translation ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
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
                value={permissions.view_icons ? "Yes" : "No"}
                dropdownValues={[permissions.view_icons ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              {" "}
              <Dropdown
                value={permissions.add_icon ? "Yes" : "No"}
                dropdownValues={[permissions.add_icon ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
                value={permissions.edit_icon ? "Yes" : "No"}
                dropdownValues={[permissions.edit_icon ? " No " : "Yes"]}
              />
            </div>
            <div className="flex-1 ">
              <Dropdown
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
                value={permissions.impersonate_user}
              />
              <label htmlFor="Impersonate users"> Impersonate users</label>
            </div>
            <div className="flex-1 flex items-center space-x-2">
              <input
                className="w-5 h-5"
                type="checkbox"
                id="edit website"
                name="edit website"
                value="edit website"
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
            <Button classes={"text-[#ffffff] bg-[#009959]"} text="Save" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PermissionItem;

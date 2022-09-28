import { Button, Input, SelectDropDown } from "../components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-start space-x-6">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <AiOutlineArrowLeft style={{ fontSize: "2rem", color: "#14365D" }} />
        </div>
        <div className="text-[#14365D]">
          <h1 className="font-semibold">
            Welcome <span className="font-bold text-lg">username</span>
          </h1>
          <p>View and update your account details, profile and more. z</p>
        </div>
      </div>

      <div className="bg-[#FFFFFF] rounded-lg p-4 space-y-8">
        <div className="bg-[#EFF3F7] rounded-lg px-4 py-2 flex space-x-6">
          <div className="flex-1 space-y-20">
            <div className="max-w-mds space-y-4">
              <h1 className="text-[#14355E] font-bold border-b border-[#14355E] ">
                Update password{" "}
              </h1>
              <div className="space-y-2">
                <Input classes={`w-full`} placeholder="Old Password" />
                <Input classes={`w-full`} placeholder="New Password" />
                <p className="text-xs text-[#D80027] pb-2 italic">
                  The password should have from 8 to 16 characters and contain
                  letters, numbers, special symbols
                </p>
                <Input classes={`w-full`} placeholder="Confirm New Password" />
              </div>
            </div>
            <div className="max-w-mds space-y-4">
              <h1 className="text-[#14355E] font-bold border-b border-[#14355E] ">
                Update Settings{" "}
              </h1>

              <div className="space-y-2">
                <SelectDropDown
                  updateDropDown={() => {}}
                  classes={`w-full bg-[#ffffff]
                  ]`}
                  value={"Country"}
                  dropdownValues={[
                    { id: 1, name: "Pakistan" },
                    { id: 2, name: "Bangladesh" },
                    { id: 3, name: "Italy" },
                    { id: 4, name: "India" },
                  ]}
                />
                <SelectDropDown
                  updateDropDown={() => {}}
                  classes={`w-full bg-[#ffffff]
                  ]`}
                  value={"Language"}
                  dropdownValues={[
                    { id: 1, name: "Urdu" },
                    { id: 2, name: "Bangali" },
                    { id: 3, name: "Italian" },
                    { id: 4, name: "Hindi" },
                  ]}
                />
                <SelectDropDown
                  updateDropDown={() => {}}
                  classes={`w-full bg-[#ffffff]
                  ]`}
                  value={"Timezone"}
                  dropdownValues={[
                    { id: 1, name: "Urdu" },
                    { id: 2, name: "Bangali" },
                    { id: 3, name: "Italian" },
                    { id: 4, name: "Hindi" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 lg:max-w-mds w-full space-y-6">
            <h1 className="text-[#14355E] font-bold border-b border-[#14355E]">
              Update Profile
            </h1>
            <div className="flex flex-col items-center space-y-8">
              <div className="space-y-2 text-center text-[#12355E]">
                <h1 className="font-bold text-lg">UserName</h1>
                <h2 className="font-semibold text-base">user@gmail.com</h2>
              </div>
              <img src="./assets/images/avatar.png" alt="avatar" />
              <div className="flex flex-col justify-center items-center w-9/12 lg:w-8/12 mx-auto space-y-2">
                <Button
                  text="Remove Image"
                  classes={`bg-[#D80027] text-[#ffffff] w-full py-2`}
                />
                <Button
                  text="Update new image"
                  classes={`bg-[#009959] text-[#ffffff] w-full py-2`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button text="Save Changes" classes={`bg-[#14365D] text-[#ffffff]`} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

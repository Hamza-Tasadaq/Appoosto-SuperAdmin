import { useState } from "react";
import { useMutation } from "@apollo/client";
import LanguagesList from "./LanguagesList";
import { Input, Button, Switch, SelectDropDown } from "../../";
import { CREATE_LANGUAGE } from "../../../graphQl";
import codes from "iso-language-codes";
import { useEffect } from "react";

const Language = () => {
  const [formData, setFormData] = useState({
    name: "",
    iso_code: "",
    active: "",
  });
  const [showErrors, setShowErrors] = useState(false);

  const [isoCodes, setIsoCodes] = useState([]);

  useEffect(() => {
    setIsoCodes(
      codes.map((data) => {
        return { name: `${data.name} (${data.iso639_1}) `, id: data.iso639_1 };
      })
    );
  }, [codes]);

  const [createLanguage, { loading: languageLoading }] =
    useMutation(CREATE_LANGUAGE);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowErrors(true);
    try {
      console.log(formData);
      if (formData.name && formData.iso_code && formData.active) {
        console.log("FIlled");
      } else {
        console.log("Empty");
      }
    } catch (err) {}
  };
  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#ffffff] rounded-lg px-5 py-6 boxShadow flex items-center justify-between "
      >
        <div className="flex-1 flex">
          <div className="flex-1 space-y-2 mx-1.5 my-1.5">
            <h3 className="text-[#727481] text-sm">language name</h3>
            <Input
              placeholder="Insert Language Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: e.target.value,
                });
              }}
              classes={`w-full ${
                showErrors && formData.name === "" && " border-[#EF5350] "
              }`}
            />
          </div>{" "}
          <div className="flex-1 space-y-2 mx-1.5 my-1.5">
            <h3 className="text-[#727481] text-sm">Code (ISO 639-1)</h3>

            <SelectDropDown
              value="Select Code (ISO 639-1)"
              dropdownValues={isoCodes}
              updateDropDown={(id) => {
                setFormData({
                  ...formData,
                  iso_code: id,
                });
              }}
            />
          </div>
          <div className="flex-1 space-y-2 mx-1.5 my-1.5">
            <h3 className="text-[#727481] text-sm ml-4">Active</h3>
            <Switch
              enable={formData.active}
              toggle={() => {
                setFormData({
                  ...formData,
                  active: !formData.active,
                });
              }}
            />
          </div>
        </div>
        <Button
          disabled={languageLoading}
          type="submit"
          classes={`bg-[#009959] m-1.5 text-[#ffffff] ${
            languageLoading && "opacity-50"
          }`}
          text="Save"
        />
      </form>
      <LanguagesList />
      <LanguagesList />
    </div>
  );
};

export default Language;

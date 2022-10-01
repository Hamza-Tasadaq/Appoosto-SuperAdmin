import { useMutation } from "@apollo/client";
import { ReactCountryDropdown } from "react-country-dropdown";
import { Input, Button, Switch } from "../../";
import LanguagesList from "./LanguagesList";

import "react-country-dropdown/dist/index.css";
import { CREATE_LANGUAGE } from "../../../graphQl";
import { useState } from "react";

const Language = () => {
  const [formData, setFormData] = useState({
    name: "",
    iso_code: "",
    active: "",
  });
  const [showErrors, setShowErrors] = useState(false);

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
            <Input
              value={formData.iso_code}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  iso_code: e.target.value,
                });
              }}
              classes={`w-full ${
                showErrors && formData.iso_code === "" && " border-[#EF5350] "
              }`}
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
    </div>
  );
};

export default Language;

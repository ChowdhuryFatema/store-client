import { useState } from "react";
import { Select } from "antd";
import Flag from "react-world-flags";

const { Option } = Select;

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");

  const handleChange = (value: string) => {
    setLanguage(value);
    console.log("Language changed to:", value);
    // Add functionality to update the language in your app
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <Select
        value={language}
        onChange={handleChange}
        className="w-40 h-3"
        dropdownClassName="rounded-lg"
      >
        <Option value="en">
          <div className="flex items-center gap-2">
            <Flag code="us" className="w-5 h-5" /> English
          </div>
        </Option>
        <Option value="es">
          <div className="flex items-center gap-2">
            <Flag code="es" className="w-5 h-5" /> Spanish
          </div>
        </Option>
        <Option value="fr">
          <div className="flex items-center gap-2">
            <Flag code="fr" className="w-5 h-5" /> French
          </div>
        </Option>
        <Option value="de">
          <div className="flex items-center gap-2">
            <Flag code="de" className="w-5 h-5" /> German
          </div>
        </Option>
        <Option value="bn">
          <div className="flex items-center gap-2">
            <Flag code="bd" className="w-5 h-5" /> Bengali
          </div>
        </Option>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;

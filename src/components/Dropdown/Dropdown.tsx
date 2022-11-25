import React, { FC, useState } from "react";

interface OptionItem {
  label: string;
  id: string;
}

interface DropdownProps {
  options: OptionItem[];
  placeholder: string;
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const { options, placeholder } = props;
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <>
      <select
        id="drowpdown"
        name="dropdown"
        onChange={(e) => setSelectedValue(e.target.value)}
        value={selectedValue}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

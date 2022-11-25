import React, { FC } from 'react';

export interface OptionItem {
  label: string;
  id: string;
}

interface DropdownProps {
  options: OptionItem[];
  placeholder: string;
  onSelect: (value: string) => void;
  value: string;
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const { options, placeholder, onSelect, value } = props;
  const handleChangeValue = (value: string) => {
    onSelect(value);
  };

  return (
    <>
      <select
        id="drowpdown"
        name="dropdown"
        onChange={(e) => handleChangeValue(e.target.value)}
        value={value}
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

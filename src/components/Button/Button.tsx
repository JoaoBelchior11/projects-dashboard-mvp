import React, { FC } from "react";

interface ButtonProps {
  label: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { label } = props;
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};

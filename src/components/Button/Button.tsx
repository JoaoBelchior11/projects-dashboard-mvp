import React, { FC } from 'react';

interface ButtonProps {
  label: string;
  onClickAction: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { label, onClickAction } = props;
  return <button onClick={onClickAction}>{label}</button>;
};

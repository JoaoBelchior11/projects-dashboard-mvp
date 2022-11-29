import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClickAction: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { label, onClickAction } = props;
  return (
    <div className={styles.button}>
      <button onClick={onClickAction}>{label}</button>
    </div>
  );
};

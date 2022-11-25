import React, { FC } from "react";
import styles from "./TopNav.module.scss";

interface TopNavProps {
  onMenuClick: () => void;
}

export const TopNav: FC<TopNavProps> = (props) => {
  const { onMenuClick } = props;
  return (
    <div className={styles.topNav}>
      <div className={styles.logo}>
        <div>Logo</div>
        <div onClick={onMenuClick}>Burger Menu</div>
      </div>
      <div className={styles.user}>
        <div>JD</div>
        <div>John Doe</div>
      </div>
    </div>
  );
};

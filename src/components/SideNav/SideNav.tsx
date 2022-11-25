import React from "react";
import styles from "./SideNav.module.scss";

export const SideNav = () => {
  return (
    <div className={styles.sideNav}>
      <div>Stat</div>
      <div>Menu</div>
      <div>Monitor</div>
      <div>Report</div>
      <div>Logout</div>
    </div>
  );
};

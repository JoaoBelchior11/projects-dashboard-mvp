import React from "react";
import styles from "./EmptyDashboard.module.scss";

export const EmptyDashboard = () => {
  return (
    <div className={styles.emptyDashboard}>
      <div>No Reports</div>
      <div>
        Currently you have no data for the reports to be generated. Once you
        start generating traffic through the Balance application the reports
        will be shown.
      </div>
    </div>
  );
};

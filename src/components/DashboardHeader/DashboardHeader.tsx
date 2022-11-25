import React from "react";
import { DashboardFilters } from "../DashboardFilters/DashboardFilters";
import styles from "./DashboardHeader.module.scss";

export const DashboardHeader = () => {
  return (
    <div className={styles.header}>
      <div>
        <div>Reports</div>
        <div>Easily generate a report of your expenses</div>
      </div>
      <div>
        <DashboardFilters />
      </div>
    </div>
  );
};

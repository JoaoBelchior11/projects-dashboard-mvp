import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import styles from "./DashboardFilters.module.scss";

export const DashboardFilters = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.filters}>
      <Dropdown placeholder="Select project" options={[]} />
      <Dropdown placeholder="Select gateway" options={[]} />
      <DatePicker
        selected={startDate}
        onChange={(value) => console.log(value)}
      />
      <DatePicker
        selected={startDate}
        onChange={(value) => console.log(value)}
      />
      <Button label="Generate Report" />
    </div>
  );
};

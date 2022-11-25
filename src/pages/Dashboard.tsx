import React from "react";
import { DashboardHeader } from "../components/DashboardHeader/DashboardHeader";
import { EmptyDashboard } from "../components/EmptyDashboard/EmptyDashboard";

export const Dashboard = () => {
  return (
    <div style={{ width: "100%" }}>
      <DashboardHeader />
      <EmptyDashboard />
    </div>
  );
};

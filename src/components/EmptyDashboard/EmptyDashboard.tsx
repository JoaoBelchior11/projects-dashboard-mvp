import React from 'react';
import styles from './EmptyDashboard.module.scss';

export const EmptyDashboard = () => {
  return (
    <div className={styles.emptyDashboard}>
      <div></div>
      <div
        style={{
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex',
        }}
      >
        <h2>No Reports</h2>

        <span>
          Currently you have no data for the reports to be generated. Once you
          start generating traffic through the Balance application the reports
          will be shown.
        </span>

        <div>
          <img src="/empty_dashboard.png" alt="" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

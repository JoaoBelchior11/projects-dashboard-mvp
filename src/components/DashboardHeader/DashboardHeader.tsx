import React, { FC } from 'react';
import { Gateway, Project, ReportFilters } from '../../models/models';
import { DashboardFilters } from '../DashboardFilters/DashboardFilters';
import styles from './DashboardHeader.module.scss';

interface DashboardHeaderProps {
  filters: ReportFilters;
  projects: Project[];
  gateways: Gateway[];
  onChangeFilters: (filters: ReportFilters) => void;
}

export const DashboardHeader: FC<DashboardHeaderProps> = (props) => {
  const { filters, projects, gateways, onChangeFilters } = props;
  return (
    <div className={styles.header}>
      <div>
        <h2>Reports</h2>
        <span>Easily generate a report of your expenses</span>
      </div>
      <div>
        <DashboardFilters
          onChangeFilter={onChangeFilters}
          filters={filters}
          projects={projects}
          gateways={gateways}
        />
      </div>
    </div>
  );
};

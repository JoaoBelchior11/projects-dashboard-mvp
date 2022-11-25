import React, { FC, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Gateway, Project, ReportFilters } from '../../models/models';
import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import styles from './DashboardFilters.module.scss';

interface DashboardFiltersProps {
  filters: ReportFilters;
  projects: Project[];
  gateways: Gateway[];
  onChangeFilter: (filters: ReportFilters) => void;
}

export const DashboardFilters: FC<DashboardFiltersProps> = (props) => {
  const { filters, projects, gateways, onChangeFilter } = props;

  const [selectedFilters, setSelectedFilters] =
    useState<ReportFilters>(filters);

  const projectOptions = useMemo(() => {
    const projectOptions = [{ label: 'All projects', id: '' }];
    const options = projects.map((project) => ({
      label: project.name,
      id: project.projectId,
    }));
    return [...projectOptions, ...options];
  }, [projects]);

  const gatewayOptions = useMemo(() => {
    const gatewayOptions = [{ label: 'All gateways', id: '' }];
    const options = gateways.map((gateway) => ({
      label: gateway.name,
      id: gateway.gatewayId,
    }));
    return [...gatewayOptions, ...options];
  }, [gateways]);

  const handleFilterSelectedChange = (
    value: string | Date,
    filterName: string,
  ) => {
    const newFilters = {
      ...selectedFilters,
      [filterName]: value,
    };
    setSelectedFilters(newFilters);
  };

  return (
    <div className={styles.filters}>
      <Dropdown
        placeholder="Select project"
        value={selectedFilters.project}
        options={projectOptions}
        onSelect={(value) => handleFilterSelectedChange(value, 'project')}
      />
      <Dropdown
        placeholder="Select gateway"
        value={selectedFilters.gateway}
        options={gatewayOptions}
        onSelect={(value) => handleFilterSelectedChange(value, 'gateway')}
      />
      <DatePicker
        selected={selectedFilters.fromDate}
        onChange={(value) =>
          value && handleFilterSelectedChange(value, 'fromDate')
        }
      />
      <DatePicker
        selected={selectedFilters.toDate}
        onChange={(value) =>
          value && handleFilterSelectedChange(value, 'toDate')
        }
      />
      <Button
        label="Generate Report"
        onClickAction={() => onChangeFilter(selectedFilters)}
      />
    </div>
  );
};

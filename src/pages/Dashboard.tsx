import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { reportApi } from '../api';
import { DashboardBody } from '../components/DashboardBody/DashboardBody';
import { DashboardHeader } from '../components/DashboardHeader/DashboardHeader';
import { EmptyDashboard } from '../components/EmptyDashboard/EmptyDashboard';
import { useFetchGateways } from '../hooks/useFetchGateways';
import { useFetchProjects } from '../hooks/useFetchProjects';
import { Gateway, Payment, Project, ReportFilters } from '../models/models';

export const Dashboard = () => {
  const { projects } = useFetchProjects();
  const { gateways } = useFetchGateways();
  const [filters, setFilters] = useState<ReportFilters>({
    project: '',
    gateway: '',
    fromDate: new Date(2021, 0, 1),
    toDate: new Date(2021, 11, 31),
  });
  const [payments, setPayments] = useState<Payment[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);
  const [selectedGateways, setSelectedGateways] = useState<Gateway[]>([]);
  const [generateClicked, setGenerateClicked] = useState(false);

  useEffect(() => {
    setSelectedGateways(gateways);
    setSelectedProjects(projects);
  }, [projects, gateways]);

  const handleChangeFilters = (newFilters: ReportFilters) => {
    setFilters(newFilters);
    setGenerateClicked(true);
    reportApi()
      .getPayments(
        format(newFilters.fromDate, 'yyyy-MM-dd'),
        format(newFilters.toDate, 'yyyy-MM-dd'),
        newFilters.project,
        newFilters.gateway,
      )
      .then((resp) => setPayments(resp));

    setSelectedProjects(
      newFilters.project
        ? [...projects].filter(
            (project) => project.projectId === newFilters.project,
          )
        : projects,
    );

    setSelectedGateways(
      newFilters.gateway
        ? [...gateways].filter(
            (gateway) => gateway.gatewayId === newFilters.gateway,
          )
        : gateways,
    );
  };

  return (
    <div style={{ width: '100%' }}>
      <DashboardHeader
        filters={filters}
        projects={projects}
        gateways={gateways}
        onChangeFilters={handleChangeFilters}
      />
      {generateClicked ? (
        <DashboardBody
          selectedGateways={selectedGateways}
          selectedProjects={selectedProjects}
          payments={payments}
        />
      ) : (
        <EmptyDashboard />
      )}
    </div>
  );
};

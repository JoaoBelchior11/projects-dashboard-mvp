import React, { FC, useMemo } from 'react';
import { Gateway, Payment, Project } from '../../models/models';
import { DashboardTable } from '../DashboardTable/DashboardTable';
import { PieChart } from '../PieChart/PieChart';
import styles from './DashboardBody.module.scss';

interface DashboardBodyProps {
  selectedProjects: Project[];
  selectedGateways: Gateway[];
  payments: Payment[];
}

export const DashboardBody: FC<DashboardBodyProps> = (props) => {
  const { selectedGateways, selectedProjects, payments } = props;

  const chartData = useMemo(() => {
    if (selectedGateways.length === 1) {
      const gatewayPayments = payments.filter(
        (payment) => payment.gatewayId === selectedGateways[0].gatewayId,
      );
      const projectAndAmount = gatewayPayments.reduce(
        (acc: { [x: string]: number }, curr) => {
          if (acc[curr.projectId]) {
            return {
              ...acc,
              [curr.projectId]: curr.amount + acc[curr.projectId],
            };
          }
          return {
            ...acc,
            [curr.projectId]: curr.amount,
          };
        },
        {},
      );
      const labels = Object.keys(projectAndAmount).map(
        (projectId) =>
          selectedProjects.find((p) => p.projectId === projectId)?.name || '',
      );
      return {
        data: Object.values(projectAndAmount),
        labels,
      };
    } else if (selectedProjects.length === 1) {
      const projectPayments = payments.filter(
        (payment) => payment.projectId === selectedProjects[0].projectId,
      );
      const gatewayAndAmount = projectPayments.reduce(
        (acc: { [x: string]: number }, curr) => {
          if (acc[curr.gatewayId]) {
            return {
              ...acc,
              [curr.gatewayId]: curr.amount + acc[curr.gatewayId],
            };
          }
          return {
            ...acc,
            [curr.gatewayId]: curr.amount,
          };
        },
        {},
      );
      const labels = Object.keys(gatewayAndAmount).map(
        (gatewayId) =>
          selectedGateways.find((g) => g.gatewayId === gatewayId)?.name || '',
      );
      return {
        data: Object.values(gatewayAndAmount),
        labels,
      };
    }
  }, [selectedGateways, selectedProjects, payments]);

  return (
    <div className={styles.dashboardBody}>
      <DashboardTable
        selectedGateways={selectedGateways}
        selectedProjects={selectedProjects}
        payments={payments}
      />
      {chartData && (
        <div>
          <PieChart
            dataSet={chartData?.data || []}
            labels={chartData?.labels || []}
          />
        </div>
      )}
    </div>
  );
};

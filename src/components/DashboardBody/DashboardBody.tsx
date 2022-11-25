import React, { FC, useMemo } from 'react';
import { Gateway, Payment, Project } from '../../models/models';
import { DashboardTable } from '../DashboardTable/DashboardTable';
import { PieChart } from '../PieChart/PieChart';

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
      console.log(projectAndAmount);
      const labels = Object.keys(projectAndAmount).map(
        (projectId) =>
          selectedProjects.find((p) => p.projectId === projectId)?.name || '',
      );
      return {
        data: Object.values(projectAndAmount),
        labels,
      };
    }
  }, [selectedGateways, selectedProjects, payments]);

  return (
    <div>
      <DashboardTable
        selectedGateways={selectedGateways}
        selectedProjects={selectedProjects}
        payments={payments}
      />
      <PieChart
        dataSet={chartData?.data || []}
        labels={chartData?.labels || []}
      />
    </div>
  );
};

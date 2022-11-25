import React, { FC, useCallback, useMemo, useState } from 'react';
import { Gateway, Payment, Project } from '../../models/models';
import { DashboardTableLine } from '../DashboardTableLine/DashboardTableLine';

interface DashboardTableProps {
  selectedProjects: Project[];
  selectedGateways: Gateway[];
  payments: Payment[];
}

export const DashboardTable: FC<DashboardTableProps> = (props) => {
  const { selectedProjects, selectedGateways, payments } = props;
  const [totals, setTotals] = useState<{ [projectId: string]: number }>({});

  const handleCalculateTotal = (newTotal: number, projectId: string) => {
    if (Object.keys(totals).length === 0) {
      setTotals({
        [projectId]: newTotal,
      });
    } else {
      const projectsTotals = { ...totals, [projectId]: newTotal };
      setTotals(projectsTotals);
    }
  };

  const presentTotalAmount = useMemo(
    () => payments.reduce((acc, curr) => curr.amount + acc, 0),
    [payments],
  );

  const projectPayments = useCallback(
    (projectId: string) => {
      return payments.filter((payment) => payment.projectId === projectId);
    },
    [selectedProjects, payments],
  );

  const tableLabel = useMemo(() => {
    const gatewayLabel =
      selectedGateways.length === 1 ? selectedGateways[0].name : 'All gateways';
    const projectLabel =
      selectedProjects.length === 1 ? selectedProjects[0].name : 'All projects';
    return `${projectLabel} | ${gatewayLabel}`;
  }, [selectedGateways, selectedProjects]);

  return (
    <div>
      <div>{tableLabel}</div>
      {selectedProjects?.map((project) => (
        <DashboardTableLine
          gateways={selectedGateways}
          key={project.projectId}
          project={project}
          payments={projectPayments(project.projectId)}
        />
      ))}
      <div>Total: {presentTotalAmount}</div>
    </div>
  );
};

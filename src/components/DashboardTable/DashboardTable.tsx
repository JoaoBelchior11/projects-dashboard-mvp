import React, { FC, useCallback, useMemo } from 'react';
import { Gateway, Payment, Project } from '../../models/models';
import { DashboardTableLine } from '../DashboardTableLine/DashboardTableLine';
import styles from './DashboardTable.module.scss';

interface DashboardTableProps {
  selectedProjects: Project[];
  selectedGateways: Gateway[];
  payments: Payment[];
}

export const DashboardTable: FC<DashboardTableProps> = (props) => {
  const { selectedProjects, selectedGateways, payments } = props;

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
      <div className={styles.dashboardTable}>
        <div className={styles.tableLabel}>{tableLabel}</div>
        {selectedProjects?.map((project) => (
          <DashboardTableLine
            gateways={selectedGateways}
            key={project.projectId}
            project={project}
            payments={projectPayments(project.projectId)}
          />
        ))}
      </div>
      <div className={styles.totalLine}>
        Total: {presentTotalAmount.toFixed(3)} USD
      </div>
    </div>
  );
};

import React, { FC, useCallback, useMemo, useState } from 'react';
import { Gateway, Payment, Project } from '../../models/models';
import styles from './DashboardTableLine.module.scss';

interface DashboardTableLineProps {
  project: Project;
  gateways: Gateway[];
  payments: Payment[];
}

export const DashboardTableLine: FC<DashboardTableLineProps> = (props) => {
  const { project, payments, gateways } = props;
  const [showTable, setShowTable] = useState(false);

  const totalAmount = useMemo(
    () => payments?.reduce((acc, curr) => curr.amount + acc, 0),
    [payments],
  );

  const labelGateway = useCallback(
    (gatewayId: string) => {
      return gateways.find((gateway) => gateway.gatewayId === gatewayId)?.name;
    },
    [gateways],
  );

  return (
    <>
      <div
        className={styles.lineLabel}
        onClick={() => setShowTable((prev) => !prev)}
      >
        <div>{project.name}</div>
        <div>Total: {totalAmount.toFixed(3)} USD</div>
      </div>
      {showTable && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              {gateways.length !== 1 && <th>Gateway</th>}
              <th>Transaction ID</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {payments?.map((payment) => (
              <tr key={payment.paymentId}>
                <td>{payment.created}</td>
                {gateways.length !== 1 && (
                  <td>{labelGateway(payment.gatewayId) || ''}</td>
                )}
                <td>{payment.paymentId}</td>
                <td>{payment.amount.toFixed(0)} USD</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

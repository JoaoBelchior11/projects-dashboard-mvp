import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { FC, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  labels: string[];
  dataSet: number[];
}

export const PieChart: FC<PieChartProps> = (props) => {
  const { labels, dataSet } = props;
  console.log('data', labels);
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: '# of Votes',
          data: dataSet,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }),
    [dataSet, labels],
  );
  return <Pie data={data} />;
};

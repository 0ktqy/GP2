import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  const chartData = {
    labels: [
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'AC',
        data: [
          72, 25, 15, 25, 23, 5,
        ],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'DC',
        data: [
          37, 8, 8, 58, 139, 83,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">2018 - 2023/Q1 DC - AC</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;

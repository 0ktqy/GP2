import { PureComponent, useState } from 'react';
import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';



// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function NewDashboardPieChart() {

    const data01 = [
        { name: 'Elektrikli', value: 400 },
        { name: 'Dizel', value: 35000 },
        { name: 'Benzin', value: 30000 },
        { name: 'LPG', value: 33000 },
        { name: 'Hibrit', value: 1000 },
        { name: 'Diğer', value: 1000 },
      ];
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Stations Type</h2>
        <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
      />       
      <Tooltip />
      </PieChart>
      </header>
    </div>
  );
}

export default NewDashboardPieChart;

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




function NewDashboardBarChart() {

    const data = [
        {
          name: '2018',
          Personal: 4000,
          Corporate: 2400,
          amt: 2400,
        },
        {
          name: '2019',
          Personal: 3000,
          Corporate: 1398,
          amt: 2210,
        },
        {
          name: '2020',
          Personal: 2000,
          Corporate: 9800,
          amt: 2290,
        },
        {
          name: '2021',
          Personal: 2780,
          Corporate: 3908,
          amt: 2000,
        },
        {
          name: '2022',
          Personal: 1890,
          Corporate: 4800,
          amt: 2181,
        },
        {
          name: '2023',
          Personal: 2390,
          Corporate: 3800,
          amt: 2500,
        },

      ];


  return (
      <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <hader className="px-5 py-4 border-b border-slate-100">
      <h2 className="font-semibold text-slate-800">Account Type</h2>
      <br/>
      <li  style={{ width: "100%", height: 350, }}> 
        <ResponsiveContainer >
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Personal" fill="#8884d8" />
            <Bar dataKey="Corporate" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </li>
      </hader>
    </div>
  );
}

export default NewDashboardBarChart;

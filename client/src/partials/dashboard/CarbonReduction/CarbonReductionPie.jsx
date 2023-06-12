import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const CarbonReductionPie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/CarbonReductionDCAC")
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];


  return (


    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <hader className="px-5 py-4 border-b border-slate-100">
      <h2 className="font-semibold text-slate-800">CO2-Bancmark</h2>
      <br/>
      <li  style={{ width: 300, height: 293 }}> 
          <ResponsiveContainer >
              <PieChart >
                <Pie data={data} dataKey="CO2" nameKey="Model" cx="50%" cy="50%"  fill="#283593" label />
                <Legend />
                <Tooltip />
              </PieChart>
          </ResponsiveContainer>
          </li>



          </hader>
  
      </div>
    
  );
};




export default CarbonReductionPie;



// <Pie data={data} dataKey="adimne" nameKey="title" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />

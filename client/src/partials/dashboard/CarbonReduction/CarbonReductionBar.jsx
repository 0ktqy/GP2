
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CarbonReductionBar() {

    
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/stationtype")
      .then(response => setData(response.data)
      );
  }, [

  ]);



  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <hader className="px-5 py-4 border-b border-slate-100">
      <h2 className="font-semibold text-slate-800">DC & AC</h2>
      <br/>
      <li  style={{ width: 300, height: 293 }}> 
          <ResponsiveContainer>
          <BarChart data={data} col>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
                <XAxis dataKey="StationType" />
                <YAxis 
                fontSize={11}
                />      
                <Tooltip />
                <Legend /> 

 
            <Bar dataKey="Station" fill="#283593" />
            </BarChart>
          </ResponsiveContainer>

      </li>
      </hader>


    </div>

  );
}




export default CarbonReductionBar;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const DateStationLine = () => {
 

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8800/StationLine")
        .then(response => setData(response.data)
        );
    }, [
  
    ]);
  
  
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
    <hader className="px-5 py-4 border-b border-slate-100">
      <h2 className="font-semibold text-slate-800">Station Num</h2>
      <br/>
      <li  style={{ width: 300, height: 293 }}> 
      <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
        <XAxis 
            dataKey="Date" />
        <YAxis
        fontSize={11}
        />      
        <Tooltip />
        <Legend />    
        <Line type="monotone" dataKey="Station" stroke="#283593"  fill="#283593"/>
    </LineChart>


      </ResponsiveContainer>
  
      </li>
      </hader>


    </div>

  );
}

export default DateStationLine;

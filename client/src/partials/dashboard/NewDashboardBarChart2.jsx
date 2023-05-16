
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function NewDashboardBarChart2() {
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
      <h2 className="font-semibold text-slate-800">Public & Private</h2>
      <br/>
      <li  style={{ width: 300, height: 293, }}> 
          <ResponsiveContainer>
          <BarChart data={data} col>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
                <XAxis dataKey="stationStatus" />
                <YAxis  />      
                <Tooltip />
                <Legend /> 

 
            <Bar dataKey="StationNum" fill="#283593" />
            </BarChart>
          </ResponsiveContainer>

      </li>
      </hader>


    </div>

  );
}





// // return (
// //   <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
// //     <header className="px-5 py-4 border-b border-slate-100">
// //       <h2 className="font-semibold text-slate-800">2018 - 2023/Q1 DC - AC</h2>
// //       <li style={{ width: "100%", height: 350 }}>
// //       <ResponsiveContainer >
// //         <BarChart
// //           width={500}
// //           height={300}
// //           data={data}
// //           margin={{
// //             top: 5,
// //             right: 30,
// //             left: 20,
// //             bottom: 5,
// //           }}
// //         >
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="title" />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />
// //           <Bar dataKey="adimne" fill="#8884d8" />
// //         </BarChart>
// //       </ResponsiveContainer>
// //     </li>
// //     </header>
// //   </div>
// // );
// }





export default NewDashboardBarChart2;
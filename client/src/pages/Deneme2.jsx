import { useState } from "react";
import { PieChart, Pie, LineChart, Line, BarChart, Bar } from "recharts";
import html2pdf from "html2pdf.js";
import Segmet from "../partials/personal/SegmentDistrubition"
import Segmet2 from "../partials/personal/SegmentDistrubition"

function Deneme2() {

  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSubTopic, setSelectedSubTopic] = useState('');
  const [selectedChartType, setChartType] = useState("");

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
    setSelectedSubTopic('');
    setChartType('');
  };

  const handleSubTopicChange = (event) => {
    setSelectedSubTopic(event.target.value);
    setChartType('');
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

const data = [
  { name: "A", value: 50 },
  { name: "B", value: 20 },
  { name: "C", value: 30 },
];
const data2 = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 200 },
  { name: "E", value: 278 },
  { name: "F", value: 189 },
];
  let chart;
  if (selectedChartType === "pie") {
    chart = (
      <PieChart className="border border-gray-600 w-72 h-72 absolute bg-white line-chart-handle" width={400} height={400}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" />
      </PieChart>
    );
  } else if (selectedChartType === "line") {
    chart = (
      <LineChart className="border border-gray-600 w-72 h-72 absolute bg-white line-chart-handle" width={400} height={400} data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    );
  } else if (selectedChartType === "bar") {
    chart = (
      <BarChart className="border border-gray-600 w-72 h-72 absolute bg-white line-chart-handle" width={400} height={400} data={data}>
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    );
  }


  const downloadPDF = () => {
    const chartsHTML = document.getElementById("charts-container");
    html2pdf(chartsHTML, {
      margin: [0, 0, 0, 0],
      filename: "charts.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "px", format: "a4", orientation: "portrait" },

    });
  };


  return (
    

    <div className="container mx-auto my-4">
    <div id="charts-container">
    <h1 className="text-3xl font-bold mb-3">Report Form</h1>

{/* Departman */}
<div>

<h2 className="text-lg font-medium mb-2">Select Department:</h2>   
 <select       className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-60"
id="topic-select" value={selectedTopic} onChange={handleTopicChange}>
      
      <h1 className="text-3xl font-bold mb-3">Title</h1>
      <option value="finance">Finance</option>
      <option value="customer">Customer</option>
      <option value="station">Station</option>
    </select>
    <br/>
    <br/>
</div>

{/* Finans */}
{selectedTopic === 'finance' &&  (
<div>
<h2 className="text-lg font-medium mb-2">Department of Finance:</h2>  
  <select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-60"
    id="subtopic-select"  value={selectedSubTopic} onChange={handleSubTopicChange}>
    <h1 className="text-3xl font-bold mb-3">Finance</h1>
    <option value="revenue">Revenue</option>
    <option value="energy-sales">Energy Sales</option>
    <option value="invoice">Invoice</option>
  </select>
  <br/>
  <br/>
</div>
  )}

{/* Customer */}
{selectedTopic === 'customer' && (
    <div>
<h2 className="text-lg font-medium mb-2">Department of Customer:</h2>  
      <select           className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600  w-60"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <h1 className="text-3xl font-bold mb-3">Title</h1>
        <option value="customer-count">Customer Count</option>
        <option value="active-customer-count">Active Customer Count</option>
      </select>
      <br/>
      <br/>
    </div>
  )}

{/* Station */}
{selectedTopic === 'station' && (
    <div>
<h2 className="text-lg font-medium mb-2">Department of Station:</h2>        <select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600  w-60"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <h1 className="text-3xl font-bold mb-3">Title</h1>
        <option value="station-count">Station Count</option>
        <option value="city-distribution">City Distribution</option>
        <option value="segment-distribution">Segment Distribution</option>
      </select>
      <br/>
      <br/>
    </div>
  )}


{/* Chart */}
{selectedSubTopic   ==='city-distribution'  &&(
<div>

<h6 className="text-3xl mb-3">Select Chart Type</h6>
<select id="chartType" value={selectedChartType} onChange={handleChartTypeChange}>
  <option value="">Select chart type</option>
  <option value="pie">Pie Chart</option>
  <option value="line">Line Chart</option>
  <option value="bar">Bar Chart</option>
</select>

{chart}
</div>
)}
<button onClick={downloadPDF}>Download Personal Report</button>

    {/* Chart */}
    {selectedSubTopic ==='segment-distribution' &&(
<div>
   <Segmet/>

</div>
)}

    </div> 
   
    </div>
    
  );
}

export default Deneme2;


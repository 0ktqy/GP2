import { useState } from "react";
import { PieChart, Pie, LineChart, Line, BarChart, Bar } from "recharts";
import html2pdf from "html2pdf.js";
import SegmentDistrubition from "../personal/SegmentDistrubition"
import SelectData from "../exportData/SelectData"


function PersonalAnalysisForm() {

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
      
    
      <option value="ceoDashboard">CEO Dashboard</option>
      <option value="technical">Technical</option>
      <option value="marketing">Marketing</option>
      <option value="customerExperience">Customer Experience</option>
      <option value="sustainability">Sustainability</option>
      <option value="sales">Sales</option>
      <option value="businessDevelopment">Business Development</option>
      <option value="operational">Operational</option>
      <option value="others">Others</option>


    </select>
    <br/>
    <br/>
</div>

{/* ceoDashboard */}
{selectedTopic === 'ceoDashboard' &&  (
<div>
<h2 className="text-lg font-medium mb-2">Ceo Dashboard:</h2>  
  <select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-80"
    id="subtopic-select"  value={selectedSubTopic} onChange={handleSubTopicChange}>
    <option value="return-on-investment">Return on Investment </option>
    <option value="top-DC-station">Top 5 DC Station  </option>
    <option value="energy-consumed">Energy Consumed</option>
    <option value="cap-ex">CapEx</option>
  </select>
  <div>
  <br/>

  <button className="bg-gray-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={downloadPDF}>Download Personal Report</button>

  </div>

    {/* Chart */}
    {selectedSubTopic ==='return-on-investment' &&(
     <div>
       <SegmentDistrubition/>
     </div>

     )}

    {/* Chart */}
    {selectedSubTopic !='return-on-investment' &&(
     <div>
        <SegmentDistrubition/>
     </div>

     )}


</div>
  )}

{/* Technical */}
{selectedTopic === 'technical' && (
   
   <div>
        <h2 className="text-lg font-medium mb-2">Department of Technical:</h2>        
        <select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600  w-80"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <option value="number-failures">Number of Failures</option>
        <option value="dt-distribution">DTC Code Distribution</option>
        <option value="segment-distribution">Ofline Stations</option>


      </select>
      <div>
      <br/>

<button className="bg-gray-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={downloadPDF}>Download Personal Report</button>

</div>

      
         {/* Chart */}
    {selectedSubTopic ==='number-failures' &&(
     <div>
       <SegmentDistrubition/>
     </div>

     )}

    {/* Chart */}
    {selectedSubTopic !='number-failures' &&(
     <div>
        <SegmentDistrubition/>
     </div>

     )}
  
    </div>

  )}

{/* Marketing */}
{selectedTopic === 'marketing' && (
    <div>
<h2 className="text-lg font-medium mb-2">Department of Marketing:</h2>        
<select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-80"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <option value="mastercard-customers">MasterCard Customers Data</option>
        <option value="customers-coupon">Customers Using the Coupon</option>
        <option value="social-medya">Social Medya Data</option>
      </select>
      <div>
      <br/>

<button className="bg-gray-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={downloadPDF}>Download Personal Report</button>

</div>

         {/* Chart */}
         {selectedSubTopic ==='mastercard-customers' &&(
     <div>
       <SegmentDistrubition/>
     </div>

     )}

    {/* Chart */}
    {selectedSubTopic !='mastercard-customers' &&(
     <div>
        <SegmentDistrubition/>
     </div>

     )}


      
    </div>
)}

{/* Customer Experience */}
{selectedTopic === 'customerExperience' && (
    <div>
<h2 className="text-lg font-medium mb-2">Department of CX:</h2>        
<select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-80"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <option value="active-inactive-customers">Active & Inactive Custumers </option>
        <option value="churn-customers-data">Churn Customers Data</option>
        <option value="retention-analysis-data">Retention Analysis Data</option>
      </select>
      <div>
      <br/>

<button className="bg-gray-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={downloadPDF}>Download Personal Report</button>

</div>

         {/* Chart */}
         {selectedSubTopic ==='active-inactive-customers' &&(
     <div>
       <SegmentDistrubition/>
     </div>

     )}

    {/* Chart */}
    {selectedSubTopic !='active-inactive-customers' &&(
     <div>
        <SegmentDistrubition/>
     </div>

     )}


    </div>
)}

{/* sustainability */}
{selectedTopic === 'sustainability' && (
    <div>
      <h2 className="text-lg font-medium mb-2">Department of Sustainability:</h2>  
      <select           className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600  w-80"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <option value="curbon-reduciton">Carbon Reduction - Fuel Oil</option>
        <option value="curbon-reducitonTr">Carbon Reduction - TR Emission</option>
      </select>
      <div>
      <br/>

<button className="bg-gray-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={downloadPDF}>Download Personal Report</button>

</div>

      {/* Chart */}
         {selectedSubTopic ==='curbon-reduciton' &&(
     <div>
       <SegmentDistrubition/>
     </div>

     )}

    {/* Chart */}
    {selectedSubTopic !='curbon-reduciton' &&(
     <div>
        <SegmentDistrubition/>
     </div>

     )}


    </div>
  )}

{/* Sales */}
{selectedTopic === 'sales' && (
    <div>
<h2 className="text-lg font-medium mb-2">Department of Trade and Sales :</h2>        <select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600  w-60"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <option value="station-count">Station Count</option>
        <option value="city-distribution">City Distribution</option>
        <option value="segment-distribution">Segment Distribution</option>
      </select>
      <div>
      <br/>

<button className="bg-gray-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={downloadPDF}>Download Personal Report</button>

</div>


      {/* Chart */}
      {selectedSubTopic ==='station-count' &&(
     <div>
       <SegmentDistrubition/>
     </div>

     )}

    {/* Chart */}
    {selectedSubTopic !='station-count' &&(
     <div>
        <SegmentDistrubition/>
     </div>

     )}



    </div>
  )}

{/* businessDevelopment */}
{selectedTopic === 'businessDevelopment' && (
    <div>
<h2 className="text-lg font-medium mb-2">Department of BD:</h2>        
    <select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600  w-80"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <option value="station-dc-ac">DC & AC Stations</option>
        <option value="ınvestors-profile">Investors Profiles</option>
      </select>
      <div>
      <br/>

<button className="bg-gray-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={downloadPDF}>Download Personal Report</button>

</div>



      {/* Chart */}
      {selectedSubTopic ==='station-dc-ac' &&(
     <div>
       <SegmentDistrubition/>
     </div>

     )}

    {/* Chart */}
    {selectedSubTopic !='station-dc-ac' &&(
     <div>
        <SegmentDistrubition/>
     </div>

     )}




    </div>
  )}

{/* Operational */}
{selectedTopic === 'operational' && (
    <div>
<h2 className="text-lg font-medium mb-2">Department of Operational:</h2>        <select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600  w-60"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <option value="tender-status">Tender Status</option>
        <option value="transformer-investment">Transformer Investment</option>
        <option value="distribution-companies">Distribution Companies</option>
      </select>
      <div>
      <br/>

<button className="bg-gray-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={downloadPDF}>Download Personal Report</button>

</div>


      {/* Chart */}
      {selectedSubTopic ==='tender-status' &&(
     <div>
       <SegmentDistrubition/>
     </div>

     )}

    {/* Chart */}
    {selectedSubTopic !='tender-status' &&(
     <div>
        <SegmentDistrubition/>
     </div>

     )}
    </div>
  )}


{/* Others */}
{selectedTopic === 'others' && (
    <div>
<h2 className="text-lg font-medium mb-2">Department of Station:</h2>        <select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600  w-60"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <option value="roadmap-company">Roadmap of Company</option>
        <option value="strategy-planning">Strategy Planning</option>
        <option value="human-resources">Human Resource</option>
      </select>
      <br/>
      <div>
      <br/>

<button className="bg-gray-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={downloadPDF}>Download Personal Report</button>

</div>


      {/* Chart */}
      {selectedSubTopic ==='roadmap-company' &&(
     <div>
       <SegmentDistrubition/>
     </div>

     )}

    {/* Chart */}
    {selectedSubTopic !='roadmap-company' &&(
     <div>
        <SegmentDistrubition/>
     </div>

     )}


    </div>
  )}
  <br/>


    </div> 
    </div>
    
  );
}

export default PersonalAnalysisForm;


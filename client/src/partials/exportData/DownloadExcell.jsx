import { useState } from "react";
import SelectData from "./SelectData"
import CarbonReduction from "./DataExport/CarbonReduction";
import AllStationDCAC from "./dataExport/AllStationDCAC";
import CustomersActive from "./dataExport/customersActive";

function DownloadExcell() {

  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSubTopic, setSelectedSubTopic] = useState('');

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
    setSelectedSubTopic('');
    setChartType('');
  };

  const handleSubTopicChange = (event) => {
    setSelectedSubTopic(event.target.value);
    setChartType('');
  };




  


 

  return (
    


    <div className="container mx-auto my-4">
    <div id="charts-container">
    <h1 className="text-3xl font-bold mb-3">Export Data to Excel</h1>




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
  <br/>
  <br/> 


{/*return-on-investment*/}
{selectedSubTopic === 'return-on-investment' && (
   
   <div>

< CarbonReduction/>

      <div>
      </div>
    </div>

  )}


{/* !return-on-investment*/}
{selectedSubTopic !== 'return-on-investment' && (
   
   <div>

< SelectData/>

      <br/>
      <br/>
      <div>
      </div>
    </div>

  )}


</div>
  )}

{/* Technical */}
{selectedTopic === 'technical' && (
   
   <div>
        <h2 className="text-lg font-medium mb-2">Department of Technical:</h2>        <select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600  w-80"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <option value="number-failures">Number of Failures</option>
        <option value="dt-distribution">DTC Code Distribution</option>
        <option value="segment-distribution">Ofline Stations</option>


      </select>
      <br/>
      <br/>
      








{/* Dont Know*/}
{selectedSubTopic  && (
   
   <div>

< SelectData/>

      <br/>
      <br/>

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
      <br/>
      <br/>



{/* Dont Know*/}
{selectedSubTopic  && (
   
   <div>

< SelectData/>

      <br/>
      <br/>

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
      <br/>
      <br/>



{/*active-inactive-customers*/}
{selectedSubTopic === 'active-inactive-customers' && (
   
   <div>

< CustomersActive/>
      <br/>
      <br/>
 
    </div>

  )}


{/* !active-inactive-customers*/}
{selectedSubTopic !== 'active-inactive-customers' && (
   
   <div>

< SelectData/>

      <br/>
      <br/>

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
      <br/>
      <br/>




{/*curbon-reduciton*/}
{selectedSubTopic === 'curbon-reduciton' && (
   
   <div>
< CarbonReduction/>
      <br/>
      <br/>
    
    </div>

  )}


{/* !curbon-reduciton*/}
{selectedSubTopic !== 'curbon-reduciton' && (
   
   <div>

< SelectData/>

      <br/>
      <br/>
      <div>
      </div>
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
      <br/>
      <br/>




{/* Dont Know*/}
{selectedSubTopic  && (
   
   <div>

< SelectData/>

      <br/>
      <br/>

    </div>

  )}


    </div>
  )}

{/* businessDevelopment */}
{selectedTopic === 'businessDevelopment' && (
    <div>
<h2 className="text-lg font-medium mb-2">Department of BD:</h2>        
    <select className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600  w-60"
        id="subtopic-select" value={selectedSubTopic} onChange={handleSubTopicChange}>
        <option value="station-dc-ac">DC & AC Stations</option>
        <option value="ınvestors-profile">Investors Profiles</option>
      </select>
      <br/>
      <br/>

{/*return-on-investment*/}
{selectedSubTopic === 'station-dc-ac' && (
   
   <div>

< AllStationDCAC/>
      <br/>
      <br/>
 
    </div>

  )}


{/* !return-on-investment*/}
{selectedSubTopic !== 'station-dc-ac' && (
   
   <div>

< SelectData/>

      <br/>
      <br/>

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
      <br/>
      <br/>




{/* Dont Know*/}
{selectedSubTopic  && (
   
   <div>

< SelectData/>

      <br/>
      <br/>

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
      <br/>

{/* Dont Know*/}
{selectedSubTopic  && (

   <div>

< SelectData/>

      <br/>
      <br/>

    </div>

  )} 
    </div>
  )}
    </div> 
   
  </div>
  );
}

export default DownloadExcell;

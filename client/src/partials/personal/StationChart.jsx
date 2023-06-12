import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import Draggable from "react-draggable";
import Draggable2 from "./NewTalep";
// import CarbonReductionPie from "../dashboard/CarbonReduction/CarbonReductionPie";
// import CarbonReductionLine from "../dashboard/CarbonReduction/CarbonReductionLine";
// import CarbonReductionBar from "../dashboard/CarbonReduction/CarbonReductionBar";
import DCandACPie from "../dashboard/Stations/DCandACPie";
import DateACandDCBar from "../dashboard/Stations/DateACandDCBar";
import DateStationLine from "../dashboard/Stations/DateStationLine";


const StationChart = () => {
 


  const [selectedCharts, setSelectedCharts] = useState([]);
  const [chartPositions, setChartPositions] = useState({});

  const handleChartSelect = (value) => {
    if (selectedCharts.includes(value)) {
      setSelectedCharts(selectedCharts.filter((item) => item !== value));
    } else {
      setSelectedCharts([...selectedCharts, value]);
    }
  };

  const handleChartDrag = (event, data, chartName) => {
    setChartPositions({ ...chartPositions, [chartName]: data });
  };

  const downloadPDF = () => {
    const chartsHTML = document.getElementById("charts-container");
    html2pdf(chartsHTML, {
      margin: [0, 0, 0, 0],
      filename: "charts.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "px", format: "a4", orientation: "portrait" },

    });
  };

  const chartData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },

  ];
  



  const chartOptions = [
    { name: "Pie Chart", value: "pie" },
    { name: "Line Chart", value: "line" },
    { name: "Bar Chart", value: "bar" },
    { name: "Yeni Talep", value: "talep" }
    
  ];
  return (
    <div>
      <div id="charts-container">
    
    <div  className="container mx-auto mt-5">
      <div id="charts-container"  style={{ width: '100%', height: 500, position: 'relative' }}>
        <div className="w-1/3.5">
          <div className="mb-5">
            <h2 className="text-lg font-medium mb-2">Select charts:</h2>
            <div className="flex space-x-4">
              {chartOptions.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value={option.value}
                    checked={selectedCharts.includes(option.value)}
                    onChange={() => handleChartSelect(option.value)}
                  />
                  <span className="ml-2">{option.name}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="relative" >





            {selectedCharts.includes("pie") && (
              <Draggable
            
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={chartPositions["pie"]}
                onStop={(event, data) =>
                  handleChartDrag(event, data, "pie")
                }
              >
                <div className="absolute p-4 handle">

     {/* Stacked bar chart (Sales VS Refunds) */}
           
              <DCandACPie/>
      
              
  

              <br/>
  <br/>
                  
                </div>
              </Draggable>
            )}




              {selectedCharts.includes("talep") && (
            <div>
 <Draggable2/>

            </div>
            )}



            {selectedCharts.includes("line") && (
              <Draggable
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={chartPositions["line"]}
                onStop={(event, data) =>
                  handleChartDrag(event, data,"line")
                }>
  <div className="absolute p-4 handle">

{/* Stacked bar chart (Sales VS Refunds) */}
      
         <DateStationLine/>
 
         


         <br/>
<br/>
             
           </div>
              
              </Draggable>
            )}


            {selectedCharts.includes("bar") && (
              <Draggable
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={chartPositions["bar"]}
              onStop={(event, data) => handleChartDrag(event, data, "bar")}
            >
               <div className="absolute p-4 handle">
              <DateACandDCBar/>
              </div>
              
              </Draggable>
            )}


          </div>
        </div>
      </div>



   
    </div>
      
      </div>

    </div>
  );
};




export default StationChart;

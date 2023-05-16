import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

const AllStationDCAC = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8800/AllStationDCAC");
    setData(result.data);
  };


  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
    <div className="container mx-auto flex flex-col justify-center ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchData}
      >
        Fetch Data
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={downloadExcel}
        disabled={!data.length}
      >
        Download Excel
      </button>
    </div>
  );
};

export default AllStationDCAC;

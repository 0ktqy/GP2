import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Customer from './pages/Costumer';
import Station from './pages/Station';
import Deneme from './pages/Deneme'
import Deneme2 from './pages/Deneme2'
import Draggable from './pages/Draggable2';
import Login from './Login';
import Finance from './pages/Finance'
import Personal from './pages/Personal'
import ExportData from './pages/ExportData'
import CarbonReductionCalculate from './pages/CarbonReductionCalculate'



function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>

      
        <Route exact path="/" element={<Station />} />
        <Route exact path="CarbonReductionCalculate" element={<CarbonReductionCalculate />} />
        <Route exact path="Costumer" element={<Customer />} />
        <Route exact path="Station" element={<Station />} />
        <Route exact path="Finance" element={<Finance/>} />
        <Route exact path="Deneme" element={<Deneme/>} />
        <Route exact path="Login" element={<Login/>} />
        <Route exact path="Deneme2" element={<Deneme2/>} />
        <Route exact path="Draggable" element={<Draggable/>} />
        <Route exact path="Personal" element={<Personal/>} />
        <Route exact path="ExportData" element={<ExportData/>} />




      </Routes>



    </>
  );
}

export default App;


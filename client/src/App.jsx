import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Okioki from './pages/Costumer';
import Station from './pages/Station';
import Deneme from './pages/Deneme'
import Login from './Login';
import Finance from './pages/Finance'

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
        <Route exact path="/" element={<Finance />} />
        <Route exact path="Costumer" element={<Okioki />} />
        <Route exact path="Station" element={<Station />} />
        <Route exact path="Deneme" element={<Deneme/>} />
        <Route exact path="Login" element={<Login/>} />
        <Route exact path="Finance" element={<Finance/>} />

      </Routes>
    </>
  );
}

export default App;


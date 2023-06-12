import React, { useState } from 'react';

const CarbonRC = () => {
  const [energyAmount, setEnergyAmount] = useState('');
  const [stationType, setStationType] = useState('AC');
  const [vehicleClass, setvehicleClass] = useState('SUV');
  const [suppplySource, setSuppplySource] = useState('Renewables');
  const [chargeDuration, setChargeDuration] = useState('');
  const [result, setResult] = useState('');
  const [chargingRate, setChargingRate] = useState('');
  const [chargingTrip, setChargingTrip] = useState('');
  const [consumedLiters, setConsumedListers] = useState('');
  const [fuelEmissionReduced, setFuelEmissionReduced] = useState('');
  const [eGRID, setEGRID] = useState('');
  const [cargerEmission, setCargerEmission] = useState('');
  const [inefficency, setInefficency] = useState('');

 
  const handleEnergyChange = (e) => {




    setEnergyAmount(e.target.value);
  };
  const handleChargeDuration = (e) => {
    setChargeDuration(e.target.value);
  };
  const handleSuppplySource = (e) => {
    setSuppplySource(e.target.value);
  };

  const handleVehicleClass = (e) => {
    setvehicleClass(e.target.value);
  };

  const handleStationChange = (e) => {
    setStationType(e.target.value);
  };

  const calculateCarbonReduction = () => {



  // Charge Rate

    const coefficientCR = energyAmount*60/chargeDuration
    setChargingRate(coefficientCR.toFixed(2));

  // Avarage Trip Rate 
    const coefficientTR = energyAmount/0.202;
    setChargingTrip(coefficientTR.toFixed(2));


  // Consumed L / 100km
    const litreK = vehicleClass === 'SUV' ? 10.8 : 12.12;
    const coefficientCL= coefficientTR*litreK/100;
    setConsumedListers(coefficientCL.toFixed(2));

  //  Fuel Emission (Reduced):
    const coefficientFER= coefficientCL*2.571
    setFuelEmissionReduced(coefficientFER.toFixed(2));
  
  //  eGRID Emission (Produced):
    const coefficientEGRID= energyAmount*0.3600*2.1
    const enerjiK = suppplySource === 'Renewables' ? 0: coefficientEGRID;
    setEGRID(enerjiK.toFixed(2));
          

    const coefficient = stationType === 'AC' ? 0.95 : 0.97;
  //   Charger+Current Inefficency:
    setInefficency((1-coefficient).toFixed(2));

    
  //  Charger Emission (Produced):
  const coefficientChargerEmissions = energyAmount*0.3600*2.1*(1-coefficient)
  const enerjiK2 = suppplySource === 'Renewables' ? 0: coefficientChargerEmissions;
  setCargerEmission(enerjiK2.toFixed(2));


  //  Total Reduced:
  const carbonReduction = coefficientFER-(enerjiK2+enerjiK)
  setResult(carbonReduction.toFixed(2));

  };

  return (
    <div className="container mx-auto p-4">


<div className="mb-4">
        <label htmlFor="suppplySource" className="mr-4 ">
        Elec. Suppply Source 🌞
        </label>


        <select
          id="suppplySource"
          value={suppplySource}
          onChange={handleSuppplySource}
          className="border border-gray-150 p-2 w-40"
        >
          <option value="Renewables">Renewables</option>
          <option value="Hydro">Hydro</option>
          <option value="Coal">Coal</option>
          <option value="NaturalGas">Natural Gas</option>
          <option value="Nuclear">Nuclear</option>
          <option value="Other">Other</option>
       
        </select>


      </div>

      <div className="mb-4">
        <label htmlFor="vehicleClass" className="mr-16 ">
        Vehicle Class 🚘
        </label>


        <select
          id="vehicleClass"
          value={vehicleClass}
          onChange={handleVehicleClass}
          className="border border-gray-150 p-2 w-40 mx-3"
        >
          <option value="SUV">SUV</option>
          <option value="CS">CS</option>
          <option value="Two-Seater">Two Seater</option>
          <option value="Minicompact">Minicompact</option>
          <option value="Subcompact">Subcompact</option>
          <option value="Car-Compact">Car: Compact</option>
          <option value="Mid-Size">Mid-Size</option>
          <option value="Full-size">Full-Size</option>
          <option value="Station-Wagon-Small">Station Wagon Small</option>
          <option value="Station-Wagon-Mid-Size">Station Wagon Mid Size</option>
          <option value="SUV-Compact">SUV: Compact</option>
          <option value="SUV-Standard">SUV: Standard</option>
          <option value="Pickup-Truck-Small">Pickup Truck: Small</option>
          <option value="Pickup-Truck-Standard">Pickup Truck: Standard</option>
          <option value="Minivan-Standard">Minivan: Standard</option>


        </select>


      </div>

      <div className="mb-4">
        <label htmlFor="stationType" className="mr-9">
         Station Type 🔌
        </label>
        <select
          id="stationType"
          value={stationType}
          onChange={handleStationChange}
          className="border border-gray-150 p-2 w-40 mx-11"
        >
          <option value="AC">AC</option>
          <option value="DC">DC</option>
        </select>

   
      </div>
      <div className="mb-4">
        <label htmlFor="energyAmount" className="mr-2">
        Energy Consumed ⚡
        </label>
        <input
          type="number"
          id="energyAmount"
          value={energyAmount}
          onChange={handleEnergyChange}
          className="border border-gray-150 w-40 mx-7"
        />

      <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold mx-5">
                  
                  <span className="hidden xs:block ">      kWh</span>
              </button>    
 
    
      </div>

      <div className="mb-4 ">
        <label htmlFor="chargeDuration" className="mr-2">
        Charge Duration⌛
        </label>
        <input
          type="number"
          id="chargeDuration"
          value={chargeDuration}
          onChange={handleChargeDuration}
          className="border border-gray-150 w-40 mx-12"
        />
           <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold">
                  
                  <span className="hidden xs:block ">     minutes</span>
              </button>      
     
        
      </div>

      
      <button
        onClick={calculateCarbonReduction}
        className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
      >
        Hesapla
      </button>
      {result && (
        <div className="mt-4">
          <p>
            Energy Type : 
            <span className="font-bold"> 
            
           {suppplySource} 
                       
            </span>
     
          </p> 
          <p>
          Charge Rate (Virtual):
            <span className="font-bold"> {chargingRate} </span>  <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold mx-5">
                  
                  <span className="hidden xs:block ">      kWh</span>
              </button>   
          </p>
          <p>
          Average Trip Range: 
            <span className="font-bold"> {chargingTrip} </span>  <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold mx-5">
                  
                  <span className="hidden xs:block ">      km</span>
              </button>   
          </p>
          <p>
          Equivalent Cons. in L:
            <span className="font-bold"> {consumedLiters} </span>  <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold mx-5">
                  
                  <span className="hidden xs:block ">      Liters</span>
              </button>   
          </p>
          <p>
          Fuel Emission (Reduced):
            <span className="font-bold"> {fuelEmissionReduced} </span>  <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold mx-5">
                  
                  <span className="hidden xs:block ">      kgCO2</span>
              </button>   
          </p>
          <p>
         eGRID Emission (Produced):
            <span className="font-bold"> {eGRID} </span>  <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold mx-5">
                  
                  <span className="hidden xs:block ">      kgCO2</span>
              </button>   
          </p>
       
          <p>
          Charger+Current Inefficency:
            <span className="font-bold"> {1-inefficency} </span>  <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold mx-5">
                  
                  <span className="hidden xs:block ">      %</span>
              </button>   
          </p>
          <p>
          Charger+Current (Produced):
            <span className="font-bold"> {cargerEmission} </span>  <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold mx-5">
                  
                  <span className="hidden xs:block ">      kgCO2</span>
              </button>   
          </p>
          <p>
          Total Reduction:
            <span className="font-bold"> {result} </span>  <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold mx-5">
                  
                  <span className="hidden xs:block ">      kgCO2</span>
              </button>   
          </p>
          <p>
          Total Tree:
            <span className="font-bold"> {(result/289).toFixed(2)} </span>  <button className="btn bg-indigo-150 hover:bg-indigo-300 text-black text-bold mx-5">
                  
                  <span className="hidden xs:block ">      Tree 🌳</span>
              </button>   
          </p>
        </div>
      )}
    </div>
  );
};

export default CarbonRC;

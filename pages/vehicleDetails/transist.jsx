import React from 'react';

const Transist = ({ vehicle }) => {
  return (
    <div>
      <h1>Transist Details</h1>
      <p>Assigned Location: {vehicle.assignedLocation}</p>
      <p>Battery Voltage: {vehicle.batteryVoltage}</p>
      <p>Battery Error: {vehicle.batteryError}</p>
      <p>Mileage: {vehicle.mileage}</p>
      <p>Service Status: {vehicle.serviceStatus}</p>
      <p>Current Location: {vehicle.location}</p> 
      <button className='border-b-4 border-2 border-[#2D6C56] rounded text-center p-3'>
            + Add vehicles
          </button>  
    </div>
  );
};

export default Transist;

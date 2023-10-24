import React from 'react';

const VehicleRDetails = ({ vehicle }) => {
  return (
    <div>
      <h1>Vehicle Details</h1>
      <p>Vehicle Identification Number: {vehicle.identificationNumber}</p>
      <p>Fuel Type: {vehicle.fuelType}</p>
      <p>Vehicle Type: {vehicle.vehicleType}</p>
      <p>Color: {vehicle.color}</p>
      <p>Current Location: {vehicle.location}</p>
      <p>Meter: {vehicle.vehicleMeter}</p>
      <p>Mileage: {vehicle.mileage}</p>
      <button className='border-b-4 border-2 border-[#2D6C56] rounded text-center p-3'>
            + Add vehicles
          </button>
    </div>
  );
};

export default VehicleRDetails;

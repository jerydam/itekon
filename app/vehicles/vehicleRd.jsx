import React, { useEffect } from 'react';
import "/styles/global.css";
const VehicleRDetails = ({ vehicle }) => {
 
  return (
    <div className='border-2 p-5 w-96'>
      <p className='my-5 font-bold '>Vehicle Details</p>
      <p className='my-5 '>Vehicle Identification Number: {vehicle?.identificationNumber}</p>
      <p className='my-5 '>Fuel Type: {vehicle?.fuelType}</p>
      <p className='my-5 '>Vehicle Type: {vehicle?.vehicleType}</p>
      <p className='my-5 '>Color: {vehicle?.color}</p>
      <p className='my-5 '>Current Location: {vehicle?.location}</p>
      <p className='my-5 '>Meter: {vehicle?.vehicleMeter}</p>
      <p className='my-5 '>Mileage: {vehicle?.mileage}</p>
      <button className='border-b-4 border-2 border-[#2D6C56] text-[#2D6C56]  rounded text-center p-3'>
            Transist Report
          </button>
    </div>
  );
};

export default VehicleRDetails;

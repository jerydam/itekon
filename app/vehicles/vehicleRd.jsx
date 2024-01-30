import React, { useEffect } from 'react';
import "/styles/global.css";
const VehicleRDetails = ({ vehicle }) => {
 
  return (
    <div  className=' flex flex-col px-5 w-full gap-3 h-full '>
      <p className='font-bold '>Vehicle Details</p>
      <p className='text-left'>Vehicle Identification Number: {vehicle?.identificationNumber}</p>
      <p className='text-left'>Fuel Type: {vehicle?.fuelType}</p>
      <p className='text-left'>Vehicle Type: {vehicle?.vehicleType}</p>
      <p className='text-left'>Color: {vehicle?.color}</p>
      <p className='text-left'>Current Location: {vehicle?.location}</p>
      <p className='text-left'>Meter: {vehicle?.vehicleMeter}</p>
      <p className='text-left'>Mileage: {vehicle?.mileage}</p>
      <button className='border-b-4 border-2 border-[#2D6C56] text-[#2D6C56]  rounded text-center p-3'>
            Transist Report
          </button>
    </div>
  );
};

export default VehicleRDetails;

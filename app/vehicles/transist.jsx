import React, { useEffect } from 'react';
import "/styles/global.css";
const Transist = ({ vehicle }) => {  

  return (
    <div  className=' flex flex-col px-5 w-full gap-3 h-full '>
      <p className='font-bold'>Transist Details</p>
      <div className='flex justify-between '>
      <p className='text-left'>Assigned Location: {vehicle?.assignedLocation}</p> <a href="" className='text-[#2D6C56]'>See History</a>
      </div>
      <p className='text-left'>Battery Voltage: {vehicle?.batteryVoltage}</p>
      <p className='text-left'>Battery Error: {vehicle?.batteryError}</p>
      <p className='text-left'>Mileage: {vehicle?.mileage}</p>
      <p className='text-left'>Service Status: {vehicle?.serviceStatus}</p>
      <p className='text-left'>Current Location: {vehicle?.location}</p> 
      <button className='border-b-4 border-2 border-[#D33F00] text-[#D33F00] rounded text-center p-3'>
            Stop Vehicle
          </button>  
    </div>
  );
};

export default Transist;

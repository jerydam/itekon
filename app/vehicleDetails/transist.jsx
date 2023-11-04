import React, { useEffect } from 'react';
import "/styles/global.css";
import { useRouter } from 'next/router';


const Transist = ({ vehicle }) => {
  const router = useRouter();
    
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Replace '/login' with the appropriate login page URL
    }
  }, [router]);


  return (
    <div  className='border-2 p-5 w-96'>
      <p className='font-bold'>Transist Details</p>
      <div className='flex justify-between '>
      <p className='my-5 '>Assigned Location: {vehicle?.assignedLocation}</p> <a href="" className='text-[#2D6C56]'>See History</a>
      </div>
      <p className='my-5 '>Battery Voltage: {vehicle?.batteryVoltage}</p>
      <p className='my-5 '>Battery Error: {vehicle?.batteryError}</p>
      <p className='my-5 '>Mileage: {vehicle?.mileage}</p>
      <p className='my-5 '>Service Status: {vehicle?.serviceStatus}</p>
      <p className='my-5 '>Current Location: {vehicle?.location}</p> 
      <button className='border-b-4 border-2 border-[#D33F00] text-[#D33F00] rounded text-center p-3'>
            Stop Vehicle
          </button>  
    </div>
  );
};

export default Transist;

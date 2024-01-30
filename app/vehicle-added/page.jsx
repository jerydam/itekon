'use client'
import Navbar from '@/components/nav';
import Sidebar from '@/components/sidebar';
import { useEffect } from 'react';


const VehiclePage = () => {
  
  const vehicle_name = localStorage.getItem('vehicle_name');
  const driver_name = localStorage.getItem('driver_name');
  const vehicle_id = localStorage.getItem('vehicle_id');
  useEffect(() => {
    const token =  localStorage.getItem('authToken')
    if (!token) {
      window.location.href = './login' // Replace '/login' with the appropriate login page URL
    }
  }, []);

  const handleShowVehicleList = () => {
    window.location.href="./vehicles"
   
    localStorage.removeItem('vehicle_name');
    localStorage.removeItem('driver_name');
    localStorage.removeItem('vehicle_id');
  };

  const handleAddVehicle = () => {

   window.location.href="./fleet/add-vehicle"
   
   localStorage.removeItem('vehicle_name');
   localStorage.removeItem('driver_name');
   localStorage.removeItem('vehicle_id');
  };

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full'>
        <Navbar/>
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="bg-[#2D6C56] w-56 h-56 flex items-center justify-center rounded-full text-white text-2xl">
        &#10003;
      </div>
      <p>You have added {vehicle_name}, {vehicle_id} to your fleet! <br />You also assigned driver {driver_name} to the vehicle.</p>
      <button
        onClick={handleAddVehicle}
        className="text-[#2D6C56]  border-[#2D6C56] border-b-4 border-2 font-semibold px-4 py-2 mt-4 rounded"
      >
       + Add more Vehicle
      </button>
      <button
      onClick={handleShowVehicleList}
         className=" text-[#2D6C56] font-semibold px-4 py-2 mt-4 rounded">
        See Vehicle List
      </button>
      
    </div>
    </div>
    </div>
  );
};

export default VehiclePage;

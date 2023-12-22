import Navbar from '@/components/nav';
import Sidebar from '@/components/sidebar';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'styles/global.css';
useRouter
const VehiclePage = () => {
  const router = useRouter();
    
  useEffect(() => {
    const token =  localStorage.getItem('token')
    if (!token) {
      router.push('/login'); // Replace '/login' with the appropriate login page URL
    }
  }, [router]);

  const handleShowVehicleList = () => {
    // Implement logic to show vehicle list
    console.log('Show Vehicle List');
  };

  const handleAddVehicle = () => {
    // Implement logic to add more vehicles
    console.log('Add Vehicle');
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
      <p>You have added Toyota Camry (car 5) to your fleet! <br />You also assigned driver Joe Bredan to the vehicle.</p>
      <button
        onClick={handleAddVehicle}
        className="text-[#2D6C56]  border-[#2D6C56] border-b-4 border-2 font-semibold px-4 py-2 mt-4 rounded"
      >
       + Add more Vehicle
      </button>
      <button
        onClick={handleShowVehicleList}
        className=" text-[#2D6C56] font-semibold px-4 py-2 mt-4 rounded"
      >
        
        See Vehicle List
      </button>
      
    </div>
    </div>
    </div>
  );
};

export default VehiclePage;

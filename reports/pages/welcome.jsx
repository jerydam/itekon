'use client'
import Sidebar from "@/components/sidebar";
import Navbar from '@/components/nav';
import Engine from '@/components/engine';

const CompleteV = () => {

  

  return (
    <div className="flex lg:flex-row">
      <Sidebar />
      <div className="w-full">
        <Navbar/>
      <Engine/>
    
          <div className='flex flex-col justify-center items-center'>
            <img className='h-64 w-80' src="images/geomap.png" alt="" />
            <p>You are ready to start using iTekton! <br />Complete your profile to get started.</p>
            <button  className='border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] p-3 rounded mt-3'> <a href="/fleet/addVehicle">+ Add Vehicle</a>
        </button>
       
        </div>
        
      
      </div>
    </div>
  );
};

export default CompleteV;

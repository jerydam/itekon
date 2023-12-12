'use client'
import { useState } from 'react';
import {cartel} from '@/index'
import Sidebar from "@/components/sidebar";
import Navbar from '@/components/nav';
import Pagination from '@/components/pagination';
import Engine from '@/components/engine';
const Complete = () => {

  const [showPopup, setShowPopup] = useState(false);
  
  
  const handleAdd = (input) => {
    // Add your logic for handling the input here
    console.log('Adding:', input);
    // You can add your custom logic here for adding the value to your list or state
    setShowPopup(false); // Hide the popup after adding the value
  }
  const handleCancel = () => {
    setShowPopup(false); // Hide the popup when canceled
  };  
  return (
    <div className="flex lg:flex-row">
      <Sidebar />
      <div className="w-full">
        <Navbar/>
      <Engine/>
    
          <div className='flex flex-col justify-center items-center'>
            <img className='h-64 w-80' src="images/geomap.png" alt="" />
            <p>You are ready to start using iTekton! <br />Complete your profile to get started.</p>
            <button onClick={() => setShowPopup(true)} className='border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] p-3 rounded mt-3'> Complete Profile {'-->'}
        </button>
        {showPopup && <Pagination onAdd={handleAdd} onCancel={handleCancel} />}
        </div>
        
      
      </div>
    </div>
  );
};

export default Complete;

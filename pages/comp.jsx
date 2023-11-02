'use client'
import { useState } from 'react';
import {cartel} from '..';
import Sidebar from "@/components/sidebar";
import Navbar from '@/components/nav';

const CompleteV = () => {

  
  return (
    <div className="flex lg:flex-row">
      <Sidebar />
      <div className="w-full">
        <Navbar/>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-4 p-5">
      {cartel.map((item) => (
        <div key={item.id} className="w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4">
          <div className="flex px-4">
            <img src={item.img} alt="Car" />
            <div className="text-center py-5">
              <p>{item.title}</p>
              <p className="text-xl font-bold ">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
     </div>
    
          <div className='flex flex-col justify-center items-center'>
            <img className='h-64 w-80' src="images/geomap.png" alt="" />
            <p>You are ready to start using iTekton! <br />Complete your profile to get started.</p>
            <button  className='border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] p-3 rounded mt-3'> <a href="/addVehicle">+ Add Vehicle</a>
        </button>
       
        </div>
        
      
      </div>
    </div>
  );
};

export default CompleteV;

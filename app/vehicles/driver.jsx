import React, { useEffect, useState } from 'react';
import '/styles/global.css'; 

const Driver = ({driver}) => {
  
  return (
   
    <div  className=' flex flex-col px-5 w-full h-full gap-3'>
      <div className='flex justify-between'>
        <div className='font-bold'>Driver Details</div>
        <a href='' className=' justify-end text-[#2D6C56]'>
          Edit Details
        </a>
      </div>
      
      <p className='text-left'>Name: {driver?.name}</p>
      <p className='text-left'>License ID: {driver?.id}</p>
      <p className='text-left'>Connected Device: {driver?.device}</p>
      <p className='text-left'>Email Address: {driver?.email}</p>
      <p className='text-left'>Social Media: {driver?.media}</p>

          <button className='border-b-4 border-2 border-[#2D6C56] rounded text-center p-3'>
            Call Driver
          </button>
       </div>
       
  );
};

export default Driver;

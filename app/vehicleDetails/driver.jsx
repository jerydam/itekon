import React from 'react';
import '/styles/global.css'; 

import { driver } from '@/index';

const Driver = () => {
  
  return (
    <div className='border-2 p-5 w-96'>
      <div className='flex justify-between'>
        <div className='font-bold'>Driver Details</div>
        <a href='' className=' justify-end text-[#2D6C56]'>
          Edit Details
        </a>
      </div>
      <p className='my-5  text-white'>Name: {driver?.name}</p>
      <p className='my-5 '>License ID: {driver?.id}</p>
      <p className='my-5 '>Connected Device: {driver?.device}</p>
      <p className='my-5 '>Email Address: {driver?.email}</p>
      <p className='my-5 '>Social Media: {driver?.media}</p>

      <button className='border-b-4 border-2 border-[#2D6C56] rounded text-center p-3'>
        Call Driver
      </button>
    </div>
  );
};

export default Driver;

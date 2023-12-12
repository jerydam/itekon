// pages/Dashboard.js
import React from 'react';

const Engine = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between gap-4 p-5">
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#2D6C56]'>
        <div className="flex px-4">
          <img src='images/Carin.png' alt="Car" />
          <div className="text-center py-5">
            <p>Active Engine</p>
            <p className="text-xl font-bold">30</p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#ad3d62]'>
        <div className="flex px-4">
          <img src='images/Car rental.png' alt="Car" />
          <div className="text-center py-5">
            <p>All Driver</p>
            <p className="text-xl font-bold">10</p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#f8c87f]'>
        <div className="flex px-4">
          <img src='images/car.png' alt="Car" />
          <div className="text-center py-5">
            <p>Idle Engine</p>
            <p className="text-xl font-bold">1</p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#52e652]'>
        <div className="flex px-4">
          <img src='images/taxi car.png' alt="Car" />
          <div className="text-center py-5">
            <p>All Engine</p>
            <p className="text-xl font-bold">60</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engine;

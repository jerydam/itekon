'use client';
import React, { useEffect, useState } from 'react';
import { cartel, idColorMap } from '@/index';  // Ensure to import idColorMap
import Sidebar from "@/components/sidebar";
import Map from "@/components/map";
import Navbar from '@/components/nav';
import TransitReports from '@/components/transist';
import TestReports from '@/components/test';
import Reminder from '@/components/reminder';
import Alert from '@/components/alert';
import Vehicles from '@/components/vehicledata';

const Dashboard = (onCancel) => {
  return (
    <div className="flex lg:flex-row">
      <Sidebar />
      <div className="w-full">
        <Navbar />
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
                  <p>All driver</p>
                  <p className="text-xl font-bold">10</p>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#977035]'>
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

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          <div className="w-full overflow-clip lg:w-1/2 border-2 h-60 rounded">
            <Map />
          </div>
          <TransitReports />
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          <TestReports />
          <Reminder />
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          <Vehicles />
          <Alert />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

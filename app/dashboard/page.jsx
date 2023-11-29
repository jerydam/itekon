'use client'
import React, { useEffect, useState } from 'react';
import Popup from '@/components/popups/popup';
import { TiPlus, TiTimes } from 'react-icons/ti';
import { cartel } from '@/index';
import Sidebar from "@/components/sidebar";
import Map from "@/components/map";
import Navbar from '@/components/nav';
import PopTest from '@/components/popups/test';
import PopRem from '@/components/popups/reminder';
import TransitReports from '@/components/transist';
import TestReports from '@/components/test';
import Reminder from '@/components/reminder';
import Alert from '@/components/alert';

    
const Dashboard = (onCancel) => {




    
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

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          <div className="w-full lg:w-1/2 border-2 h-60 rounded">
            <Map />
          </div>
         <TransitReports/>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          <TestReports/>
          <Reminder/>
        </div>
          
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
         <Alert/>
          <div className="w-full lg:w-1/2 border-2 h-60 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

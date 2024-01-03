'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from "@/components/sidebar";
import Map from "@/components/map";
import Navbar from '@/components/nav';
import TransitReports from '@/components/transist';
import TestReports from '@/components/test';
import Reminder from '@/components/reminder';
import Alert from '@/components/alert';
import Vehicles from '@/components/vehicledata';
import Engine from '@/components/engine';

const Dashboard = ({onCancel}) => {
  return (
    <div className="flex lg:flex-row">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <Engine />

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

'use client'
import React, { useEffect, useState } from 'react';
import { TiPlus, TiTimes } from 'react-icons/ti';
import Sidebar from "@/components/sidebar";
import Navbar from '@/components/nav';
import PopRenew from '@/components/popups/renew';
import Alert from '@/components/alert';
import Critical from '@/components/critical';
import Reminder from '@/components/reminder';
import TestReports from '@/components/test';
import TransitReports from '@/components/transist';
import Renewal from '@/components/renew';


const Report = (onCancel) => {
  const [loading, setLoading] = useState(true);
  const [loadingRenewal,setLoadingRenewal] = useState(true)
  const [loadingReports,setLoadingReports] = useState(true)
  const [loadingCriticalFault, setLoadingCriticalFault] = useState(true);
  const [loadingTests, setLoadingTests] = useState(true);
  const [loadingMaintenance, setLoadingMaintenance] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showTest, setTest] = useState(false);
  const [ShowReminder, setReminder] = useState(false);
  const [ShowCri, setCri] = useState(false);
  const [ShowRenew, setRenew] = useState(false);
  const [testedCars, setTestedCars] = useState(0);
  const [readyCars, setReadyCars] = useState(0);
  const [alerts, setAlerts] = useState([]);
  const [overDue, setOverDue] = useState(0);
  const [dueSoon, setDueSoon] = useState(0);
  const [completed, setCompleted] = useState(0);
  
  
  
 

 
 
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
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          
          <Alert/>
  
          <Critical/>

 </div>
        

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5">
      <Reminder/>
      <TestReports/>
    </div>
    </div>
    <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5">
      {/* Transit Reports Section */}
     <TransitReports/>
     <Renewal/>
    </div>
        
      </div>
    </div>
  );
};

export default Report;

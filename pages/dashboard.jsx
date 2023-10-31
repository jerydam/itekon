'use client'
import React, { useEffect, useState } from 'react';
import Popup from '@/components/popups/popup';
import { TiPlus, TiTimes } from 'react-icons/ti';
import {cartel} from '..';
import Sidebar from "@/components/sidebar";
import MapComponent from "@/components/map";
import Navbar from '@/components/nav';
import PopTest from '@/components/popups/test';
import PopRem from '@/components/popups/reminder';

const Dashboard = (onCancel) => {
  
    const [alerts, setAlerts] = useState([]);
  
    useEffect(() => {
      // Make an API call to fetch alerts data
      fetch('your-backend-alerts-endpoint')
        .then((response) => response.json())
        .then((data) => {
          setAlerts(data);
        })
        .catch((error) => {
          console.error('Error fetching data from the backend:', error);
        });
    }, []);
  
  const [showPopup, setShowPopup] = useState(false);
  const [showTest, setTest] = useState(false);
  const [ShowReminder, setReminder] = useState(false);
  const [testedCars, setTestedCars] = useState(0);
  const [readyCars, setReadyCars] = useState(0);
  // ...

const [overDue, setOverDue] = useState(0);
const [dueSoon, setDueSoon] = useState(0);
const [completed, setCompleted] = useState(0);

useEffect(() => {
  fetch('your-backend-maintenance-reminders-endpoint')
    .then((response) => response.json())
    .then((data) => {
      // Update state with the fetched data
      setOverDue(data.overDue);
      setDueSoon(data.dueSoon);
      setCompleted(data.completed);
    })
    .catch((error) => {
      console.error('Error fetching maintenance reminder data:', error);
    });
}, []);

  useEffect(() => {
    // Make API call to fetch data
    // Replace the URL with your backend endpoint
    fetch('your-backend-api-endpoint')
      .then((response) => response.json())
      .then((data) => {
        // Update state with the fetched data
        setTestedCars(data.testedCars);
        setReadyCars(data.readyCars);
      })
      .catch((error) => {
        console.error('Error fetching data from the backend:', error);
      });
  }, []);
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
            <MapComponent />
          </div>
          <div className="w-full lg:w-1/2 border-2 h-60 rounded">
      <div className='flex justify-between'>
        <p className="m-5 text-lg font-sans font-medium w-full">Transit Reports</p>
        <button onClick={() => setShowPopup(true)} className="flex justify-end items-center m-5 w-full">
          <TiPlus className="h-5 w-5   text-[#2D6C56]" /> Add Report
        </button>
        {showPopup && <Popup onAdd={handleAdd} onCancel={handleCancel} />}
      </div>
      <p className='ml-5'>you have no report at the moment</p>
    </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          <div className="w-full lg:w-1/2 border-2 h-60 rounded">
          <div className='flex justify-between'>
        <p className="m-5 text-lg font-sans font-medium w-full">Tests .</p>
        <button onClick={() => setTest(true)} className="flex justify-end items-center m-5 w-full">
          <TiPlus className="h-5 w-5   text-[#2D6C56]" /> Add Test
        </button>
        {showTest && <PopTest onAdd={handleAdd} onCancel={handleCancel} />}
      </div>
      <div className='flex justify-between border-2 mx-5 py-3 rounded px-5'>
      <div className="text-center">
        <p>Tested Cars</p>
        <p>{testedCars}</p>
      </div>
      <div className="text-center">
        <p>Ready Cars</p>
        <p>{readyCars}</p>
      </div>
    </div>
      <p className='ml-5 mt-3'>You have not carried out any test yet.</p>
          </div>
          <div className="w-full lg:w-1/2 border-2 h-full rounded">
          <div className='flex justify-between align-middle items-center'>
        <p className="m-5  text-lg font-sans font-medium w-full">Vehicle Maintenance Reminder</p>
        <button onClick={() => setReminder(true)} className="flex justify-end items-center my-5  w-fit">
          <TiPlus className="h-5 w-5   text-[#2D6C56]" /> Add Reminder
        </button>
        {ShowReminder && <PopRem onAdd={handleAdd} onCancel={handleCancel} />}
      </div>
      <div className='flex justify-between border-2 mx-5 py-3 rounded px-5'>
      <div className="text-center">
        <p>Over Due</p>
        <p>{overDue}</p>
      </div>
      <div className="text-center">
        <p>Due Soon</p>
        <p>{dueSoon}</p>
      </div>
      <div className="text-center">
        <p>Completed</p>
        <p>{completed}</p>
      </div>
    </div>
      <p className='ml-5 mt-3'>You have no maintenance reminder at the moment.</p>
          </div>
        </div>
          
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          <div className="w-full lg:w-1/2 border-2 h-60 rounded">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex justify-between'>
        <p className="m-5 text-lg font-sans font-medium w-full">Alert</p>
        <button onClick={() => setTest(true)} className="flex justify-end items-center m-5 w-full">
          <TiPlus className="h-5 w-5   text-[#2D6C56]" /> Add Alert
        </button>
        {showTest && <PopTest onAdd={handleAdd} onCancel={handleCancel} />}
      </div>
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        {alerts.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {alerts.map((alert) => (
              <li key={alert.id} className="p-4">
                <div className="flex justify-between">
                  <p className="font-semibold">Car ID: {alert.carId}</p>
                  <p>Date Reported: {alert.dateReported}</p>
                </div>
                <p>Reported By: {alert.reporter}</p>
                <p>Issue: {alert.issue}</p>
                <p>Part to Repair: {alert.partToRepair}</p>
                <p>Charge for Repair: {alert.chargeForRepair}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-4">You have no alerts at the moment</p>
        )}
      </div>
    </div>
          </div>
          <div className="w-full lg:w-1/2 border-2 h-60 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

'use client'
import React, { useEffect, useState } from 'react';
import Popup from '@/components/popups/popups';
import { TiPlus, TiTimes } from 'react-icons/ti';
import { cartel } from '@/index';
import Sidebar from "@/components/sidebar";
import MapComponent from "@/components/map";
import Navbar from '@/components/nav';
import PopTest from '@/components/popups/test';
import PopRem from '@/components/popups/reminder';
import PopCri from '@/components/popups/critical';
import PopRenew from '@/components/popups/renew';


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
  
  useEffect(() => {
  // Your authorization token
  const authToken = localStorage.getItem('authToken');

  // Make an API call to fetch alerts data
  fetch('https://itekton.onrender.com/reports/alerts/', {
    method: 'GET', // GET method
    headers: {
      'Authorization': `Token ${authToken}`, // Include the authorization header
      'Content-Type': 'application/json', // Specify the content type if needed
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setAlerts(data);
      setLoading(false); // Set loading to false after fetching data
    })
    .catch((error) => {
      console.error('Error fetching data from the backend:', error);
      setLoading(false); // Set loading to false in case of an error
    });
}, []);

  
  
useEffect(() => {
  const fleet_id = localStorage.getItem('fleet_id');
  const authToken = localStorage.getItem('authToken'); // Replace with your actual authorization token

  // Set initial loading state
  setLoadingMaintenance(true);

  fetch(`https://itekton.onrender.com/reports/reminders/${fleet_id}/`, {
    headers: {
      'Authorization': `Token ${authToken}`, // Include the authorization token
      'Content-Type': 'application/json', // Adjust content type if needed
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Update state with the fetched data
      setOverDue(data.overDue);
      setDueSoon(data.dueSoon);
      setCompleted(data.completed);
      // Set loading to false after data is fetched
      setLoadingMaintenance(false);
    })
    .catch((error) => {
      console.error('Error fetching maintenance reminder data:', error);
      // Set loading to false in case of an error
      setLoadingMaintenance(false);
    });
}, []);

useEffect(() => {
  const vehicle_id = localStorage.getItem('vehicle_id');
  const authToken = localStorage.getItem('authToken'); // Replace with your actual authorization token

  // Set initial loading state
  setLoadingMaintenance(true);

  fetch(`https://itekton.onrender.com/reports/critical-faults/${vehicle_id}/`, {
    headers: {
      'Authorization': `Token ${authToken}`, // Include the authorization token
      'Content-Type': 'application/json', // Adjust content type if needed
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Update state with the fetched data
      setOverDue(data.overDue);
      setDueSoon(data.dueSoon);
      setCompleted(data.completed);
      // Set loading to false after data is fetched
      setLoadingMaintenance(false);
    })
    .catch((error) => {
      console.error('Error fetching critical faults data:', error);
      // Set loading to false in case of an error
      setLoadingMaintenance(false);
    });
}, []);

useEffect(() => {
  const vehicle_id = JSON.parse(localStorage.getItem('vehicle_id')) || [];

  const authToken = localStorage.getItem('authToken'); // Replace with your actual authorization token

  // Set initial loading state
  setLoadingTests(true);

  fetch(`https://itekton.onrender.com/reports/tests/${vehicle_id}/`, {
    headers: {
      'Authorization': `Token ${authToken}`, // Include the authorization token
      'Content-Type': 'application/json', // Adjust content type if needed
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Update state with the fetched data
      setTestedCars(data.testedCars);
      setReadyCars(data.readyCars);
      // Set loading to false after data is fetched
      setLoadingTests(false);
    })
    .catch((error) => {
      console.error('Error fetching data from the backend:', error);
      // Set loading to false in case of an error
      setLoadingTests(false);
    });
}, []);


useEffect(() => {
  const vehicle_id = localStorage.getItem('vehicle_id')
  fetch(`https://itekton.onrender.com/reports/transit-reports/${vehicle_id}/`)
    .then((response) => response.json())
    .then((data) => {
      // Update state with the fetched data
      // Assuming data is an array, you can adjust accordingly
      setReports(data);
      setLoadingReports(false);
    })
    .catch((error) => {
      console.error('Error fetching transit reports data:', error);
      setLoadingReports(false);
    });
}, []);

useEffect(() => {
  const fleet_id = localStorage.getItem('fleet_id');
  const authToken = localStorage.getItem('authToken');; // Replace with your actual authorization token

  // Set initial loading state
  setLoadingRenewal(true);

  fetch(`https://itekton.onrender.com/reports/registrations/${fleet_id}/`, {
    headers: {
      'Authorization': `Token ${authToken}`, // Include the authorization token
      'Content-Type': 'application/json', // Adjust content type if needed
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Update state with the fetched data
      // Assuming data is an array, you can adjust accordingly
      setRenewalData(data);
      // Set loading to false after data is fetched
      setLoadingRenewal(false);
    })
    .catch((error) => {
      console.error('Error fetching registration renewal data:', error);
      // Set loading to false in case of an error
      setLoadingRenewal(false);
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
      {loading ? ( // Display a loading message when data is being fetched
        <p className="p-4">Loading Alert...</p>
      ) : (
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
      )}
    </div>
  </div>
  <div className="w-full lg:w-1/2 border-2 h-full rounded">
  <div className='flex justify-between align-middle items-center'>
    <p className="m-5  text-lg font-sans font-medium w-full">Critical Fault</p>
    <button onClick={() => setCri(true)} className="flex justify-end items-center m-5  w-full">
      <TiPlus className="h-5 w-5   text-[#2D6C56]" /> Add Reminder
    </button>
    {ShowCri && <PopCri onAdd={handleAdd} onCancel={handleCancel} />}
  </div>
  {loadingCriticalFault ? (
    <p className='ml-5 mt-3'>Fetching Critical Fault data...</p>
  ) : (
    <>
      {overDue > 0 || dueSoon > 0 || completed > 0 ? (
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
      ) : (
        <p className='ml-5 mt-3'>There are no logged critical faults at the moment</p>
      )}
    </>
  )}
</div>

 </div>
        

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5">
      <div className="w-full lg:w-1/2 border-2 h-full rounded">
        <div className='flex justify-between align-middle items-center'>
          <p className="m-5 text-lg font-sans font-medium w-full">Vehicle Maintenance Reminder</p>
          <button onClick={() => setReminder(true)} className="flex justify-end items-center my-5 w-fit">
            <TiPlus className="h-5 w-5 text-[#2D6C56]" /> Add Reminder
          </button>
          {ShowReminder && <PopRem onAdd={handleAdd} onCancel={handleCancel} />}
        </div>
        {loadingMaintenance ? (
          <p className='ml-5 mt-3'>Loading Maintenance data...</p>
        ) : (
          <>
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
            <p className='ml-5 mt-3'>
              {overDue === 0 && dueSoon === 0 && completed === 0 ? 'You have no maintenance reminder at the moment.' : ''}
            </p>
          </>
        )}
      </div>
      <div className="w-full lg:w-1/2 border-2 h-60 rounded">
        <div className='flex justify-between'>
          <p className="m-5 text-lg font-sans font-medium w-full">Tests</p>
          <button onClick={() => setTest(true)} className="flex justify-end items-center m-5 w-full">
            <TiPlus className="h-5 w-5 text-[#2D6C56]" /> Add Test
          </button>
          {showTest && <PopTest onAdd={handleAdd} onCancel={handleCancel} />}
        </div>
        {loadingTests ? (
          <p className='ml-5 mt-3'>Loading Tests data...</p>
        ) : (
          <>
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
            <p className='ml-5 mt-3'>
              {testedCars === 0 && readyCars === 0 ? 'You have not carried out any test yet.' : ''}
            </p>
          </>
        )}
      </div>
    </div>
    </div>
    <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5">
      {/* Transit Reports Section */}
      <div className="w-full lg:w-1/2 border-2 h-60 rounded">
        <div className='flex justify-between'>
          <p className="m-5 text-lg font-sans font-medium w-full">Transit Reports</p>
          <button onClick={() => setShowPopup(true)} className="flex justify-end items-center m-5 w-full">
            <TiPlus className="h-5 w-5 text-[#2D6C56]" /> Add Report
          </button>
          {showPopup && <Popup onAdd={handleAdd} onCancel={handleCancel} />}
        </div>
        {loadingReports ? (
          <p className='ml-5 mt-3'>Loading transit reports data...</p>
        ) : (
          <p className='ml-5'>
            {Report .length > 0 ? 'Display your reports data here' : 'You have no report at the moment'}
          </p>
        )}
      </div>

      
      <div className="w-full lg:w-1/2 border-2 h-full rounded">
  <div className='flex justify-between align-middle items-center'>
    <p className="m-5 text-lg font-sans font-medium w-full">Registration Renewal Reminder</p>
    <button onClick={() => setRenew(true)} className="flex justify-end items-center my-5 w-fit">
      <TiPlus className="h-5 w-5 text-[#2D6C56]" /> Add Reminder
    </button>
    {ShowRenew && <PopRenew onAdd={handleAdd} onCancel={handleCancel} />}
  </div>
  {loadingRenewal ? (
    <p className='ml-5 mt-3'>Loading renewal reminder data...</p>
  ) : (
    <>
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
      <p className='ml-5 mt-3'>
        {overDue === 0 && dueSoon === 0 && completed === 0 ? 'You have no registration reminder at the moment.' : ''}
      </p>
    </>
  )}
</div>

    </div>
        
      </div>
    </div>
  );
};

export default Report;

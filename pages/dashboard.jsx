'use client'
import { useState } from 'react';
import Popup from '@/components/popups/popup';
import { TiPlus, TiTimes } from 'react-icons/ti';
import {cartel} from '..';
import Sidebar from "@/components/sidebar";
import MapComponent from "@/components/map";
import Navbar from '@/components/nav';

const Dashboard = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [value, setValue] = useState('');
  
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
          <div className="w-full lg:w-1/2 border-2 h-60 rounded"></div>
          <div className="w-full lg:w-1/2 border-2 h-60 rounded"></div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 p-5 ">
          <div className="w-full lg:w-1/2 border-2 h-60 rounded"></div>
          <div className="w-full lg:w-1/2 border-2 h-60 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

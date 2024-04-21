// AssignLocation.jsx
'use client'
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/nav';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectedVehicleId } from '../../vehicles/page';
const AssignLocation = ({ params }) => {
   
  

   const id = params.id;
   const vehicle_id = id;
  const [address, setAddress] = useState('');

  const handleAddAddress = async () => {
    try {
        
      const userToken = localStorage.getItem('authToken');
      const response = await fetch(`https://itekton-wden.onrender.com/vehicles/${vehicle_id}/assign_location/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${userToken}`,
        },
        body: JSON.stringify({ location: address }),
      });

      if (response.ok) {
        console.log('Address assigned successfully');
        toast.success('Address assigned successfully');
      } else {
        console.error('Failed to assign address:', await response.text());
        toast.error('Failed to assign address');
      }
    } catch (error) {
      console.error('Error assigning address:', error);
    }
  };

  const handleGetAddress= () => {
    // Implement logic to add the address
    console.log('Address added:', address);
  };

  return (
    <div className='flex'>
      <Sidebar />
      <div className="">
        <Navbar />
        <p className='m-5'>Vehicles {'>'} Assign Location</p>
        <p className='m-5'>Enter the address of the location you want to assign your vehicles to.</p>
        <div className="p-5 m-5 h-full border-2 rounded">
          <div className="mb-4">
            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 rounded border bg-[#e7e6db] mt-2 border-[#2D6C56]"
            />
            <button
              onClick={handleGetAddress}
              className="border-2 border-b-4 bg-[#e7e6db] border-[#2D6C56]  text-[#2D6C56] py-2 px-4 rounded  mt-5"
            >
              Pick Location
            </button>
          </div>
          <div className="mb-4">
            <button
              onClick={handleAddAddress}
              className="bg-[#2D6C56] border-b-4 text-[#e7e6db] py-2 px-4 rounded"
            >
              + Add Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignLocation;

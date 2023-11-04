'use client'
import React, { useEffect, useState } from 'react';
import { driver } from '@/index';
import '/styles/global.css';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/nav';
import Edit from '@/components/popups/edit';
import Remove from '@/components/popups/remove';
import AddDriver from '@/components/popups/addDriver'; // assuming you have created an Edit component
import { useRouter } from 'next/router';
const DriverList = ({ onDrive, onRemove, onEdit, onAssignVehicle }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDrive, setShowDrive] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const router = useRouter();
    
  useEffect(() => {
    const token =  sessionStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Replace '/login' with the appropriate login page URL
    }
  }, [router]);
  const handleEdit = (id) => {
    
    onEdit(id); // or perform any other necessary actions
    setShowEdit(true);
  };
  const handleDrive = (id) => {
    onDrive(id); // or perform any other necessary actions
    setShowDrive(true);
  };
  const handleRemove = (id) => {
    onRemove(id); // or perform any other necessary actions
    setShowRemove(true);
  };

  const handleCancel = () => {
    setShowEdit(false);
  };
  const handleClear = () => {
    setShowDrive(false);
  };
  const handleDelete = () => {
    setShowRemove(false);
  };

  return (
    <div className='flex relative'>
      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <div className="m-5 my-4">
            <div className='flex'>
                <div className='w-full'>
        <p className='m-5'> Drivers</p>
                    <p className='m-5'>You can edit drivers’ details, assigned vehicles to driver and remove a driver here.</p>
                    </div>
                            
                    <button onClick={() => setShowDrive(true)} className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold w-64 h-full p-4 rounded">+ Add New Driver</button>
                    </div>
                    {showDrive && <AddDriver onDrive={handleDrive} onCancel={handleClear} />}
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">License ID</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {driver.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2 flex items-center">
                    <div className="mr-2">
                      <img
                        src={item.image}
                        alt="Driver"
                        className="h-5 w-5 rounded-full"
                      />
                    </div>
                    <div>
                      <div>{item.name}</div>
                      <div className="text-sm text-gray-500">{item.email}</div>
                    </div>
                  </td>
                  <td className="border px-4 font-semibold py-2">{item.iD}</td>
                  <td className="border px-4 font-semibold py-2">{item.phoneNumber}</td>
                  <td className="border font-semibold px-4 py-2">
                    <button
                      
                      className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 px-4 rounded"
                    >
                      <a href="/assign">Assign Vehicle</a>
                    </button>
                    
                    <button onClick={() => setShowEdit(true)} className=" text-[#2D6C56] font-bold py-2 px-4 rounded mx-2">
           Edit Profile
        </button>
        {showEdit && <Edit onEdit={handleEdit} onCancel={handleCancel} />}
      
                    <button
                      onClick={() => setShowRemove(true)}
                      className="border-b-[#9F9F9F] border-b-4 border-[#9F9F9F] border-2 text-[#9F9F9F] font-bold py-2 px-4 rounded mx-2"
                    >
                      Remove Driver
                    </button>
                    {showRemove && <Remove onRemove={handleRemove} onCancel={handleDelete} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DriverList;




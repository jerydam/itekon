'use client'
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/nav';
import AddDriver from '@/components/popups/addDriver';
import Remove from '@/components/popups/remove';
import Edit from '@/components/popups/edit';

const Page = ({ onDrive, onRemove, onEdit, onAssignVehicle }) => {
  const [drivers, setDrivers] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showDrive, setShowDrive] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [selectedDriverId, setSelectedDriverId] = useState(null);

  let userId;
  let userToken;

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const userToken = localStorage.getItem('authToken');
      console.log(userToken);
       userId = localStorage.getItem('fleet_id');
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const userToken = localStorage.getItem('authToken');
      const fleet_id = localStorage.getItem('fleet_id')
      try {
        const response = await fetch(`https://itekton.onrender.com/fleets/drivers/${fleet_id}/`, {
          method: 'GET',  // Change to GET
          headers: {
            Authorization: `Token ${userToken}`,
          },
        });
        const data = await response.json();
        setDrivers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
   // The empty dependency array ensures that this effect runs once when the component mounts

   const handleEdit = (id) => {
    localStorage.setItem("selectedDriverId", id);
    setShowEdit(true);
  };
  
  const handleDrive = (id) => {
    localStorage.setItem("selectedDriverId", id);
    setShowDrive(true);
  };
  
  const handleDelete = (id) => {
    console.log(selectedDriverId(id))
    alert(selectedDriverId)
    localStorage.setItem("selectedDriverId", id);
    setShowRemove(true);
  };

  const handleCancel = (modalType) => {
    switch (modalType) {
      case 'edit':
        setShowEdit(false);
        break;
      case 'drive':
        setShowDrive(false);
        break;
      case 'remove':
        setShowRemove(false);
        break;
      default:
        console.error('Unknown modal type:', modalType);
    }
  };
  
  
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full'>
        <Navbar/>
    <div className=' relative'>
      <div className='w-full'>
        <p className='m-5'> Drivers</p>

        <div className='flex justify-between '>
        <p className='m-5'>You can edit drivers’ details, assign vehicles to drivers, and remove a driver here.</p>
        <button onClick={() => setShowDrive(true)} className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold w-56 h-full p-4 rounded mr-5">+ Add New Driver</button>
        {showDrive && <AddDriver onDrive={handleDrive}  onCancel={() => handleCancel('drive')} />}
        </div>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">License ID</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((item) => (
            <tr key={item.id}>
              <td className="border-b-2 px-4 py-2 flex items-center">
                <div className="mr-2">
                  <div>{item.name}</div>
                  <img
                    src={item.drivers_image}
                    alt="Driver"
                    className="h-5 w-5 rounded-full"
                  />
                  
                </div>
                
              </td>
              <td className="border-b-2 px-4 font-semibold py-2">{item.license_number}</td>
              <td className="border-b-2 px-4 font-semibold py-2">{item.phone_number}</td>

              <td className="border-b-2 font-semibold px-4 py-2">
                <button
                  className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 px-4 rounded"
                >
                  <a href="/assign">Assign Vehicle</a>
                </button>
                <button onClick={() => setShowEdit(true)} className="text-[#2D6C56] font-bold py-2 px-4 rounded mx-2">
                  Edit Profile
                </button>
                {showEdit && <Edit onEdit={handleEdit}  onCancel={() => handleCancel('edit')} />}
                <button
                  onClick={() => setShowRemove(true)}
                  className="border-b-[#9F9F9F] border-b-4 border-[#9F9F9F] border-2 text-[#9F9F9F] font-bold py-2 px-4 rounded mx-2"
                >
                  Remove Driver
                </button>
                {showRemove && <Remove onRemove={handleDelete}  onCancel={() => handleCancel('remove')} />}
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

export default Page;
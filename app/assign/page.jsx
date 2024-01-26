"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import '/styles/global.css';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/nav';

const Page = ({ onAdd }) => {
  const router = useRouter();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
    } else {
      // Fetch vehicle data
      fetchVehicleData();
    }
  }, [router]);

  const fetchVehicleData = async () => {
    try {
      const userToken = localStorage.getItem('authToken');
      const fleet_id = localStorage.getItem('fleet_id');
      const response = await fetch(`https://itekton.onrender.com/vehicles/drivers/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${userToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        // Update the state with the fetched vehicle data
        setCars(data);
      } else {
        console.error('Failed to fetch vehicles from the backend');
      }
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  return (
    <div className='flex relative'>
      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <div className="m-5 my-4">
          <div className='flex'>
            <div className='w-full'>
              <p className='m-5'> Drivers {'>'} Assign Vehicle</p>
              <p className='m-5'>You can assign Vehicles to Drivers here. </p>
            </div>
          </div>

          <table className="table-auto w-full">
            <thead>
              <tr>
                
                <th className="px-4 py-2">Vehicle ID</th>
                <th className="px-4 py-2">License ID</th>
                <th className="px-4 py-2">Assigned Location</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((item) => (
                <tr key={item.id}>
                  
                  <td className=" border-t-2 py-2 flex items-center">
                    <div>
                      <div>{item.carName}</div>
                      <div className="text-sm text-gray-500">{item.id}</div>
                    </div>
                  </td>
                  <td className=" border-t-2 font-semibold py-2">{item.carId}</td>
                  <td className=" border-t-2 font-semibold py-2">{item.carLocation}</td>
                  <td className=" font-semibold border-t-2 py-2">
                    <button
                      className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 border-t-2 rounded"
                    >
                      <a href="/complete">Assign Vehicle</a>
                    </button>
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

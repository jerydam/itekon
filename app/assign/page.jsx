"use client"
import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import '/styles/global.css';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/nav';
import { mockCars } from '@/index';


const Page = ({ onAdd }) => {
  const router = useRouter();
    
  useEffect(() => {
    const token =  localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

    

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
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Vehicle ID</th>
                <th className="px-4 py-2">License ID</th>
                <th className="px-4 py-2">Assigned Location</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockCars.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2 flex items-center">
                    
                    <div>
                      <div>{item.carName}</div>
                      <div className="text-sm text-gray-500">{item.id}</div>
                    </div>
                  </td>
                  <td className="border px-4 font-semibold py-2">{item.carId}</td>
                  <td className="border px-4 font-semibold py-2">{item.carLocation}</td>
                  <td className="border font-semibold px-4 py-2">
                    <button
                      
                      className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 px-4 rounded"
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


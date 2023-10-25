import React from 'react';
import { driver } from '@/index';
import '/styles/global.css'; 
const AssignDriver = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <p className='m-5'>Vehicles {'>'} Assign Driver</p>
                    <p className='m-5'>You can assign Drivers to Toyota Corolla,  AJ-432REY (Car 2) here.</p>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                   
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      License ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                    
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Assign Driver
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {driver.map((driver) => (
                    <tr key={driver.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{driver.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{driver.iD}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{driver.phoneNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap"> <button className='border-b-4 border-2 border-[#2D6C56] rounded text-center p-3'>Assign Driver</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignDriver;

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/sidebar';
import { mockCars } from '..'; // Replace with the actual path to your mock data file

const RegisteredCars = () => {
  // Use the 'mockCars' data here
  return (
    <div className="flex lg:flex-row">
      <Sidebar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Registered Cars</h1>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Vehicle ID</th>
              <th className="border px-4 py-2">Driver </th>
              <th className="border px-4 py-2">Last Test </th>
              <th className="border px-4 py-2">Ready for Use</th>
              <th className="border px-4 py-2">Assign Location</th>
              <th className="border px-4 py-2">Alerts </th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockCars.map((car) => (
              <tr key={car.id}>
                <td className="border px-4 py-2">{car.carId}</td>
                <td className="border px-4 py-2"><a href="assigndriver.jsx">{car.driverName}</a></td>
                <td className="border px-4 py-2">{car.lastTest}</td>
                <td className="border px-4 py-2">{car.readyForUse ? 'Yes' : 'No'}</td>
                <td className="border px-4 py-2">{car.carLocation}</td>
                <td className="border px-4 py-2">{car.alerts}</td>
                <td className="border px-4 py-2">
                <div className="border p-2 flex">
                 <select className="">
                    <option value="select">Select</option>
                    <option value="car-details">Car Details</option>
                    <option value="transit-details">Transit Details</option>
                    <option value="driver-details">Driver Details</option>
  </select>
</div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredCars;

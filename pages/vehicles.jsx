import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';
import { mockCars } from '..'; // Replace with the actual path to your mock data file
import Driver from './vehicleDetails/driver';
import VehicleRDetails from './vehicleDetails/vehicleRd';
import Transist from './vehicleDetails/transist';

const RegisteredCars = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (carId) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [carId]: !prev[carId],
    }));
  };

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
                <td className="border px-4 py-2">
                  <a href="assigndriver.jsx">{car.driverName}</a>
                </td>
                <td className="border px-4 py-2">{car.lastTest}</td>
                <td className="border px-4 py-2">{car.readyForUse ? 'Yes' : 'No'}</td>
                <td className="border px-4 py-2">{car.carLocation}</td>
                <td className="border px-4 py-2">{car.alerts}</td>
                <td className="border px-4 py-2">
                  <div className="border p-2 flex relative">
                    <div className="dropdown relative">
                      <div
                        onClick={() => toggleDropdown(car.id)}
                        className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                      >
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 8l4 4 4-4z" />
                        </svg>
                      </div>
                      {openDropdowns[car.id] && (
                        <ul className="dropdown-content flex absolute mt-2 bg-gray-700  text-gray-100 p-2">
                          <li className="block m-5 w-full">
                            <VehicleRDetails />
                          </li>
                          <li className="block m-5 w-full">
                            <Transist />
                          </li>
                          <li className="block m-5 w-full">
                            <Driver />
                          </li>
                        </ul>
                      )}
                    </div>
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

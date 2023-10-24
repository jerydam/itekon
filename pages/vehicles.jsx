import Sidebar from '@/components/sidebar';
import React, { useState, useEffect } from 'react';

const RegisteredCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars data from the backend API
    fetchCarsData();
  }, []);

  const fetchCarsData = async () => {
    try {
      const response = await fetch('YOUR_BACKEND_API_ENDPOINT'); // Replace with your backend API endpoint
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars data:', error);
    }
  };

  return (
    <div className="flex lg:flex-row">
        <Sidebar/>
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
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td className="border px-4 py-2">{car.carId}</td>
              <td className="border px-4 py-2">{car.driverName}</td>
              <td className="border px-4 py-2">{car.isOk ? 'OK' : 'Not OK'}</td>
              <td className="border px-4 py-2">{car.carLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default RegisteredCars;

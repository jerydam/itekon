// pages/vehicles.js

import React, { useEffect, useState } from 'react';
import { mockCars } from '..';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const userToken = localStorage.getItem('authToken');
        const fleet_id = localStorage.getItem('fleet_id');
        
        const response = await fetch(`https://itekton.onrender.com/fleets/fleet/vehicles/${fleet_id}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,
          },
        });
        // Update state based on fetched data
        if (response.ok && Array.isArray(data)) {
          setVehicles(data);
        } else {
          console.error('Error fetching vehicle data:', data?.error || 'Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching vehicle data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch vehicles when the component mounts
    fetchVehicles();
  }, []);


  return (
    <div className="w-full lg:w-1/2 border-2 h-60 rounded p-4 overflow-y-auto">
      <p className="text-lg font-sans font-medium mb-4">Vehicles</p>
      {loading ? (
        <p>Loading vehicles...</p>
      ) : vehicles.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="border p-2">Vehicle ID</th>
              <th className="border p-2">Assigned Location</th>
              <th className="border p-2">Driver</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border">
                <td className="border p-2">{vehicle.id}</td>
                <td className="border p-2">{vehicle.assigned_location}</td>
                <td className="border p-2">{vehicle.driver}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
         
          <table className="w-full">
            <thead>
              <tr>
                <th className="border p-2">Vehicle ID</th>
                <th className="border p-2">Assigned Location</th>
                <th className="border p-2">Driver</th>
              </tr>
            </thead>
           
          </table>
        </div>
      )}
    </div>
  );
};

export default Vehicles;

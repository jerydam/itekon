'use client'
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/sidebar';
 // Replace with the actual path to your mock data file
import Driver from '@/app/vehicles/driver';
import VehicleRDetails from '@/app/vehicles/vehicleRd';
import Transist from '@/app/vehicles/transist';
import Navbar from '@/components/nav';

const RegisteredCars = () => {  
  
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [cars, setCars] = useState([]); // Add this line to define the cars state
  const userToken = localStorage.getItem('authToken');
  
  const fleet_id = localStorage.getItem('fleet_id');
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`https://itekton.onrender.com/fleets/fleet/vehicles/${fleet_id}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCars(data);
        } else {
          console.error('Failed to fetch vehicles from the backend');
        }
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchCars();
  }, [userToken]);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`https://itekton.onrender.com/fleets/fleet/vehicles/${fleet_id}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();

          // Fetch alerts for each vehicle
          const carsWithAlerts = await Promise.all(
            data.map(async (vehicle) => {
              const alerts = await fetchAlerts(vehicle.id);
              return { ...vehicle, alerts };
            })
          );

          setCars(carsWithAlerts);
        } else {
          console.error('Failed to fetch vehicles from the backend');
        }
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    const fetchAlerts = async (vehicleId) => {
      const alert_id= id;
      try {
        const response = await fetch(`https://itekton.onrender.com/reports/alerts/${alert_id}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Assuming 'name' is the property for alert name, modify accordingly
          return data.map(alert => alert.name);
        } else {
          console.error('Failed to fetch alerts');
          return [];
        }
      } catch (error) {
        console.error('Error fetching alerts:', error);
        return [];
      }
    };

    fetchCars();
  }, [userToken]);

  const assignLocation = async (vehicleId, locationData) => {
    const vehicle_id = id;
    try {
      const response = await fetch(`https://itekton.onrender.com/vehicles/${vehicle_id}/assign_location/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${userToken}`,
        },
        body: JSON.stringify({ locationData }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;  // Modify this based on the response structure
      } else {
        console.error('Failed to assign location');
      }
    } catch (error) {
      console.error('Error assigning location:', error);
    }
  };
  
  
  const toggleDropdown = (carId) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [carId]: !prev[carId],
    }));
  };

  return (
    <div className="flex lg:flex-row">
      <Sidebar />
      <div className='w-full'>
        <Navbar/>
        <div className="container mx-auto px-4 py-8">
          <p className="mb-10">Vehicle</p>
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
              {cars.map((car) => (
                <tr key={car.id}>
                  <td className="border px-4 py-2">{car.id}</td>
                  <td className="border px-4 py-2">
                    <a href={`vehicleDetails/assigndriver/${car.driver}`}>{car.driver.name}</a>
                  </td>
                  <td className="border px-4 py-2">{car.lastTest}</td>
                  <td className="border px-4 py-2">{car.readyForUse ? 'Yes' : 'No'}</td>
                  <td className="border px-4 py-2">
                    <a href={`vehicleDetails/assignlocation/${car.id}`}>{car.assigned_location}</a>
                  </td>
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
                              <VehicleRDetails vehicle={car} />
                            </li>
                            <li className="block m-5 w-full">
                              <Transist vehicle={car} />
                            </li>
                            <li className="block m-5 w-full">
                              <Driver vehicle={car} />
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
    </div>
  );
};

export default RegisteredCars;
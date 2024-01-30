'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/sidebar';
import Driver from '@/app/vehicles/driver';
import VehicleRDetails from '@/app/vehicles/vehicleRd';
import Transist from '@/app/vehicles/transist';
import Navbar from '@/components/nav';

const RegisteredCars = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [cars, setCars] = useState([]);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const handleMouseEnter = (carId) => {
    setHoveredDropdown(carId);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };
  useEffect(() => {
    const fetchCarsAndAlerts = async () => {
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

        if (response.ok) {
          const data = await response.json();

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
      const userToken = localStorage.getItem('authToken');
      const id = localStorage.getItem('alert_id');
      const alert_id = id;
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

    fetchCarsAndAlerts();
  }, []); // Empty dependencies array if you want it to run once on mount

  useEffect(() => {
    const fetchCars = async () => {
      const userToken = localStorage.getItem('authToken');
      const fleet_id = localStorage.getItem('fleet_id');
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
  }, []); // Empty dependencies array if you want it to run once on mount

  useEffect(() => {
    const fetchCars = async () => {
      const userToken = localStorage.getItem('authToken');
      const fleet_id = localStorage.getItem('fleet_id');
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

    fetchCars();
  }, []); // Empty dependencies array if you want it to run once on mount

  const assignLocation = async (vehicleId, locationData) => {
    const userToken = localStorage.getItem('authToken');
    const vehicle_id = vehicleId; // Corrected variable name
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

  const fetchDriverDetails = async (driverId) => {
    const fleet_id = localStorage.getItem('fleet_id');
    try {
      const userToken = localStorage.getItem('authToken');
      const response = await fetch(`https://itekton.onrender.com/fleets/fleet/drivers-vehicles/${fleet_id}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${userToken}`,
        },
      });

      if (response.ok) {
        const driverData = await response.json();
        console.log('Driver details:', driverData);
        // Handle the driver data as needed
        return driverData;
      } else {
        console.error('Error fetching driver details:', await response.text());
        // Handle error, show error message, etc.
        return null;
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle unexpected errors
      return null;
    }
  };

  const toggleDropdown = (carId) => {
    setOpenDropdowns((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])), // Close all other dropdowns
      [carId]: !prev[carId],
    }));
  };

  
  const handleAssignLocationClick = (vehicleId) => {
    window.location.href = `assign-location/`;
    
  };
  
  
  return (
    <div className="flex lg:flex-row">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="container mx-auto px-4 border-b-2 py-8">
          <p className="mb-10">Vehicle</p>
          <table className="table-auto w-full  border-collapse">
            <thead>
              <tr>
                <th className="px-4 text-center border-b-2 py-2">Vehicle ID</th>
                <th className="px-4 text-center border-b-2 py-2">Driver</th>
                <th className="px-4 text-center border-b-2 py-2">Last Test</th>
                <th className="px-4 text-center border-b-2 py-2">Ready for Use</th>
                <th className="px-4 text-center border-b-2 py-2">Assign Location</th>
                <th className="px-4 text-center border-b-2 py-2">Alerts</th>
                <th className="px-4 text-center border-b-2 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <>
                <tr key={car.id} className='relative'>

                  <td className="gap-4 border-b-2 py-2 flex">
                    
                  <span className='font-bold'>{index + 1}</span>
                    <div className="flex flex-col">
                    <p className="font-bold text-sm">{car.name !=""? car.name : 'car name not set'},</p>
                    <p className="text-gray-300">{car.vehicle_identification_number !="" ? car.vehicle_identification_number : 'not-set'}</p>
                    </div>
                    
                    </td>
                  <td className="px-4 text-center border-b-2 py-2">
                    {/* Adjust the driver information display as needed */}
                    <span>{car.driver != null ? car.driver.name: <a href={`vehicles/assign-driver/${car.id}`} className="text-[#2D6C56] hover:underline cursor-pointer">Assign Driver</a>}</span>
                  </td>
                  <td className="px-4 text-center border-b-2 py-2">{car.lastTest}</td>
                  <td className="px-4 text-center border-b-2 py-2">{car.readyForUse ? 'Yes' : 'No'}</td>
                  <td className="px-4 text-center border-b-2 py-2">
                    <button
                      onClick={() => handleAssignLocationClick(car.id)}
                      className="text-[#2D6C56] hover:underline cursor-pointer"
                    >
                      Assign Location
                    </button>
                  </td>
                  <td className="px-4 text-center border-b-2 py-2">{car.alerts}</td>
                  <td className="px-4 border-b-2 py-2 ">
                    <div className="relative">
                      <div
                        onClick={() => handleMouseEnter(car.id)}
                        // onMouseLeave={handleMouseLeave}
                        className="text-gray-700 font-semibold py-2 px-4 border-b-2 rounded inline-flex items-center cursor-pointer"
                      >
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 8l4 4 4-4z" />
                        </svg>
                      </div>
                    </div>
                  </td>
                  
                </tr>
                  <tr key={car.id} className="absolute z-[3000]">

                      {hoveredDropdown === car.id && (
                        <ul className="dropdown-content flex  bg-white text-black">
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
                  </tr>
                  </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisteredCars;
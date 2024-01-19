import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PopTest = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedOutcome, setSelectedOutcome] = useState(true);
  useEffect(() => {
    const fleet_id = localStorage.getItem('fleet_id');

    const fetchVehicles = async () => {
      const userToken = localStorage.getItem('authToken');
      try {
        const response = await fetch(`https://itekton.onrender.com/fleets/fleet/vehicles/${fleet_id}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${userToken}`,
          },
        });
        const data = await response.json();

        console.log('Fetched Vehicles:', data);

        if (response.ok) {
          setVehicles(data);
          setSelectedVehicle(data[0]?.id);
        } else {
          console.error('Error fetching vehicles:', data?.error || 'Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching vehicles:', error.message);
      }
    };

    fetchVehicles();
  }, []); 

  const handleAdd = async () => {
    try {
      const vehicle_id = selectedVehicle;
      const userToken = localStorage.getItem('authToken');
      const response = await fetch(`https://itekton.onrender.com/reports/tests/${vehicle_id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userToken}`,
        },
        body: JSON.stringify({
          testDescription: inputValue,
          outcome: selectedOutcome,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        onAdd(data);
        toast.success('You successfully added a test');
        setInputValue('');
        onCancel();
      } else {
        console.error('Error adding test:', data.error);
        toast.error(data.error);
      }
    } catch (error) {
      console.error('Error adding test:', error);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <p className="block mb-2 text-lg font-medium">Add Test</p>
          <button onClick={handleCancel}>
            <FaTimes className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p>Take records of tested and fit-for-transit vehicles</p>
        <p className="mt-5 mb-3">Test</p>
        <div>
          <label htmlFor="vehicle">Select a Vehicle:</label>
          <select
            name="vehicle"
            id="vehicle"
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
            className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
          >
            <option value="" disabled>Select a vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>
        <select
        value={selectedOutcome}
        onChange={(e) => setSelectedOutcome(e.target.value === 'true')}
        className="m-5"
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
        />
        <div className="flex justify-center">
          <button
            onClick={handleAdd}
            className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded"
          >
            Add Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopTest;

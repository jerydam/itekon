import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PopCri = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Retrieve userToken from localStorage
  const userToken = localStorage.getItem('authToken');

  const handleAdd = async () => {
    try {
      setLoading(true);
      const vehicle_id = selectedVehicle;

      const response = await fetch(`https://itekton.onrender.com/reports/critical-faults/${vehicle_id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userToken}`,
        },
        body: JSON.stringify({ description: inputValue }),
      });

      const data = await response.json();

      if (response.ok) {
        const responseData = await response.json();
        const data = responseData.data;

        const existingAlertIds = JSON.parse(localStorage.getItem('alertIds')) || [];
        existingAlertIds.push(data.id);
        localStorage.setItem('alertIds', JSON.stringify(existingAlertIds));

        onAdd(data);
        toast.success('You successfully added a critical fault');

        setInputValue('');
        onCancel();
      } else {
        console.error('Error adding critical fault:', data.error);
        toast.error(data.error);
      }
    } catch (error) {
      console.error('Error adding critical fault:', error);
    } finally {
      setLoading(false);
    }
  };

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fleet_id = localStorage.getItem('fleet_id');

    const fetchVehicles = async () => {
      try {
        const response = await fetch(`https://itekton.onrender.com/fleets/fleet/vehicles/${fleet_id}/`, {
          method: 'GET',
          headers: {
            Authorization: `Token ${userToken}`, // Include the authentication token in the headers
          },
        });
        const data = await response.json();

        if (response.ok) {
          setVehicles(data);
          setSelectedVehicle(data[0]?.id); // Select the first vehicle by default
        } else {
          console.error('Error fetching vehicles:', data?.error || 'Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching vehicles:', error.message);
      }
    };

    fetchVehicles();
  }, [userToken, setSelectedVehicle]);

  const handleCancel = () => {
    
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <p className="block mb-2 text-lg font-medium">Critical Faults</p>
          <button onClick={handleCancel}>
            <FaTimes className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p>Note critical faults for each vehicle</p>
        <p className="mt-5 mb-3">Add Critical Fault</p>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
        />
        <div>
          <label htmlFor="vehicle">Select a Vehicle:</label>
          <select
            name="vehicle"
            id="vehicle"
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
            className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
          >
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleAdd}
            className={`border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Adding Fault...' : 'Add Fault'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopCri;

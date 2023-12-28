import { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PopTest = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

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
          body: JSON.stringify({ testDescription: inputValue }),
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
  }, [setSelectedVehicle]);

  const handleAdd = async () => {
    try {
      const vehicle_id = selectedVehicle;
      const userToken = localStorage.getItem('authToken');
      // Make a fetch request to send data to the backend
      const response = await fetch(`https://itekton.onrender.com/reports/tests/${vehicle_id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userToken}`,
        },
        body: JSON.stringify({ testDescription: inputValue }),
      });

      const data = await response.json();

      if (response.ok) {
        onAdd(data);
        toast.success('You successfully added a test');
        // Clear the input field
        setInputValue('');

        // Close the PopTest component
        onCancel();
      } else {
        console.error('Error adding test:', data.error);
        toast.error(data.error);
        // Handle the error, show a message, etc.
      }
    } catch (error) {
      console.error('Error adding test:', error);
      // Handle the error, show a message, etc.
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
            <XIcon className="h-5 w-5 text-[#2D6C56]" />
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
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>
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

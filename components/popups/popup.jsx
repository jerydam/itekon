import { useState } from 'react';
import { BsX } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Popup = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const userToken = localStorage.getItem('authToken');

  const handleAdd = async () => {
    try {
      const response = await fetch(`https://itekton.onrender.com//reports/transit-reports/${vehicle_id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userToken}`,
        },
        body: JSON.stringify({ description: inputValue }),
      });

      if (response.ok) {
        onAdd();
        toast.success('Report added successfully');
        setInputValue(''); // Clear the input value
      } else {
        console.error('Failed to add report. Please try again.');
        toast.error(data.error);
        // Handle the case where the request was not successful
      }
    } catch (error) {
      console.error('Error adding report:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <p className="block mb-2 text-lg font-medium">Add Report</p>
          <button onClick={onCancel}>
            <BsX className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p>You can add a vehicle report here to keep track of transits and vehicle movement</p>
        <p className="mt-5 mb-3">Write your Report</p>
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
            Save Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

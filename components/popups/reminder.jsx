import { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reminder from '../reminder';

const PopRem = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = async () => {
    try {
      const response = await fetch(`https://itekton.onrender.com/reports/reminders/${fleet_id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reminderText: inputValue,
          // Add any other relevant data you want to send to the backend
        }),
      });

      const data = await response.json();

      if (response.ok) {
        onAdd(data);
        toast.success('Reminder added')
        setInputValue('');
      } else {
        console.error('Error adding reminder:', data.error);
        toast.error(data.error)
      }
    } catch (error) {
      console.error('Error adding reminder:', error);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <p className="block mb-2 text-lg font-medium">Vehicle Maintenance Reminder</p>
          <button onClick={handleCancel}>
            <XIcon className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p>You can add a vehicle maintenance reminder here to get notified.</p>
        <p className="mt-5 mb-3">Add Reminder</p>
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
            Add Reminder
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopRem;

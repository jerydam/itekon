import { useState } from 'react';
import { BsX } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PopRenew = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  // ... (previous code)

const handleAdd = async () => {
  try {
    const userToken = localStorage.getItem('authToken');
    const fleet_id = localStorage.getItem('fleet_id');
    // Format expiration date to ISO 8601 format
    const formattedExpirationDate = new Date(expirationDate).toISOString();

    const response = await fetch(`https://itekton-wden.onrender.com/reports/registrations/${fleet_id}/`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${userToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: inputValue,
        expiration_date: formattedExpirationDate, // Use formatted expiration date
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success('successfully add a renewal reminder')
      onAdd(data);
      setInputValue('');
      setExpirationDate('');
    } else {
      console.error('Error adding renewal reminder:', data.error);
     toast.error('fail to add renewal')
    }
  } catch (error) {
    console.error('Error adding renewal reminder:', error);
   
  }
};




  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <p className="block mb-2 text-lg font-medium">Registration Renewal Reminder</p>
          <button onClick={handleCancel}>
            <BsX className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p>Add reminders for the renewal of your vehicle documents</p>
        <p className="mt-5 mb-3">Add Reminder</p>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
          placeholder="Description"
        />
        <input
          type="date"
          id="expirationDate"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
          placeholder="Expiration Date"
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

export default PopRenew;

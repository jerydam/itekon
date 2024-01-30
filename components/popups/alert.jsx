import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PopAlert = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const userToken = localStorage.getItem('authToken');

  const handleAdd = async () => {
    try {
      setLoading(true); // Set loading to true during the fetch operation
  
      // Make a fetch request to send data to the backend
      const response = await fetch('https://itekton.onrender.com/reports/alerts/', {
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
  
        toast.success('You successfully added an alert');
  
        // Clear the input field
        setInputValue('');
  
        // Close the PopAlert component
        handleCancel();
      } else {
        console.error('Error adding alert:', data.error);
        toast.error(data.error);
        // Handle the error, show a message, etc.
      }
    } catch (error) {
      console.error('Error adding alert:', error);
      // Handle the error, show a message, etc.
    } finally {
      setLoading(false); // Reset loading to false after the fetch operation
    }
  };
  

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <p className="block mb-2 text-lg font-medium">Add Test</p>
          <button onClick={handleCancel}>
            <
FaTimes className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p>Add alerts to keep tabs on faulty parts of your vehicles</p>
        <p className="mt-5 mb-3">Alert</p>
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
            type="submit"
            className={`border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Adding Alert...' : 'Add Alert'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopAlert;

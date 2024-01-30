import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditDetails = ({ userDetails, onEdit, onCancel }) => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSave = async () => {
    try {
      setLoading(true);

      const id = localStorage.getItem('userId');
      const response = await fetch(`https://itekton.onrender.com/accounts/users/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
          email: email, 
          companyName: companyName,
          registrationNumber: regNumber,
          companyAddress: address,
        }),
      });
  
      const data = await response.json();
      console.log(data); // Handle the response from the server
  
      if (response.ok) {
        // Your success logic goes here
        toast.success("Update successful");
      } else {
        // Your error handling logic goes here
        toast.error(data.error);
      }
  
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error updating data:', error);
      toast.error(error);
    }
  };
  

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md">
      <div className="flex justify-between items-center mb-4">
          <p className="block mb-2 text-lg font-medium">Edit Profile</p>
          <button onClick={onCancel}>
            <FaTimes className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <div className="mb-4">
          <label>Add Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label>Company Registration Number</label>
          <input
            type="text"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label>Company Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
          />
        </div>
        <button
          onClick={handleSave}
          className={`border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Details'}
        </button>
      </div>
    </div>
  );
};

export default EditDetails;

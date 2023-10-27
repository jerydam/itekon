import { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import CompleteImg from './img';

const CompleteName = ({ onAdd, onCancel }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [value, setValue] = useState('');

  const handleAdd = (input) => {
    // Add your logic for handling the input here
    console.log('Adding:', input);
    // You can add your custom logic here for adding the value to your list or state
    setShowPopup(false); // Hide the popup after adding the value
  };
  const handleCancel = () => {
    setShowPopup(false); // Hide the popup when canceled
  };

  const [formData, setFormData] = useState({
    companyName: '',
    registrationId: '',
    officeAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic here to handle the form submission and pass the data to the onAdd function
    onAdd(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <p className="block mb-2 text-lg font-medium">Complete Your Profile</p>

          <button onClick={onCancel}>
            <XIcon className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p className="mb-4">1. Enter details about your company here.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
              Name of Fleet Company
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="registrationId" className="block text-gray-700 text-sm font-bold mb-2">
              Company's Registration ID
            </label>
            <input
              type="text"
              id="registrationId"
              name="registrationId"
              value={formData.registrationId}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="officeAddress" className="block text-gray-700 text-sm font-bold mb-2">
              Company's Office Address
            </label>
            <textarea
              id="officeAddress"
              name="officeAddress"
              value={formData.officeAddress}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setShowPopup(true)}
              className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Next {'-->'}
            </button>
          </div>
          {showPopup && <CompleteImg onAdd={handleAdd} onCancel={handleCancel} />}
        </form>
      </div>
    </div>
  );
};

export default CompleteName;

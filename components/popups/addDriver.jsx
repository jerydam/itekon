'use client'
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDriver = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const [license, setLicense] = useState('');
  const [num, setNum] = useState('');
  const [mail, setMail] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleAdd = async () => {
    try {
      const formData = new FormData();
      formData.append('name', inputValue);
      formData.append('license_number', license);
      formData.append('phone_number', num);
      formData.append('email', mail);
      formData.append('driver_image', imagePreview);
  
      const userToken = localStorage.getItem('authToken');
  
      const response = await fetch('https://itekton.onrender.com/vehicles/drivers/', {
        method: 'POST',
        headers: {
          Authorization: `Token ${userToken}`,
        },
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        // Handle success, e.g., update the UI or close the modal
        console.log('Driver added successfully:', data);
        toast.success(data)
        onAdd(data); // Assuming onAdd is a callback to update the driver list or perform any other action
      } else {
        // Handle the case where the request was not successful
        console.log('Error adding driver:', response.statusText);
        toast.success(data)

      }
    } catch (error) {
      // Handle any network errors or other issues
      console.error('Error adding driver:', error);
    } 
  };
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="absolute h-fit py-5  inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center ">
      <div className="bg-white w-fit p-6 rounded-md">
        <div className="flex justify-between items-center my-4">
          <p className="block mb-2 text-lg font-medium">Add New Driver</p>
          <button onClick={onCancel}>
            <
FaTimes className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p>Add new driver to your fleet</p>
        <p className='mt-2 mb-2'>Name</p>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-2 rounded-md w-full"
        />
        <p className='mt-2 mb-2'>License Number</p>
        <input
          type="text"
          id="iD"
          value={license}
          onChange={(e) => setLicense(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-2 rounded-md w-full"
        />
        <p className='mt-2 mb-2'>Phone Number</p>
        <input
          type="text"
          id="num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
        />
        <p className='mt-2 mb-2'>Email Address</p>
        <input
          type="email"
          id="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
        />
        
            <p className='ml-5 mt-2'>Upload Image of Driver/Operator</p>
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-20 my-5 flex items-center justify-center overflow-hidden">
  {imagePreview ? (
    <img
      src={imagePreview}
      alt="Driver Preview"
      style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
  ) : (
    <label htmlFor="driverImage" className="text-gray-500 cursor-pointer hover:text-gray-600">
      <img
        src="/path-to-your-image-icon.png" // Replace with your image icon URL
        alt=""
        className="h-12 w-12"
      />
      <span className="block text-sm mt-1">Upload Image</span>
      <input
        type="file"
        id="driverImage"
        name="driverImage"
        accept="image/*"
        onChange={handleImageChange}
        required
        className="hidden" // Make sure this is not set to "hidden"
      />
    </label>
  )}
</div>

      
        <div className="flex justify-center">
          <button
            onClick={handleAdd}
            className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded"
          >
            Add New Driver
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDriver;


import { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CompleteName = ({ onAdd, onCancel, currentPage, handleNext, handlePrevious }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    registrationId: '',
    officeAddress: '',
  });

  const handleCancel = () => {
    setFormData({
      companyName: '',
      registrationId: '',
      officeAddress: '',
    });
    onCancel();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userToken = localStorage.getItem('authToken');
    console.log('User Token:', userToken);

    try {
      const formDataObj = new FormData();
      formDataObj.append('company_name', formData.companyName);
      formDataObj.append('registration_id', formData.registrationId);
      formDataObj.append('address', formData.officeAddress);

      const response = await fetch('https://itekton.onrender.com/fleets/fleets/', {
        method: 'POST',
        headers: {
          Authorization: `Token ${userToken}`,
        },
        body: formDataObj,
      });

      const responseData = await response.json();

      if (response.ok) {
        const data = responseData.data; // Adjust based on your API response structure
        toast.success("Successfully added company");
        onAdd(data);
      } else {
        
        console.log('Error adding company:', data);
        toast.error(`Failed to add company: ${data}`);
      }
    } catch (error) {
      
    }
  };

  const handleNextClick = async () => {
    try {
      await handleSubmit();
      handleNext();
    } catch (error) {
      console.error('Failed to add company or response is not OK:', error);
      toast.error('Failed to add company or response is not OK: ' + error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {currentPage > 1 && (
          <button onClick={handlePrevious} style={{ marginRight: '10px' }}>
            Previous
          </button>
        )}
        {currentPage < 5 && (
          <button onClick={handleNext} style={{ marginLeft: '10px' }}>
            Next
          </button>
        )}
      </div>

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
  onClick={handleNextClick}
  className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>
  Next {'-->'}
</button>
          </div>
        </form>
        <div className="flex justify-center mt-3 space-x-2">
          {[1, 2, 3, 4, 5].map((index) => (
         <div
          key={index}
           className={`h-4 w-4 rounded-full ${
           currentPage === index ? 'bg-[#2D6C56]' : 'bg-[#D9D9D9] '
      }`}
        ></div>
       ))}
</div>
      </div>
    </div>
  );
};

export default CompleteName;

import React, { useState } from 'react';
import CompleteName from '@/components/popups/name';
import CompleteEmail from '@/components/popups/email';
import CompleteImg from '@/components/popups/img';
import Added from '@/components/popups/done';
import OTP from '@/components/popups/otp';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Pagination = ({ onCancel }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    registrationId: '',
    officeAddress: '',
  });

  const handleNext = (input) => {
    // Add a check to ensure that the input is not empty
    if (Object.values(input).every((value) => value !== '')) {
      setFormData((prevFormData) => ({ ...prevFormData, ...input }));
      setCurrentPage(currentPage + 1);
    } else {
      // Handle the case where input is empty (you can show an error message or take appropriate action)
      console.log('Input is empty. Please fill in all fields.');
      toast.error('Cannot be empty')
    }
  };
  

  const handleCancel = () => {
    onCancel(); // Call the onCancel function passed as a prop
  };

  const renderPopup = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <CompleteName onAdd={handleNext} onCancel={handleCancel} currentPage={currentPage} />;
      case 2:
        return <CompleteImg onCancel={handleCancel} currentPage={currentPage} handleNext={handleNext} formData={formData} />

      case 3:
        return <CompleteEmail onAdd={handleNext} onCancel={handleCancel} currentPage={currentPage} />;
      case 4:
        return <OTP onCancel={handleCancel} currentPage={currentPage} onAdd={handleNext} />;
      case 5:
        return <Added onCancel={handleCancel} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderPopup(currentPage)}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {currentPage < 5 && (
          <button onClick={() => handleNext(formData)} style={{ marginLeft: '10px' }}>
            {"Next-->"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;

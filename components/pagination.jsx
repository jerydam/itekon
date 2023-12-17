import React, { useState, useEffect } from 'react';
import CompleteName from '@/components/popups/name';
import CompleteEmail from '@/components/popups/email';
import CompleteImg from '@/components/popups/img';
import Added from '@/components/popups/done';
import OTP from '@/components/popups/otp';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const Pagination = ({ onCancel }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    registrationId: '',
    officeAddress: '',
  });
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const [disableResend, setDisableResend] = useState(false);
  const intervalRef = useRef(null);

  const startCountdown = () => {
    clearInterval(intervalRef.current); // Clear the previous interval
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
          setDisableResend(false);
          return 300; // Reset countdown to 5 minutes
        }
        return prevCountdown - 1;
      });
    }, 1000);
    intervalRef.current = interval; // Store the new interval reference
  };
  

  const handleNext = (input) => {
    // Check if input is an object and all values are not empty
    if (!input || (typeof input === 'object' && Object.values(input).every((value) => value !== ''))) {
      setFormData((prevFormData) => ({ ...prevFormData, ...(input || {}) }));
      setCurrentPage((prevPage) => prevPage + 1);
  
      // Start countdown on certain steps
      if (currentPage === 3) {
        startCountdown();
      }
    } else {
      console.log('Invalid input:', input);
      toast.error('Please fill in all fields.');
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
        return <CompleteImg onCancel={handleCancel} currentPage={currentPage} handleNext={handleNext} formData={formData} />;
      case 3:
        return <CompleteEmail handleNext={handleNext} onCancel={handleCancel} currentPage={currentPage} startCountdown={startCountdown} />;
      case 4:
        return <OTP onCancel={handleCancel} currentPage={currentPage} handleNext={handleNext} countdown={countdown} disableResend={disableResend} startCountdown={startCountdown} />;
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
          <button onClick={() => handleNext()} style={{ marginLeft: '10px' }}>
            {"Next-->"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;

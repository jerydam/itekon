import React, { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OTP = ({ currentPage, onCancel, handleNext, countdown, disableResend, startResendCountdown }) => {
  const [otp, setOtp] = useState(['', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

 

  const handleConcatenate = async () => {
    const concatenatedOtp = otp.join('');
    const userToken = sessionStorage.getItem('authToken');

    try {
      const response = await fetch('https://itekton.onrender.com/fleets/verify-otp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userToken}`,
        },
        body: JSON.stringify({ otp: concatenatedOtp }),
      });

      if (response.ok) {
        // Handle the response from the server if necessary
        const data = await response.json();
        toast.success('Verification successful');
        console.log(data);
        handleNext(formData); // Move to the next step after handling the OTP
      } else {
        // Handle errors here
        console.error('Error sending data to the server');
        toast.error(data.error);
      }
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
  };

  const handleResend = async () => {
    const userToken = sessionStorage.getItem('authToken');

    try {
      const response = await fetch('https://itekton.onrender.com/fleets/send-otp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userToken}`,
        },
        body: JSON.stringify({ /* Include any necessary data for resend */ }),
      });

      if (response.ok) {
        toast.success('An OTP code has been resent to the provided account');
        startResendCountdown(); // Start the countdown
      } else {
        console.error('Error resending OTP');
        toast.error('Failed to resend OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      toast.error('Failed to resend OTP. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="p-6 rounded-md">
        <div className="flex items-center justify-center h-full">
          <div className="bg-white p-8 rounded shadow-md">
            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl font-bold mb-4">Complete Your Profile</p>
              <button onClick={onCancel}>
                <XIcon className="h-5 w-5 text-[#2D6C56]" />
              </button>
            </div>
            <p>A one-time password (OTP) has been sent to your email account</p>
            <p className="my-2">Enter the OTP (one-time password) sent to your email below</p>
            <div className="flex items-center mt-3 justify-center space-x-4">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="border border-gray-300 rounded-md w-10 h-12 text-center text-2xl focus:outline-none focus:ring-2focus:ring-[#2D6C56] focus:border-[#2D6C56]"
                  value={value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              ))}
            </div>
            <div className="flex justify-center items-center mt-5">
              <button
                onClick={handleConcatenate}
                className={`border-b-4 border-2 ${
                  disableResend ? 'border-[#2D6C56] text-[#2D6C56]' : 'border-gray-300 text-gray-300'
                } font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                disabled={!disableResend}
              >
                {disableResend ? 'Verify Account' : 'Resend OTP'}
              </button>
            </div>
            <div className="flex justify-center mt-3 space-x-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`h-4 w-4 rounded-full ${
                    currentPage === index ? 'bg-[#2D6C56]' : 'bg-[#D9D9D9]'
                  }`}
                ></div>
              ))}
            </div>

            {disableResend ? (
              <p className="mt-3">Resend OTP in {countdown} seconds</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;

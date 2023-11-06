import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';

const CompleteEmail = ({ onAdd, onCancel, currentPage, handleNext  }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://itekton.onrender.com/fleets/send-otp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        toast.success=("An otp code has been send to the provided account")
        const data = await response.json();
        console.log(data);
      } else {
        // Handle errors here
        console.error('Error sending data to the server');
      }
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
    setSent(true);
  };
  
  const handleCancel = () => {
    // Implement cancel logic here
    console.log('Cancelled');
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <div className="flex items-center justify-center h-full">
          <div className="">
            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl font-bold mb-4">Complete Your Profile</p>
              <button onClick={onCancel}>
                <XIcon className="h-5 w-5 text-[#2D6C56]" />
              </button>
            </div>
            <p>3. Verify your account. A one time password will be sent to your email account.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block my-3 text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md m px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#2D6C56] w-full focus:border-[#2D6C56]"
                />
              </div>
              <button
              onClick={handleNext}
                type="submit"
                className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send OTP
              </button>
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
      </div>
    </div>
  );
};

export default CompleteEmail;

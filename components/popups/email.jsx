import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompleteEmail = ({ onCancel, currentPage, handleNext }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const userToken = localStorage.getItem('authToken');
  const nextButtonRef = useRef(); // Ref for the "Next" button

  useEffect(() => {
    // When the component mounts, set up a listener for successful responses
    const handleSuccessfulResponse = () => {
      if (nextButtonRef.current) {
        nextButtonRef.current.click(); // Programmatically trigger a click on the "Next" button
      }
    };

    document.addEventListener('successfulResponse', handleSuccessfulResponse);

    return () => {
      // Clean up the listener when the component unmounts
      document.removeEventListener('successfulResponse', handleSuccessfulResponse);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your API endpoint URL
    const apiUrl = 'https://itekton-wden.onrender.com/fleets/send-otp/';

    try {
      setLoading(true);

      // Make a POST request to the backend
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${userToken}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      // Handle the response from the backend
      if (response.ok) {
        toast.success('OTP has already been sent');
        handleNext();

        
      } 
      else if (response.status ===400) {
          
        toast.success('OTP has already been sent');
        handleNext();
      }
      else {
        // Handle error response
        console.error(data.message);
        toast.error('Error sending OTP. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md">
        <div className="flex items-center justify-center h-full">
          <div className="">
            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl font-bold mb-4">Complete Your Profile</p>
              <button onClick={onCancel}>
                <FaTimes className="h-5 w-5 text-[#2D6C56]" />
              </button>
            </div>
            <p>3. Verify your account. A one-time password will be sent to your email account.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block my-3 text-sm font-medium text-gray-700">
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
                onClick={handleSubmit}
                type="submit"
                className={`border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
              <p
                ref={nextButtonRef}
                type="" // Make it a button, not a submit
                className={` ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                
              </p>
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


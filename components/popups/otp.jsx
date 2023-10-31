import { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

const OTP = ({ onAdd, currentPage, onCancel, handleNext }) => {
  const [otp, setOtp] = useState(['', '', '', '', '']);

  const handleInputChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };
  const handleCancel = () => {
    // Implement cancel logic here
    console.log('Cancelled');
  };
  const handleConcatenate = () => {
    const concatenatedOtp = otp.join('');
    // Call your backend API here with the concatenated OTP string
    console.log(concatenatedOtp);
  
    // Assuming you have a check here to verify the OTP
    // If the OTP is correct, move to the next step
    if (concatenatedOtp === '12345') {
      handleNext(); // Move to the next step after handling the OTP
    } else {
      // Handle the case when the OTP is incorrect
      console.log('Incorrect OTP');
      // You can show an error message or perform any other action here
      alert('Incorrect OTP. Please try again.'); // Display an error message
    }
  };
  
  
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className=" p-6 rounded-md">
        <div className="flex items-center justify-center h-full">
          <div className="bg-white p-8 rounded shadow-md">
            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl font-bold mb-4">Complete Your Profile</p>
              <button onClick={onCancel}>
               <XIcon className="h-5 w-5 text-[#2D6C56]" />
              </button>
            </div>
            <p>A one time password (OTP) has been sent to your email account</p>
            <p className="my-2">Enter the OTP (one time password) sent to your email below</p>
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
                className="border-b-4 border-2 border-[#2D6C56]  text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Verify Account
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
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default OTP;

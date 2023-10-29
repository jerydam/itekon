import { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
const CompleteEmail = ({onCancel, onAdd }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send a one-time password to the provided email
    setSent(true);
  };
   return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
      <div className="flex items-center justify-center h-full">
      <div className="">
      <div className='flex justify-between items-center mb-4'>
      <p className="text-2xl font-bold mb-4">Complete Your Profile</p>
      <button onClick={onCancel}>
            <XIcon className="h-5 w-5 text-[#2D6C56]" />
          </button>
          </div>
        <p>3. Verify your account. A one time password will be sent to your email account.</p>
        
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
              type="submit"
              className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            >
              Send OTP
            </button>
          </form>
        
      </div>
    </div>
      </div>
    </div>
  );
};
export default CompleteEmail;
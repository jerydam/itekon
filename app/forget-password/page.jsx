'use client'
import { useState } from 'react';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgetPassword = async () => {
    try {
      // Simulate the password reset request
      // You would replace this with your actual API call
      const response = await fetch('https://itekton.onrender.com/accounts/password_reset/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        toast.info('Password reset link has been sent to your email. Please check your inbox.');
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending password reset link:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center rounded bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Forget Password</h2>
        <form>
          <label className="block mb-4" htmlFor="email">
            Email:
            <input
              className="border border-gray-300 rounded p-2 w-full"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <div
            onClick={handleForgetPassword}
            className=" hover:border-[#2D6C56] border-emerald-100 border-x-2 border-b-4 text-[#2D6C56]font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 w-40"
          >
            Submit
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

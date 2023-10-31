'use client'
import React, { useState } from 'react';
import '/styles/global.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    // Reset password match status if the passwords match
    setPasswordMatch(true);

    const userData = { email, password }; // Replace with the appropriate data

    try {
      const response = await fetch('https://itekton.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle success, such as redirecting the user to a new page or showing a success message
        console.log('User registered successfully');
      } else {
        // Handle errors and show appropriate messages to the user
        const errorData = await response.json();
        console.error('Error:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="flex border-2 border-solid bg-white min-h-screen items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg border-2 w-96 ml-20 ">
        <p className="mt-4 text-gray-600 font-sans font-semibold">
          Welcome{" "} <br />
          <span className="text-sm font-normal">Sign up here to create an account</span>
        </p>

        <form onSubmit={handleSignup}>
          <div className="my-5">
            <label htmlFor="email" className="block text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#2D6C56] px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-[#2D6C56]">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#2D6C56] px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-[#2D6C56]">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordMatch(e.target.value === password);
              }}
              className={`border ${
                !passwordMatch ? 'border-red-500' : 'border-[#2D6C56]'
              } px-3 py-2 w-full rounded-md focus:outline-none ${
                !passwordMatch ? 'focus:border-red-500' : 'focus:border-[#2D6C56]'
              }`}
            />
            {!passwordMatch && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
            )}
          </div>
          <div>
        <input
            type="checkbox"
            id="remember"
            className="text-blue-500 form-checkbox"
          />
          <label htmlFor="remember" className="inline-block ml-2 text-gray-600">
            Remember Me
          </label>
          
        </div>
          <div
            type="submit"
            className="hover:border-[#2D6C56] text-center border-emerald-100 border-x-2 border-b-4 mt-8 text-[#2D6C56] font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 w-40"
          >
           <a href="/signu">Continue</a>
          </div>
          <p className="text-sm font-normal my-2">
            Already have an account?{" "}
            <a className="text-[#2D6C56]hover:underline" href="">
              Sign in here
            </a>
          </p>
        </form>
      </div>

      <div
        className="ml-[200px]"
        style={{
          height: '600px',
          width: '500px',
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/motor.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: 'white',
        }}
      >
        <div className='text-center bg-opacity-50 bg-white p-4 rounded-md mx-5 font-san font-semibold'>
          <img className="mx-auto" src="/images/logo.png" alt="Logo" width="100" height="100" />
          <p className='text-lg'>
            A smart platform for <br />enterprise fleet solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

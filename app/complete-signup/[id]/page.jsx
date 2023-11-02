'use client'
import { useState } from 'react';
import "/styles/global.css";
import { useParams } from 'next/navigation';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signu = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [number, setNumber] = useState('');
 
const params = useParams()
const userid = params?.id;
  const handleSignu = async () => {
    const userData = { name, user, number };
    try {
      const response = await fetch(`https://itekton.onrender.com/accounts/complete_signup/${userid}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          user,
          number,
        }),
      });
      const data = await response.json();
      console.log(data); // Log the response from the back-end
  
      // Redirect the user to the login page after successful sign-up
      if (response.ok) {
        toast.success('Sign up successful');
        window.location.href = '/login';
      } else {
        toast.error('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };
  
  return (
    <div className="flex border-2 border-solid bg-white min-h-screen items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg border-2 w-96 ml-20 mr-[150px]">
        <div className="mt-4 text-gray-600 font-sans font-semibold">
          Welcome{" "}
          <p className="text-sm font-normal">
            Let get to know you
          </p>
        </div>

        <form onSubmit={handleSignu}>
          <div className="my-5">
            <label htmlFor="number" className="block text-gray-600">
              Phone Number:
            </label>
            <input
              type="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border border-[#2D6C56] px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#2D6C56]">
              First Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[#2D6C56] px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user" className="block text-[#2D6C56]">
              Last Name:
            </label>
            <input
              type="text"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="border border-[#2D6C56] px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
            />

          </div>
         
          <div
  
  className="hover:border-[#2D6C56] text-center border-emerald-100 border-x-2 border-b-4 mt-8 text-[#2D6C56] font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 w-40"
  onClick={handleSignu} // Add the onClick event handler for the sign-up action
>
  Sign Up
</div>

          <p className="text-sm font-normal my-2">
            Already have an account?{" "}
            <a className="text-[#2D6C56]hover:underline" href="/login">
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
        <div className='text-center bg-opacity-50 bg-white p-4 rounded-md mx-5  font-san font-semibold'>
          <img className="mx-auto" src="/images/logo.png" alt="Logo" width="100" height="100" />
          <p className='text-lg'>
            A smart platform for <br />enterprise fleet solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signu;

'use client'
import { useState } from 'react';
import "/styles/global.css";

const Signu = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [number, setNumber] = useState('');

  const handleSignu = async () => {
    // Add your authentication logic here
  };

  return (
    <div className="flex border-2 border-solid bg-white min-h-screen items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg border-2 w-96 ml-20 mr-[150px]">
        <p className="mt-4 text-gray-600 font-sans font-semibold">
          Welcome{" "}
          <p className="text-sm font-normal">
            Let get to know you
          </p>
        </p>

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
            type="submit"
            className="hover:border-[#2D6C56] text-center border-emerald-100 border-x-2 border-b-4 mt-8 text-[#2D6C56]font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 w-40"
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
        <div className='text-center bg-opacity-50 bg-white p-4 rounded-md mx-5 p-10 font-san font-semibold'>
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

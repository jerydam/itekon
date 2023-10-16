'use client'
import { useState } from 'react';
import "/styles/global.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Add your authentication logic here
  };

  return (
    
     <div className="flex  border-2 border-solid bg-white min-h-screen items-center justify-center">
     <div className="bg-white p-8 rounded-lg shadow-lg border-2 w-96 ml-20]">
     <p className="mt-4 text-gray-600 font-sans font-semibold">
     Welcome back,<p className="text-sm font-normal">Sign in to your account to continue</p>
    </p>
  
  <form onSubmit={handleLogin}>
    <div className=" my-5">
      <label htmlFor="email" className="block text-[#2D6C56]">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-[#2D6C56] px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-[#2D6C56] px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
      />
    </div>
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <div>
        <input
            type="checkbox"
            id="remember"
            className="text-[#2D6C56] form-checkbox"
          />
          <label htmlFor="remember" className="inline-block ml-2 text-gray-600">
            Remember Me
          </label>
          
        </div>
        <a href="#" className="text-[#2D6C56] hover:underline">Forget Password?</a>
      </div>
    </div>
    <a type="submit" className=" hover:border-[#2D6C56] border-emerald-100 border-x-2 border-b-4 text-[#2D6C56]font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 w-40" a href="Dashboard">Login</a>
      <p className="text-sm font-normal my-2">Do not have an account yet? <a className="text-[#2D6C56] hover:underline" href="signup">Sign up here</a></p>
    
  </form>
</div>

      <div className='ml-[200px]'
      style={{
        height: '600px',
        width: '500px',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/motor.png")',
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

export default Login;

import { useState } from 'react';
import "/styles/global.css";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    // Add your authentication logic here
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
      <div className="lg:w-96 bg-white p-8 rounded-lg shadow-lg border-2 m-5">
        <p className="mt-4 text-gray-600 font-sans font-semibold">
          Welcome{" "}
          <p className="text-sm font-normal">
            Sign up here to create an account
          </p>
        </p>

        <form onSubmit={handleSignup} className="my-5">
          {/* Email input */}
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

          {/* Password input */}
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

          {/* Confirm Password input */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-[#2D6C56]">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-[#2D6C56] px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
            />
          </div>

          {/* Remember Me checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="text-blue-500 form-checkbox"
            />
            <label htmlFor="remember" className="inline-block ml-2 text-gray-600">
              Remember Me
            </label>
          </div>

          {/* Signup button */}
          <button
            type="submit"
            className="hover:border-[#2D6C56] text-center border-emerald-100 border-x-2 border-b-4 mt-8 text-[#2D6C56] font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 w-full lg:w-40"
          >
            <a href="/signup">Continue</a>
          </button>
          <p className="text-sm font-normal my-2">
            Already have an account?{' '}
            <a className="text-[#2D6C56] hover:underline" href="">
              Sign in here
            </a>
          </p>
        </form>
      </div>

      <div
        className="w-full lg:w-1/2"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/motor.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: 'white',
          height: '100vh',
        }}
      >
        <div className="text-center bg-opacity-50 bg-white p-4 rounded-md mx-5 p-10 font-san font-semibold">
          <img
            className="mx-auto"
            src="/images/logo.png"
            alt="Logo"
            width="100"
            height="100"
          />
          <p className="text-lg">
            A smart platform for <br />enterprise fleet solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

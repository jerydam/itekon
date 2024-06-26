'use client'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [addMe, setAddMe] = useState(false);

  const handleSignup = async (e) => {
    
    try {
      setLoading(true);
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
        
      } else {
        localStorage.removeItem('rememberedEmail');
        
      }
      if (addMe) {
        localStorage.setItem('rememberedPassword', password);
      } else{
        localStorage.removeItem('rememberedPassword');
      }

    e.preventDefault();
  
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
  
    // Reset password match status if the passwords match
    setPasswordMatch(true);
  
    const userData = { email, password }; // Replace with the appropriate data
  
      setLoading(true);
      const response = await fetch('https://itekton-wden.onrender.com/accounts/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });     
      const data = await response.json();
      if (response.ok) {
        
        const id = data.id;
    
         toast.success('details registered, proceed to complete signup');
        console.log('User registered successfully', userData);
        window.location.href = `/complete-signup/${id}`;
      } else {
         
        console.log('Error:', data.email);
        toast.error(data.details );
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
          
    }
  };
  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
    setAddMe(e.target.checked);
  };
  useEffect(() => {
    
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    const rememberedPassword = localStorage.getItem('rememberedPassword');

    
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
    if (rememberedPassword) {
      setPassword(rememberedPassword);
      setAddMe(true);
    }
  }, []);
 

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
            checked={rememberMe}
            onChange={handleRememberMe}
            className="text-[#2D6C56] form-checkbox"
          />
          <label htmlFor="remember" className="inline-block ml-2 text-gray-600">
            Remember Me
          </label>
          
        </div>
        <div className="mb-4">
        <button
      onClick={handleSignup}// Keep this line
      className={`border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
        loading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={loading}
    >
      {loading ? 'continue sign up...' : 'Continue'}
    </button>
      </div>
          <p className="text-sm font-normal my-2">
            Already have an account?{" "}
            <a className="text-[#2D6C56]hover:underline" href="login">
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

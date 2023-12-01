'use client'
import { useState, useEffect } from 'react';
import "/styles/global.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [addMe, setAddMe] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const handleLogin = async () => {
    const userToken = localStorage.getItem('authToken');
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
  
      const response = await fetch('https://itekton.onrender.com/accounts/signin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log(data); // Handle the response from the server
  
      if (response.ok) {
        const id = data.user.id;
        localStorage.setItem('userId', id);
        const token = data.token;
        
        const authToken = localStorage.setItem('authToken', token);

  
        // Redirect the user to the dashboard or appropriate page on successful login
        if (data.user.verification == true) {
          toast.success("login successful")
          window.location.href = '/dashboard'; 
        }
        else {
          toast.success("login successful, please complete your profile and verify your account")
          window.location.href='/complete-profile';
          
        }
      } else {
       
        toast.error(data.error);
      }
      setLoading(false);
    } catch (error) {
      
      setLoading(false); // Set loading state to false on error
      console.error('Error logging in:', error);
      toast.error(error);
    }
  };
  

  

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
    setAddMe(e.target.checked);
  };

  // Use the remembered email if available
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
    <>
     <div className="flex  border-2 border-solid bg-white min-h-screen items-center justify-center">
     
     <div className="bg-white p-8 rounded-lg shadow-lg border-2 w-96 ml-20]">
     <div className="mt-4 text-gray-600 font-sans font-semibold">
     Welcome back,<p className="text-sm font-normal">Sign in to your account to continue</p>
    </div>
  
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
        className="border px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
      />
    </div>
    <div className="mb-4">
      <div className="flex justify-between items-center">
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
        <a href='forget-password' className="text-[#2D6C56] hover:underline">Forget Password?</a>
      </div>
    </div>
    <div className="mb-4">
    <div className="mb-4">
    <button
      onClick={handleLogin} // Keep this line
      className={`border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
        loading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={loading}
    >
      {loading ? 'Logging in...' : 'Login'}
    </button>
  </div>
            </div>
      <p className="text-sm font-normal my-2">Do not have an account yet? <a className="text-[#2D6C56] hover:underline" href="signup">Sign up here</a></p>
    
  </form>
</div>

      <div className='ml-[200px] sm:hidden'
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
        <div className='text-center bg-opacity-50 bg-white p-4 rounded-md mx-5 font-san font-semibold'>
  <img className="mx-auto" src="/images/logo.png" alt="Logo" width="100" height="100" />
  <p className='text-lg'>
    A smart platform for <br />enterprise fleet solution.
  </p>
</div>

    </div>
</div>
   </>
  );
};

export default Login;

'use client'
import a from 'next/link';
import { useState, useEffect } from 'react';
import "/styles/global.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null); // State to store user data
  const userToken = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
  console.log('User Token:', userToken);

  // Simulating fetching user data from the backend
  useEffect(() => {
    // Replace this with actual fetching logic
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://itekton.onrender.com/fleets/fleets/', {
  method: 'GET',
  headers: {
    'Authorization': `Token ${userToken}`,
  },
  
});
        
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const toggleSettingsDropdown = () => {
    setIsSettingsDropdownOpen(!isSettingsDropdownOpen);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  return (
    <div className="text-gray-800 w-64 border-x-2 h-screen p-4 sidebar">
      <a href="/login"className="flex items-center">
        <img
          className="my-5"
          src="/images/logo.png"
          alt="Logo"
          width="100"
          height="100"
        />
      </a>

      <ul className="space-y-2 h-full">
        <li>
          <a href="/dashboard"
              onClick={() => handleItemClick('dashboard')}
              className={`text-2xl font-normal mb-4 flex items-center ${activeItem === 'dashboard' ? 'border-l-4 border-l-[#2D6C56] rounded-md bg-[#F5F4E9]' : ''}`}
            >
              <img
                className="my-5 mx-5"
                src="/images/dash.png"
                alt="Logo"
                width="20"
                height="20"
              />{' '}
              Dashboard
            
          </a>
        </li>
        <li>
          <a href="/track-vehicle"
            
              onClick={() => handleItemClick('track-vehicles')}
              className={`text-2xl font-normal mb-4 flex items-center ${activeItem === 'track-vehicles' ? 'border-l-4 border-l-[#2D6C56] rounded-md bg-[#F5F4E9]' : ''}`}
            >
              <img
                className="my-5 mx-5"
                src="/images/track.png"
                alt="Logo"
                width="20"
                height="20"
              />{' '}
              Track Vehicles
            
          </a>
          </li>
          <li>
          <a href="/vehicles"
            
              onClick={() => handleItemClick('vehicles')}
              className={`text-2xl font-normal mb-4 flex items-center ${activeItem === 'vehicles' ? 'border-l-4 border-l-[#2D6C56] rounded-md bg-[#F5F4E9]' : ''}`}
            >
              <img
                className="my-5 mx-5"
                src="/images/car-wash.png"
                alt="Logo"
                width="20"
                height="20"
              />{' '}
              Vehicles
            
          </a>
            </li>

            <li>
          <a href="/driver"
            
              onClick={() => handleItemClick('drivers')}
              className={`text-2xl font-normal mb-4 flex items-center ${activeItem === 'drivers' ? 'border-l-4 border-l-[#2D6C56] rounded-md bg-[#F5F4E9]' : ''}`}
            >
              <img
                className="my-5 mx-5"
                src="/images/driver.png"
                alt="Logo"
                width="20"
                height="20"
              />{' '}
              Drivers
            
          </a>
            </li>

            <li>
          <a href="/reports"
            
              onClick={() => handleItemClick('reports')}
              className={`text-2xl font-normal mb-4 flex items-center ${activeItem === 'reports' ? 'border-l-4 border-l-[#2D6C56] rounded-md bg-[#F5F4E9]' : ''}`}
            >
              <img
                className="my-5 mx-5"
                src="/images/report.png"
                alt="Logo"
                width="20"
                height="20"
              />{' '}
              Reports
            
          </a>
        </li>
        <li>
  <div className="flex flex-col relative">
    <div
      onClick={() => {
        toggleSettingsDropdown();
        handleItemClick('setting');
      }}
      className={`text-2xl font-normal mb-4 flex items-center cursor-pointer ${
        isSettingsDropdownOpen ? 'text-[#2D6C56]' : ''
      } ${activeItem === 'setting' ? 'border-l-4 border-l-[#2D6C56] rounded-md bg-[#F5F4E9]' : ''}`}
    >
      <img
        className="my-5 mx-5"
        src="/images/settings.png"
        alt="Logo"
        width="20"
        height="20"
      />{' '}
      Settings
    </div>
    {isSettingsDropdownOpen && (
      <ul className="ml-4 mb-64">
      
        <li>
          <a href="/settings/account" className="font-normal mb-2 flex items-center hover:text-[#2D6C56]">
           Account
          </a>
        </li>
        <li>
          <a href="/settings/billing" className="font-normal mb-2 flex items-center hover:text-[#2D6C56]">
            Billing
          </a>
        </li>
        <li>
          <a href="/settings/help" className="font-normal mb-2 flex items-center hover:text-[#2D6C56]">
            Help
          </a>
        </li>
       
      </ul>
    )}
  </div>
</li>

        <div className=''>
      <a href="/fleet/add-vehicle" className='border-b-4 border-2 border-[#2D6C56] rounded text-center p-3'>
            + Add vehicles
          </a>
      </div>
      {userData && (
        <div className="static bottom-0 left-0 w-1/2 bg-white p-4">
          <img
            className="my-5"
            src={userData.image} 
            alt="User"
            width="50"
            height="50"
          />
          <p className="text-center">{userData.name}</p>
        </div>
      )}       
      </ul>

      
    </div>
  );
};

export default Sidebar;






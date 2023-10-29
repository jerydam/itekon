import Link from 'next/link';
import { useState, useEffect } from 'react';
import "/styles/global.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null); // State to store user data

  // Simulating fetching user data from the backend
  useEffect(() => {
    // Replace this with actual fetching logic
    const fetchUserData = async () => {
      try {
        const response = await fetch('YOUR_BACKEND_API_ENDPOINT');
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
      <div className="flex items-center">
        <img
          className="my-5"
          src="/images/logo.png"
          alt="Logo"
          width="100"
          height="100"
        />
      </div>

      <ul className="space-y-2 h-full">
        <li>
          <Link href="/dashboard"
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
            
          </Link>
        </li>
        <li>
          <Link href=""
            
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
            
          </Link>
          </li>
          <li>
          <Link href="vehicles"
            
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
            
          </Link>
            </li>

            <li>
          <Link href="driver"
            
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
            
          </Link>
            </li>

            <li>
          <Link href=""
            
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
            
          </Link>
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
          <Link href="" className="font-normal mb-2 flex items-center hover:text-blue-500">
           Account
          </Link>
        </li>
        <li>
          <Link href="" className="font-normal mb-2 flex items-center hover:text-blue-500">
            Billing
          </Link>
        </li>
        <li>
          <Link href="" className="font-normal mb-2 flex items-center hover:text-blue-500">
            Help
          </Link>
        </li>
       
      </ul>
    )}
  </div>
</li>

        <div className=''>
      <Link href="addVehicle" className='border-b-4 border-2 border-[#2D6C56] rounded text-center p-3'>
            + Add vehicles
          </Link>
      </div>
      {userData && (
        <div className="fixed bottom-0 left-0 w-1/5 bg-white p-4">
          <img
            className="my-5"
            src={userData.image} // Replace with the path to the user's image fetched from the backend
            alt="User"
            width="50"
            height="50"
          />
          <p className="text-center">{userData.name}</p> {/* Replace with the user's name fetched from the backend */}
        </div>
      )}       
      </ul>

      
    </div>
  );
};

export default Sidebar;






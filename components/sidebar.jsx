import Link from 'next/link';
import { useState } from 'react';
import "/styles/global.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);

  const toggleSettingsDropdown = () => {
    setIsSettingsDropdownOpen(!isSettingsDropdownOpen);
  };
  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  return (
    <div className="text-gray-800 w-full lg:w-1/5 border-2 h-screen p-4">
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
          <Link href="addVehicle"
            
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
          <Link href=""
            
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
          <Link href=""
              onClick={() => toggleSettingsDropdown()}
              className={`text-2xl font-normal mb-4 flex items-center cursor-pointer ${isSettingsDropdownOpen ? 'text-blue-500' : '' }`}
            >
              <img
                className="my-5 mr-2"
                src="/images/settings.png"
                alt="Logo"
                width="20"
                height="20"
              />{' '}
              Settings
            
          </Link>
          {isSettingsDropdownOpen && (
            <ul className="ml-4">
              {/* Dropdown content goes here */}
              <li>
                <Link href="" className="font-normal mb-2 flex items-center hover:text-blue-500">
                    Dropdown Item 1
                  
                </Link>
              </li>
              <li>
                <Link href="" className="font-normal mb-2 flex items-center hover:text-blue-500">
                    Dropdown Item 2
                  
                </Link>
              </li>
              {/* Add more dropdown items as needed */}
            </ul>
          )}
        
        </li>
        <li>
          <Link href="" className='border-b-4 border-2 border-[#2D6C56] rounded text-center p-3'>+ Add vehicles
            
          </Link>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar;

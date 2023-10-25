import React, { useState } from 'react';
import "/styles/global.css";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <div className="flex w-full bg-white gap-4 justify-end p-4">
      <div className="flex-grow"></div>
      <div className="relative">
        <button
          className="text-gray-800 hover:text-blue-400"
          onClick={toggleSearchVisibility}
        >
          Search
        </button>
        {isSearchVisible && (
          <div className="absolute top-10 right-0 bg-white p-2 rounded-md shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md px-2 py-1 w-40"
            />
          </div>
        )}
      </div>

      <div className="relative">
        <button
          className="text-gray-800 hover:text-blue-400"
          onClick={() => setNotificationCount(notificationCount + 1)}
        >
          Notification
        </button>
        {notificationCount > 0 && (
          <div className="absolute top-10 right-0 bg-red-500 text-white px-2 rounded-full">
            {notificationCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

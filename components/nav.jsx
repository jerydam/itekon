import React from 'react';
import "/styles/global.css";


const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-end items-center">
      <div className="flex items-center space-x-4">
        <div className="relative ml-4 flex items-center">
          <img src="images/search.png" alt="" className="w-3 h-3 mr-2 absolute" />
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 pr-10 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 mr-10"
            
          />
        </div>
        <div className="flex items-center gap-10">
          <button>
            <img src="images/day.png" alt="" className="w-6 h-6" />
          </button>
          <button>
            <img src="images/bell.png" alt="" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

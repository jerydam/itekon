import React from 'react';
import "/styles/global.css";

const Navbar = () => {
  const handleSearch = () => {
    const searchText = document.querySelector('input[type="text"]').value;
    // Implement search functionality using the searchText value
    console.log(`Searching for: ${searchText}`);
  };

  return (
    <nav className="bg-white p-4 flex justify-end items-center">
      <div className="flex items-center space-x-4">
        <div className="relative ml-4 flex items-center">
          <button className='ml-2 absolute' onClick={handleSearch}><img src="images/search.png" alt="" className="w-3 h-3" /></button>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 pr-10 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 mr-10 placeholder:ml-3"
            style={{ paddingLeft: '30px' }}
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

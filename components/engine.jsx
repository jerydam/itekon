// pages/Dashboard.js

import React, { useState, useEffect } from 'react';

const Engine = () => {
  // State variables to store data
  const [activeEngineCount, setActiveEngineCount] = useState(0);
  const [allDriverCount, setAllDriverCount] = useState(0);
  const [idleEngineCount, setIdleEngineCount] = useState(0);
  const [allEngineCount, setAllEngineCount] = useState(0);
 
  useEffect(() => {
    const userToken = localStorage.getItem('authToken');
    // Fetch data for Active Engine count
    const fetchActiveEngineCount = async () => {
      try {
        const response = await fetch('https://itekton.onrender.com/vehicles/vehicles/', {
          method: 'GET',  // Specify the HTTP method (GET in this case)
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,  // Assuming userToken is defined
          },
        });
        const data = await response.json();
        
        // Assuming each engine object has a 'driver' property
        const activeEngines = data.filter(engine => engine.driver !== null);
        
        setActiveEngineCount(activeEngines.length);
      } catch (error) {
        console.error('Error fetching Active Engine count:', error);
      }
    };

    // Fetch data for All Driver count
    const fetchAllDriverCount = async () => {
      const userToken = localStorage.getItem('authToken');
        try {
          const response = await fetch('https://itekton.onrender.com/vehicles/drivers/', {
            method: 'GET',  // Specify the HTTP method (GET in this case)
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${userToken}`,  // Assuming userToken is defined
            },
          });
          const data = await response.json();
          const driverCount = data.length;
          setAllDriverCount(driverCount);
        } catch (error) {
          console.log('Error fetching All Driver count:', error);
        }
      };
      

    // Fetch data for Idle Engine count   
    const fetchIdleEngineCount = async () => {
      const userToken = localStorage.getItem('authToken');
      try {
        const response = await fetch('https://itekton.onrender.com/vehicles/vehicles/', {
          method: 'GET',  // Specify the HTTP method (GET in this case)
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,  // Assuming userToken is defined
          },
        });
    
        const data = await response.json();
        
        // Assuming each engine object has a 'driver' property
        const idleEngines = data.filter(engine => engine.driver === null);
        
        setIdleEngineCount(idleEngines.length);
      } catch (error) {
        console.error('Error fetching Idle Engine count:', error);
      }
    };
    

    // Fetch data for All Engine count
    const fetchAllEngineCount = async () => {
      const userToken = localStorage.getItem('authToken');
      try {
        const response = await fetch('https://itekton.onrender.com/vehicles/vehicles/', {
          method: 'GET',  // Specify the HTTP method (GET in this case)
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,  // Assuming userToken is defined
          },
        });
        const data = await response.json();
          const engineCount = data.length;
          setAllEngineCount(engineCount);
        } catch (error) {
        console.log('Error fetching All Engine count:', error);
      }
    };

    // Call the fetch functions when the component mounts
    fetchActiveEngineCount();
    fetchAllDriverCount();
    fetchIdleEngineCount();
    fetchAllEngineCount();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div className="flex flex-col lg:flex-row w-full justify-between gap-4 p-5">
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#2D6C56]'>
        <div className="flex px-4">
          <img src='images/Carin.png' alt="Car" />
          <div className="text-center py-5">
            <p>Active Engine</p>
            <p className="text-xl font-bold">{activeEngineCount}</p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#ad3d62]'>
        <div className="flex px-4">
          <img src='images/Car rental.png' alt="Car" />
          <div className="text-center py-5">
            <p>All Driver</p>
            <p className="text-xl font-bold">{allDriverCount}</p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#f8c87f]'>
        <div className="flex px-4">
          <img src='images/car.png' alt="Car" />
          <div className="text-center py-5">
            <p>Idle Engine</p>
            <p className="text-xl font-bold">{idleEngineCount}</p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#52e652]'>
        <div className="flex px-4">
          <img src='images/taxi car.png' alt="Car" />
          <div className="text-center py-5">
            <p>All Engine</p>
            <p className="text-xl font-bold">{allEngineCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engine;

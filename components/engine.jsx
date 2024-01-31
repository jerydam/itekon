import React, { useState, useEffect } from 'react';

const Engine = () => {
  // State variables to store data
  const [activeEngineCount, setActiveEngineCount] = useState(0);
  const [allDriverCount, setAllDriverCount] = useState(0);
  const [idleEngineCount, setIdleEngineCount] = useState(0);
  const [allEngineCount, setAllEngineCount] = useState(0);

  // State variables to track loading status
  const [loadingActiveEngine, setLoadingActiveEngine] = useState(true);
  const [loadingAllDriver, setLoadingAllDriver] = useState(true);
  const [loadingIdleEngine, setLoadingIdleEngine] = useState(true);
  const [loadingAllEngine, setLoadingAllEngine] = useState(true);

  useEffect(() => {
    const userToken = localStorage.getItem('authToken');
    const fleet_id = localStorage.getItem('fleet_id');

    const fetchActiveEngineCount = async () => {
      try {
        const response = await fetch(`https://itekton.onrender.com/fleets/fleet/vehicles/${fleet_id}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,
          },
        });
        const data = await response.json();
        const activeEngines = data.filter(engine => engine.driver !== null);
        setActiveEngineCount(activeEngines.length);
        setLoadingActiveEngine(false); // Set loading status to false after data is fetched
      } catch (error) {
        console.error('Error fetching Active Engine count:', error);
      }
    };

    const fetchAllDriverCount = async () => {
      try {
        const response = await fetch(`https://itekton.onrender.com/vehicles/drivers/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,
          },
        });
        const data = await response.json();
        const driverCount = data.length;
        setAllDriverCount(driverCount);
        setLoadingAllDriver(false);
      } catch (error) {
        console.log('Error fetching All Driver count:', error);
      }
    };

    const fetchIdleEngineCount = async () => {
      try {
        const response = await fetch(`https://itekton.onrender.com/fleets/fleet/vehicles/${fleet_id}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,
          },
        });
        const data = await response.json();
        const idleEngines = data.filter(engine => engine.driver === null);
        setIdleEngineCount(idleEngines.length);
        setLoadingIdleEngine(false);
      } catch (error) {
        console.error('Error fetching Idle Engine count:', error);
      }
    };

    const fetchAllEngineCount = async () => {
      try {
        const response = await fetch(`https://itekton.onrender.com/fleets/fleet/vehicles/${fleet_id}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`,
          },
        });
        const data = await response.json();
        const engineCount = data.length;
        setAllEngineCount(engineCount);
        setLoadingAllEngine(false);
      } catch (error) {
        console.log('Error fetching All Engine count:', error);
      }
    };

    // Call the fetch functions when the component mounts
    fetchActiveEngineCount();
    fetchAllDriverCount();
    fetchIdleEngineCount();
    fetchAllEngineCount();
  }, []); 


  return (
    <div className="flex flex-col lg:flex-row w-full justify-between gap-4 p-5">
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#2D6C56]'>
        <div className="flex px-4">
          <img src='images/Carin.png' alt="Car" />
          <div className="text-center py-5">
            <p>Active Engine</p>
            <p className="text-xl font-bold">
              {loadingActiveEngine ? "Loading ..." : activeEngineCount}
            </p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#ad3d62]'>
        <div className="flex px-4">
          <img src='images/Car rental.png' alt="Car" />
          <div className="text-center py-5">
            <p>All Driver</p>
            <p className="text-xl font-bold">
              {loadingAllDriver ? "Loading ..." : allDriverCount}
            </p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#f8c87f]'>
        <div className="flex px-4">
          <img src='images/car.png' alt="Car" />
          <div className="text-center py-5">
            <p>Idle Engine</p>
            <p className="text-xl font-bold">
              {loadingIdleEngine ? "Loading ..." : idleEngineCount}
            </p>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/4 border-2 h-32 lg:h-auto border-b-4 hover:border-[#52e652]'>
        <div className="flex px-4">
          <img src='images/taxi car.png' alt="Car" />
          <div className="text-center py-5">
            <p>All Engine</p>
            <p className="text-xl font-bold">
              {loadingAllEngine ? "Loading ..." : allEngineCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engine;

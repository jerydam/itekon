import React, { useEffect, useState } from 'react';
import '/styles/global.css'; 

const Driver = () => {
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://your-backend-api.com/driver', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers you need, such as authorization headers
          },
        });

        if (response.ok) {
          const data = await response.json();
          setDriver(data);
        } else {
          console.error('Failed to fetch driver details:', await response.text());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div  className=' flex flex-col px-5 w-full h-full gap-3'>
      <div className='flex justify-between'>
        <div className='font-bold'>Driver Details</div>
        <a href='' className='justify-end text-[#2D6C56]'>
          Edit Details
        </a>
      </div>
      <p className='my-5  text-white'>Name: {driver?.name}</p>
      <p className='my-5 '>License ID: {driver?.id}</p>
      <p className='my-5 '>Connected Device: {driver?.device}</p>
      <p className='my-5 '>Email Address: {driver?.email}</p>
      <p className='my-5 '>Social Media: {driver?.media}</p>

          <button className='border-b-4 border-2 border-[#2D6C56] rounded text-center p-3'>
            Call Driver
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Driver;

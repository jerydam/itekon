// Import the necessary dependencies and components at the beginning of your file
import React, { useEffect, useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import PopCri from '@/components/popups/critical'; // Adjust the import path accordingly

const Critical = (onCancel) => {
  const [ShowCri, setCri] = useState(false);
  const [loadingCriticalFault, setLoadingCriticalFault] = useState(true);
  const [overDue, setOverDue] = useState(0);
  const [dueSoon, setDueSoon] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const fetchCriticalFaults = async () => {
      try {
        const userToken = localStorage.getItem('authToken');

        const response = await fetch('https://itekton.onrender.com/reports/get-critical-fault/', {
          method: 'GET',
          headers: {
            Authorization: `Token ${userToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setOverDue(data.overDue);
          setDueSoon(data.dueSoon);
          setCompleted(data.completed);
        } else {
          console.error('Error fetching critical faults data:', await response.text());
        }
      } catch (error) {
        console.error('Error fetching critical faults data:', error);
      } finally {
        setLoadingCriticalFault(false);
      }
    };

    fetchCriticalFaults();
  }, []);

  const handleAdd = (input) => {
    // Handle adding critical fault logic here
    console.log('Adding Critical Fault:', input);
    setCri(false); // Hide the PopCri component after adding the critical fault
  };

  const handleCancel = () => {
    setCri(false); // Hide the PopCri component when canceled
  };

  return (
    <div className="w-full lg:w-1/2 border-2 h-full rounded">
      <div className='flex justify-between align-middle items-center'>
        <p className="m-5  text-lg font-sans font-medium w-full">Critical Fault</p>
        <button onClick={() => setCri(true)} className="flex justify-end items-center m-5  w-full">
          <TiPlus className="h-5 w-5 text-[#2D6C56]" /> Add Reminder
        </button>
        {ShowCri && <PopCri onAdd={handleAdd} onCancel={handleCancel} />}
      </div>
      {loadingCriticalFault ? (
        <p className='ml-5 mt-3'>Fetching Critical Fault data...</p>
      ) : (
        <>
          {overDue > 0 || dueSoon > 0 || completed > 0 ? (
            <div className='flex justify-between border-2 mx-5 py-3 rounded px-5'>
              <div className="text-center">
                <p>Over Due</p>
                <p>{overDue}</p>
              </div>
              <div className="text-center">
                <p>Due Soon</p>
                <p>{dueSoon}</p>
              </div>
              <div className="text-center">
                <p>Completed</p>
                <p>{completed}</p>
              </div>
            </div>
          ) : (
            <p className='ml-5 mt-3'>There are no logged critical faults at the moment</p>
          )}
        </>
      )}
    </div>
  );
};

export default Critical;

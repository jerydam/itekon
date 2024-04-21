// Renewal.js
import React, { useState, useEffect } from 'react';
import { TiPlus } from 'react-icons/ti';
import PopRenew from '@/components/popups/renew'; // Adjust the import path accordingly

const Renewal = () => {
  const [showRenewal, setRenewal] = useState(false);
  const [overDue, setOverDue] = useState(0);
  const [dueSoon, setDueSoon] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [loading, setLoading] = useState(true);

  // Function to check if a date has passed
function isDatePassed(targetDate) {
    const currentDate = new Date();
    const targetDateObj = new Date(targetDate);
    return targetDateObj < currentDate;
  }
  
  // ...
  
  const handleAdd = async () => {
    try {
      const userToken = localStorage.getItem('authToken');
      const fleet_id = localStorage.getItem('fleet_id');
  
      // Format expiration date to ISO 8601 format
      const formattedExpirationDate = new Date(expirationDate).toISOString();
  
      // Check if the expiration date has passed
      if (isDatePassed(formattedExpirationDate)) {
        toast.error('Expiration date has already passed. Please choose a future date.');
        return;
      }
  
      const response = await fetch(`https://itekton-wden.onrender.com/reports/registrations/${fleet_id}/`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${userToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: inputValue,
          expiration_date: formattedExpirationDate,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success('Successfully added a renewal reminder');
        onAdd(data);
        setInputValue('');
        setExpirationDate('');
      } else {
        console.error('Error adding renewal reminder:', data.error);
        toast.error('Failed to add renewal reminder');
      }
    } catch (error) {
      console.error('Error adding renewal reminder:', error);
      toast.error('Failed to add renewal reminder');
    }
  };
  

  const handleCancel = () => {
    setRenewal(false); // Close the renewal popup on cancel
  };

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const userToken = localStorage.getItem('authToken');
        const fleet_id = localStorage.getItem('fleet_id');

        const response = await fetch(`https://itekton-wden.onrender.com/reports/registrations/${fleet_id}/`, {
          method: 'GET',
          headers: {
            Authorization: `Token ${userToken}`, // Include the authentication token in the headers
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Update state with data from the backend
          setOverDue(data.overDue);
          setDueSoon(data.dueSoon);
          setCompleted(data.completed);
        } else {
          console.error('Error fetching registration renewal data:', await response.text());
        }
      } catch (error) {
        console.error('Error fetching registration renewal data:', error);
      } finally {
        // Set loading to false after fetching data
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to run the effect once on component mount

  return (
    <div className="w-full lg:w-1/2 border-2 h-full rounded z-50">
      <div className="flex justify-between align-middle items-center">
        <p className="m-5 text-lg font-sans font-medium w-full">Registration Renewal Reminder</p>
        <button onClick={() => setRenewal(true)} className="flex justify-end items-center my-5 w-fit">
          <TiPlus className="h-5 w-5 text-[#2D6C56]" /> Add Reminder
        </button>
        {showRenewal && <PopRenew onAdd={handleAdd} onCancel={handleCancel} />}
      </div>
      {loading ? (
        <p className="ml-5 mt-3">Loading renewal reminder data...</p>
      ) : (
        <div className="flex justify-between border-2 mx-5 py-3 rounded px-5">
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
      )}
      {!loading && overDue === 0 && dueSoon === 0 && completed === 0 && (
        <p className="ml-5 mt-3">You have no registration renewal reminder at the moment.</p>
      )}
    </div>
  );
};

export default Renewal;

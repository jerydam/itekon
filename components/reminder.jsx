// Reminder.js
import React, { useState, useEffect } from 'react';
import { TiPlus } from 'react-icons/ti';
import PopRem from './popups/reminder'; // Assuming you have the PopRem component in the same directory

const Reminder = () => {
  const [showReminder, setReminder] = useState(false);
  const [overDue, setOverDue] = useState(0);
  const [dueSoon, setDueSoon] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleAdd = () => {
    // Implement the logic for adding a reminder
    // ...
    setReminder(false); // Close the reminder popup after adding a reminder
  };

  const handleCancel = () => {
    setReminder(false); // Close the reminder popup on cancel
  };

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch(`https://itekton.onrender.com/reports/reminders/${fleet_id}/`);
        const data = await response.json();

        if (response.ok) {
          // Update state with data from the backend
          setOverDue(data.overDue);
          setDueSoon(data.dueSoon);
          setCompleted(data.completed);
        } else {
          console.error('Error fetching maintenance reminders:', data.error);
        }
      } catch (error) {
        console.error('Error fetching maintenance reminders:', error);
      } finally {
        // Set loading to false after fetching data
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to run the effect once on component mount

  return (
    <div className="w-full lg:w-1/2 border-2 h-full rounded">
      <div className="flex justify-between align-middle items-center">
        <p className="m-5 text-lg font-sans font-medium w-full">Vehicle Maintenance Reminder</p>
        <button onClick={() => setReminder(true)} className="flex justify-end items-center my-5 w-fit">
          <TiPlus className="h-5 w-5 text-[#2D6C56]" /> Add Reminder
        </button>
        {showReminder && <PopRem onAdd={handleAdd} onCancel={handleCancel} />}
      </div>
      {loading ? (
        <p className="ml-5 mt-3">Loading maintenance reminders...</p>
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
        <p className="ml-5 mt-3">You have no maintenance reminder at the moment.</p>
      )}
    </div>
  );
};

export default Reminder;

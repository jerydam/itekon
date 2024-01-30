import React, { useEffect, useState } from 'react';
import PopAlert from './popups/alert';
import { TiPlus } from 'react-icons/ti';

const Alert = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAlert, setAlert] = useState(false);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        // Fetch data from the backend (replace with your actual endpoint)
        const userToken = localStorage.getItem('authToken'); // Make sure userToken is defined
        const response = await fetch('https://itekton.onrender.com/reports/alerts/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${userToken}`,
          },
        });
        const data = await response.json();

        // Update state based on fetched data
        if (response.ok && Array.isArray(data)) {
          setAlerts(data);
        } else {
          console.error('Error fetching alerts:', data?.error || 'Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching alerts:', error.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch alerts when the component mounts
    fetchAlerts();
  }, []);

  const handleAdd = (newAlertData) => {
    setAlerts((prevAlerts) => [...prevAlerts, newAlertData]);
    setAlert(false);
  };

  const handleCancel = () => {
    setAlert(false);
  };

  return (
    <div className="w-full lg:w-1/2 border-2 h-96 rounded overflow-y-auto">
      <div className="flex justify-between">
        <p className="m-5 text-lg font-sans font-medium w-full">Alert</p>
        <button onClick={() => setAlert(true)} className="flex justify-end items-center m-5 w-full">
          <TiPlus className="h-5 w-5 text-[#2D6C56]" /> Add Alert
        </button>
        {showAlert && <PopAlert onAdd={handleAdd} onCancel={handleCancel} />}
      </div>
      {loading ? (
        <p className="p-4">Loading alerts...</p>
      ) : alerts.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {alerts.map((alert) => (
            <li key={alert.id} className="p-4">
              <div className="flex justify-between">
                <p className="font-semibold">Car ID: {alert.id}</p>
                <p>Date Reported: {alert.dateReported}</p>
              </div>
              <p>Reported By: {alert.reporter}</p>
              <p>Issue: {alert.issue}</p>
              <p>Part to Repair: {alert.partToRepair}</p>
              <p>Charge for Repair: {alert.chargeForRepair}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="p-4">You have no alerts at the moment</p>
      )}
    </div>
  );
};

export default Alert;

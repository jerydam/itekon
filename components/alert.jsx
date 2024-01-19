import React, { useEffect, useState } from 'react';
import PopAlert from './popups/alert';
import { TiPlus } from 'react-icons/ti';

const Alert = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAlert, setAlert] = useState(false);

  useEffect(() => {
    // Your authorization token
    const authToken = localStorage.getItem('authToken');
  
    // Make an API call to fetch alerts data
    fetch('https://itekton.onrender.com/reports/alerts/', {
      method: 'GET', // GET method
      headers: {
        'Authorization': `Token ${authToken}`, // Include the authorization header
        'Content-Type': 'application/json', // Specify the content type if needed
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAlerts(data);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.error('Error fetching data from the backend:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);
  
  const handleAdd = () => {
   
    setAlerts((prevAlerts) => [...prevAlerts, newAlertData]);
  
    setAlert(false); 
  };
  
  const handleCancel = () => {
    setAlert(false); 
  };  
  

  return (
    <div className="w-full lg:w-1/2 border-2 h-60 rounded">
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
                <p className="font-semibold">Car ID: {alert.carId}</p>
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

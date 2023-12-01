// AlertsPage.js
import React, { useEffect, useState } from 'react';

const Alert = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Assume you fetch alerts from an API endpoint
    // You may want to replace this with your actual API call
    const fetchAlerts = async () => {
      try {
        const response = await fetch('https://itekton.onrender.com/reports/alerts/');
        const data = await response.json();
        setAlerts(data);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };

    // Fetch alerts when the component mounts
    fetchAlerts();
  }, []);

  return (
    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
      {alerts.length > 0 ? (
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

import React, { useState, useEffect } from 'react';
import { TiPlus } from 'react-icons/ti';
import Popup from './popups/popup';

const TransitReports = () => {
  const [transitReports, setTransitReports] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleAdd = () => {
    // Implement the logic for adding a report
    // ...
    setShowPopup(false); // Close the popup after adding a report
  };

  const handleCancel = () => {
    setShowPopup(false); // Close the popup on cancel
  };

  useEffect(() => {
    
    const fetchTransitReports = async () => {
      try {
        const response = await fetch(`https://itekton-wden.onrender.com/reports/transit-reports/${vehicle_id}/`);
        const data = await response.json();

        if (response.ok) {
          setTransitReports(data);
        } else {
          console.error('Error fetching transit reports:', data.error);
        }
      } catch (error) {
        console.error('Error fetching transit reports:', error);
      }
    };

    fetchTransitReports();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="w-full lg:w-1/2 border-2 h-60 rounded">
      <div className="flex justify-between">
        <p className="m-5 text-lg font-sans font-medium w-full">Transit Reports</p>
        <button onClick={() => setShowPopup(true)} className="flex justify-end items-center m-5 w-full">
          <TiPlus className="h-5 w-5 text-[#2D6C56]" /> Add Report
        </button>
        {showPopup && <Popup onAdd={handleAdd} onCancel={handleCancel} />}
      </div>

      {transitReports.length === 0 ? (
        <p className="ml-5">You have no report at the moment</p>
      ) : (
        <ul className="ml-5">
          {transitReports.map((report) => (
            <li key={report.id}>
              {/* Display report details here */}
              <p>{report.title}</p>
              <p>{report.vehicle}</p>
              <p>{report.date}</p>
              <p>{report.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransitReports;

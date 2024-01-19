// TestReports.js
import React, { useState, useEffect } from 'react';
import { TiPlus } from 'react-icons/ti';
import PopTest from './popups/test';

const TestReports = () => {
  const [showTest, setTest] = useState(false);
  const [testedCars, setTestedCars] = useState(0);
  const [readyCars, setReadyCars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const vehicle_id = JSON.parse(localStorage.getItem('vehicle_id')) || [];
  
    const authToken = localStorage.getItem('authToken'); // Replace with your actual authorization token
  
    // Set initial loading state
    setLoading(true);
  
    fetch(`https://itekton.onrender.com/reports/tests/${vehicle_id}/`, {
      headers: {
        'Authorization': `Token ${authToken}`, // Include the authorization token
        'Content-Type': 'application/json', // Adjust content type if needed
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Update state with the fetched data
        setTestedCars(data.testedCars);
        setReadyCars(data.readyCars);
        // Set loading to false after data is fetched
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data from the backend:', error);
        // Set loading to false in case of an error
        setLoading(false);
      });
  }, []);

  const handleAdd = () => {
   
    setTestedCars((prevValue) => prevValue + 1);
    setReadyCars((prevValue) => prevValue + 1);

    setTest(false); // Close the PopTest component after adding a test
  };

  const handleCancel = () => {
    setTest(false); // Close the PopTest component on cancel
  };

  return (
    <div className="w-full lg:w-1/2 border-2 h-60 rounded">
      <div className="flex justify-between">
        <p className="m-5 text-lg font-sans font-medium w-full">Tests .</p>
        <button onClick={() => setTest(true)} className="flex justify-end items-center m-5 w-full">
          <TiPlus className="h-5 w-5 text-[#2D6C56]" /> Add Test
        </button>
        {showTest && <PopTest onAdd={handleAdd} onCancel={handleCancel} />}
      </div>
      {loading ? (
        <p className="ml-5 mt-3">Loading...</p>
      ) : (
        <>
          {testedCars > 0 || readyCars > 0 ? (
            <div className="flex justify-between border-2 mx-5 py-3 rounded px-5">
              <div className="text-center">
                <p>Tested Cars</p>
                <p>{testedCars}</p>
              </div>
              <div className="text-center">
                <p>Ready Cars</p>
                <p>{readyCars}</p>
              </div>
            </div>
          ) : (
            <p className="ml-5 mt-3">You have not carried out any test yet.</p>
          )}
        </>
      )}
    </div>
  );
};

export default TestReports;

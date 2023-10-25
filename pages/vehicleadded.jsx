import React from 'react';

const VehiclePage = () => {
  const handleShowVehicleList = () => {
    // Implement logic to show vehicle list
    console.log('Show Vehicle List');
  };

  const handleAddVehicle = () => {
    // Implement logic to add more vehicles
    console.log('Add Vehicle');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-green-500 w-24 h-24 flex items-center justify-center rounded-full text-white text-2xl">
        &#10003;
      </div>
      <button
        onClick={handleShowVehicleList}
        className="bg-blue-500 text-white font-semibold px-4 py-2 mt-4 rounded"
      >
        Show Vehicle List
      </button>
      <button
        onClick={handleAddVehicle}
        className="bg-blue-500 text-white font-semibold px-4 py-2 mt-4 rounded"
      >
        Add Vehicle
      </button>
    </div>
  );
};

export default VehiclePage;

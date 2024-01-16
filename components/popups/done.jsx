import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Added = ({onCancel, currentPage, onAdd}) => {

  const handleAddVehicle = () => {
    // Implement logic to add more vehicles
    console.log('Add Vehicle');
  };
  const handleCancel = () => {
    // Implement cancel logic here
    console.log('Cancelled');
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-md">
      <div className='flex justify-between  mb-4'>
      <p className="text-2xl font-bold mb-4">Complete Your Profile</p>
      <button onClick={onCancel}>
            <
FaTimes className="h-5 w-5 text-[#2D6C56]" />
          </button>
          </div>
    
    <div className="flex flex-col items-center justify-center px-20 h-full w-full">
    <div className="bg-[#2D6C56] w-56 h-56 flex items-center justify-center rounded-full text-white text-2xl">
        &#10003;
      </div>
      <div className='flex text-center mt-5'>
      <p>You have completed your profile. You can now <br />
        proceed to add vehicles to your fleet.</p>
      </div>
      <button
        // onClick={handleAddVehicle}
        
        className="text-[#2D6C56]  border-[#2D6C56] border-b-4 border-2 font-semibold px-4 py-2 mt-4 rounded"
      >
        <a href="/fleet/add-vehicle">+ Add more Vehicle</a>
       
      </button>
   
    </div>
    <div className="flex justify-center mt-3 space-x-2">
          {[1, 2, 3, 4, 5].map((index) => (
         <div
          key={index}
           className={`h-4 w-4 rounded-full ${
           currentPage === index ? 'bg-[#2D6C56]' : 'bg-[#D9D9D9]'
           }`}
          ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Added
// import React, { useState } from 'react';
// import { driver } from '@/index';
// import '/styles/global.css';
// import Sidebar from '@/components/sidebar';
// import Navbar from '@/components/nav';
// import { mockCars } from '@/index';

// const DriverList = ({ onAdd }) => {
  

//   return (
//     <div className='flex relative'>
//       <Sidebar />
//       <div className='w-full'>
//         <Navbar />
//         <div className="m-5 my-4">
//             <div className='flex'>
//                 <div className='w-full'>
//         <p className='m-5'> Drivers</p>
//                     <p className='m-5'>You can edit drivers’ details, assigned vehicles to driver and remove a driver here.</p>
//                     </div>
                            
//                     <button onClick={() => setShowDrive(true)} className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold w-64 h-full p-4 rounded">+ Add New Driver</button>
//                     </div>
//                     {showDrive && <AddDriver onDrive={handleDrive} onCancel={handleClear} />}
//           <table className="table-auto w-full">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">ID</th>
//                 <th className="px-4 py-2">Vehicle ID</th>
//                 <th className="px-4 py-2">License ID</th>
//                 <th className="px-4 py-2">Assigned Location</th>
//                 <th className="px-4 py-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {mockCars.map((item) => (
//                 <tr key={item.id}>
//                   <td className="border px-4 py-2">{item.id}</td>
//                   <td className="border px-4 py-2 flex items-center">
                    
//                     <div>
//                       <div>{item.carName}</div>
//                       <div className="text-sm text-gray-500">{item.iD}</div>
//                     </div>
//                   </td>
//                   <td className="border px-4 font-semibold py-2">{item.carId}</td>
//                   <td className="border px-4 font-semibold py-2">{item.phoneNumber}</td>
//                   <td className="border font-semibold px-4 py-2">
//                     <button
//                       onClick={() => onAssignVehicle(item.id)}
//                       className="border-b-[#2D6C56] border-b-4 border-[#2D6C56] border-2 text-[#2D6C56] font-bold py-2 mx-2 px-4 rounded"
//                     >
//                       Assign Vehicle
//                     </button>
                    
//                     <button onClick={() => setShowEdit(true)} className=" text-[#2D6C56] font-bold py-2 px-4 rounded mx-2">
//            Edit Profile
//         </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriverList;


import React from 'react'

const assign = () => {
  return (
    <div>assign</div>
  )
}

export default assign

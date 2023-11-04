import { useState,useEffect } from 'react';
import '/styles/global.css'; 
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/nav';
import { useRouter } from 'next/router';


const AssignLocation = () => {
  const router = useRouter();
    
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Replace '/login' with the appropriate login page URL
    }
  }, [router]);

  const [address, setAddress] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleGetAddress = () => {
    // Implement logic to get the address on the map
    // Update the selected address
    setSelectedAddress(address);
  };

  const handleAddAddress = () => {
    // Implement logic to add the address
    console.log('Address added:', selectedAddress);
  };

  return (
    <div className='flex'>

    <Sidebar/>
    <div className="h-full">
    <Navbar/>
            <p className='m-5'>Vehicles {'>'} Assign Location</p>
                    <p className='m-5'>Enter the address of the location you want to assign your vehicles to.</p>
    <div className="p-5 m-5 h-full border-2 rounded">
      <div className="mb-4">
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          
          className="w-full p-2 rounded border bg-[#e7e6db] mt-2 border-[#2D6C56]"
        />
        <button
          onClick={handleGetAddress}
          className=" border-2 border-b-4 bg-[#e7e6db] border-[#2D6C56]  text-[#2D6C56] py-2 px-4 rounded  mt-5"
        >
          Pick Location
        </button>
      </div>
      <div className="mb-4">
       
        <button
          onClick={handleAddAddress}
          className="bg-[#2D6C56] border-b-4 text-[#e7e6db] py-2 px-4 rounded"
        >
          <a href="/vehicleDetails/map">+ Add Address</a>
        </button>
      </div>
      </div>
    </div>
   </div> 
  );
};

export default AssignLocation;

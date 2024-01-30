'use client'
import Navbar from '@/components/nav';
import EditDetails from '@/components/popups/editCompany';
import Sidebar from '@/components/sidebar';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SettingsPage = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    fleetCompanyName: '',
    companyRegNumber: '',
    email: '',
    numVehicles: 0,
    numDrivers: 0,
    companyAddress: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const [preference, setPreference] = useState({
    notification: false,
    reminder: false,
    billing: false,
    vehicleStatus: false,
    generalUpdate: false,
    vehicleTracking: false,
    theme: false,
  });
  const handleAdd = (input) => {
    // Add your logic for handling the input here
    console.log('Adding:', input);
    // You can add your custom logic here for adding the value to your list or state
    setShowPopup(false); // Hide the popup after adding the value
  }
  const handleCancel = () => {
    setShowPopup(false); // Hide the popup when canceled
  };  
  useEffect(() => {
    // Fetch user details from the backend
    fetchUserDetails(); // Replace with your actual fetch function
  }, []);

  const fetchUserDetails = async () => {
    try {
      // Replace with your actual endpoint
      const response = await fetch('https://example.com/user/details');
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  const handleDelete = async () => {
    try {
      // Get the user ID from localStorage or any other source
      const userId = localStorage.getItem('userId');
  
      // Make a DELETE request to the server
      const response = await fetch(`https://itekton.onrender.com/accounts/users/${userId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('authToken')}`,
        },
      });
  
      // Check the response status
      if (response.status === 204) {
        // User successfully deleted
        toast.success('User deleted successfully');
        window.href.location = './login'
        // Implement any additional logic or redirect as needed
      } else {
        // Handle other response statuses (e.g., error)
        const data = await response.json();
        toast.error(data.error || 'Failed to delete user');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error deleting user:', error);
      toast.error('Error deleting user');
    }
  };
  

  const handleNotificationToggle = () => {
    setPreference((prev) => ({
      ...prev,
      notification: !prev.notification,
    }));
  };

  
  useEffect(() => {
    // Fetch user details from the backend
    fetchUserDetails(); // Replace with your actual fetch function

    // Fetch user preferences from local storage
    const storedPreferences = sessionStorage.getItem('userPreferences');
    if (storedPreferences) {
      setPreference(JSON.parse(storedPreferences));
    }
  }, []);

  const handleCheckboxChange = (key) => {
    setPreference((prev) => {
      const updatedPreferences = { ...prev, [key]: !prev[key] };
      // Save updated preferences to local storage
      sessionStorage.setItem('userPreferences', JSON.stringify(updatedPreferences));
      return updatedPreferences;
    });
  };
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="w-full">
      <Navbar/>
      <p className='m-5'>Setting {'>'} Account</p>
    <div className="p-4 flex justify-between gap-4  ">
    <div className='h-full  w-1/2'>
      <div className=" mb-4 border-2 rounded h-full p-5 ">
        <div className='justify-between flex w-full'>
        <p className="text-2xl font-semibold">Profile</p>
        <button className='text-[#2D6C56]' onClick={setShowPopup}>Edit profile</button>
        </div>
        {showPopup && <EditDetails onAdd={handleAdd} onCancel={handleCancel} />}
        <p className='my-3'>Full Name: {userDetails.fullName}</p>
        <p className='my-3'>Fleet Company Name: {userDetails.fleetCompanyName}</p>
        <p className='my-3'>Company Registration Number: {userDetails.companyRegNumber}</p>
        <p className='my-3'>Company Registration Number: {userDetails.companyRegNumber}</p>
        <p className='my-3'>Email: {userDetails.email}</p>
        <p className='my-3'>Number of Vehicles: {userDetails.numVehicles}</p>
        <p className='my-3'>Number of Drivers: {userDetails.numDrivers}</p>
        <p className='my-3'>Company Address: {userDetails.companyAddress}</p>
      </div>
      
      <div className="border-2 rounded h-full p-5">
        <p className="text-2xl font-semibold">Notifications</p>
        <p className='text-sm my-5'>You do not have any notification at the moment.</p>
      </div>
      <button
    className="border-b-4 border-2 bg-[#cecf9e] text-[#eb4157] font-bold mt-10 py-2 px-4 rounded focus:outline-none focus:shadow-outline"><a href="/login
  ">Logout</a></button>

      </div>
      <div  className=" border-2 rounded h-full p-5 w-1/2">
        <p className="text-2xl font-semibold">Preferences</p>
        <label className="block mt-5 mb-3 ">
          Notification 
          <input
            type="checkbox"
            checked={preference.notification}
            onChange={() => handleCheckboxChange('notification')}
            className='ml-2 '
          />
          <br />
          <small>You will not receive notifications when turned off</small>
        </label>
        <p>Check the boxes blow to modify notifications</p>
        <label className="block my-5">
        Reminder
          <input
            type="checkbox"
            checked={preference.reminder}
            onChange={() => handleCheckboxChange('reminder')}
            className="ml-2"
          />
         
        </label>
        <label className="block border-t-2 p-5">
        Billing
          <input
            type="checkbox"
            checked={preference.billing}
            onChange={() => handleCheckboxChange('billing')}
            className="ml-2"
          />
        
        </label>
        <label className="block   p-5 border-y-2">
        Vehicle Status
          <input
            type="checkbox"
            checked={preference.vehicleStatus}
            onChange={() => handleCheckboxChange('vehicleStatus')}
            className="ml-2"
          />
          
        </label>
        <label className="block  p-5 border-b-2">
        General Update
          <input
            type="checkbox"
            checked={preference.generalUpdate}
            onChange={() => handleCheckboxChange('generalUpdate')}
            className="ml-2"
          />
          
        </label>
        <label className="block p-5   border-b-2">
        Vehicle Tracking
          <input
            type="checkbox"
            checked={preference.vehicleTracking}
            onChange={() => handleCheckboxChange('vehicleTracking')}
            className="ml-2"
          />
          
        </label>
        <label className="  p-5 flex border-b-2">
        Theme:
         <img src="images/day.png" alt=""className="w-6 h-6 ml-2" />
          
        </label>
        <div className='text-red-800 p-5 font-bold'>
          <button onClick={handleDelete}>Delete Account</button>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SettingsPage;

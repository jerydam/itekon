'use client'
import { useState ,useEffect} from 'react';
import Sidebar from "@/components/sidebar"
import "/styles/global.css";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const Add = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [vehicleMeter, setVehicleMeter] = useState('');
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [email, setEmail] = useState('');
  const [license, setLicense] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [carLogo, setCarLogo] = useState(null);

 
  const handleUserImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserImage(URL.createObjectURL(file));
    }
  };

  const handleCarLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCarLogo(URL.createObjectURL(file));
    }
  };

  const clearUserImage = () => {
    setUserImage(null);
  };

  const clearCarLogo = () => {
    setCarLogo(null);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a FormData object to handle file uploads
    const formData = new FormData();
    const userToken = sessionStorage.getItem('authToken');
    console.log('User Token:', userToken);

    // Append data to the FormData object
    formData.append('vehicleName', vehicleName);
    formData.append('vehicleMake', vehicleMake);
    formData.append('vehicleModel', vehicleModel);
    formData.append('identificationNumber', identificationNumber);
    formData.append('fuelType', fuelType);
    formData.append('color', color);
    formData.append('carLogo', carLogo);
    formData.append('userImage', userImage);
    formData.append('name', name);
    formData.append('license', license);
    formData.append('number', number);
    formData.append('email', email);
  
    try {
      // Make a POST request to your backend endpoint
      const response = await fetch('https://itekton.onrender.com/vehicles/vehicles/', {
        method: 'POST',
        headers: {
          Authorization: `Token ${userToken}`,
        },
        body: formData,
      });
        const responseData = await response.json();

      if (response.ok) {
        const data = await responseData.data
        console.log('Vehicle added successfully');
        toast.success(data)
        // Redirect or show success message as needed
      } else {
        console.log('Error adding vehicle:', await response.text());
        toast.success(data)
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle unexpected errors
    }
  };
  
  return (
   
    <div className='flex'>
      <Sidebar/>
     <div className='ml-5'>
    <p className='font-sans mt-20 font-normal'>Add vehicle</p>
    <p className='font-sans my-5 text-[#6A6A6A] font-normal'>This is a form to add a new vehicle to your fleet</p>
    
    <div className='flex'>
          <form onSubmit={handleSubmit} className='mr-10'>
          <div className='flex items-center gap-1 mb-5'>
          <div className='h-8 w-8 p-2 border-2 border-[#131313] flex items-center justify-center rounded-full text-black'>1</div>
          <p className='font-sans font-normal'>Vehicle Registration Details</p>
          </div>

            <div className='border-2 rounded-md p-5'>
        <div className="mb-4">
            <label htmlFor="vehicleName" className="text-sm font-medium">Vehicle Name</label><br/>
            <input
              type="text"
              id="vehicleName"
              name="vehicleName"
              value={vehicleName}
              onChange={(e) => setVehicleName(e.target.value)}
              required
              className="bg-[#F5F4E9] rounded-sm px-2 py-1 w-[400px]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="identificationNumber" className="text-sm font-medium">Identification Number</label><br/>
            <input
              type="text"
              id="identificationNumber"
              name="identificationNumber"
              value={identificationNumber}
              onChange={(e) => setIdentificationNumber(e.target.value)}
              required
              className="bg-[#F5F4E9] rounded px-2 py-1 w-[400px]"
            />
          </div>

                   <div className="mb-4">
            <label htmlFor="vehicleModel" className="text-sm font-medium">Model</label><br/>
            <input
              type="text"
              id="vehicleModel"
              name="vehicleModel"
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
              required
              className="bg-[#F5F4E9] rounded px-2 py-1 w-[400px]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="vehicleMake" className="text-sm font-medium">Make</label><br/>
            <input
              type="text"
              id="vehicleMake"
              name="vehicleMake"
              value={vehicleMake}
              onChange={(e) => setVehicleMake(e.target.value)}
              required
              className="bg-[#F5F4E9] rounded px-2 py-1 w-[400px]"
            />
          </div>
      
          <div className="mb-4">
            <label htmlFor="vehicleMeter" className="text-sm font-medium">Meter</label><br/>
            <input
              type="text"
              id="vehiclemeter"
              name="vehiclemeter"
              value={vehicleMeter}
              onChange={(e) => setVehicleMeter(e.target.value)}
              required
              className="bg-[#F5F4E9] rounded px-2 py-1 w-[400px]"
            />
          </div>
 
         
          <div className="mb-4">
            <label htmlFor="color" className="text-sm font-medium">Fuel Type</label><br />
            <input
             type="text"
          id="fuelType"
          name="fuelType"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          required
          className="bg-[#F5F4E9] rounded px-2 py-1 w-[400px]"
          />
        </div>
          <div className="mb-4">
            <label htmlFor="color" className="text-sm font-medium">Color</label><br />
            <input
              type="text"
              id="color"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
              className="bg-[#F5F4E9] rounded px-2 py-1 w-[400px]"
            />
          </div>   
          </div>   
        </form>

        <form onSubmit={handleSubmit} >
        <div className='flex items-center gap-1 mb-5'>
          <div className='h-8 w-8 p-2 border-2 border-[#131313] flex items-center justify-center rounded-full text-black'>2</div>
          <p className='font-sans font-normal'>Operator/Driver’s Details</p>
          </div>
            <div className='border-2 rounded-md p-5'>
        <div className="mb-4">
            <label htmlFor="vehicleName" className="text-sm font-medium">Name</label><br/>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-[#F5F4E9] rounded-sm px-2 py-1 w-[400px]"
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="vehicleModel" className="text-sm font-medium">License Number</label><br/>
            <input
              type="text"
              id="license"
              name="license"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              required
              className="bg-[#F5F4E9] rounded px-2 py-1 w-[400px]"
            />
          </div>

          <div className="mb-4">
  <label htmlFor="identificationNumber" className="text-sm font-medium">Phone Number</label><br/>
  <input
    type="number"
    id="number"
    name="number"
    value={num}
    onChange={(e) => setNum(e.target.value)}
    required
    className="bg-[#F5F4E9] rounded px-2 py-1 w-[400px]"
  />
</div>

         
          <div className="mb-4">
            <label htmlFor="color" className="text-sm font-medium">Email</label><br />
            <input
             type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[#F5F4E9] rounded px-2 py-1 w-[400px]"
          />
        </div>
            
          </div> 
          <div className='flex items-center gap-1 my-5'>
          <div className='h-8 w-8 p-2 border-2 border-[#131313] flex items-center justify-center rounded-full text-black'>4</div>
          <p className='font-sans font-normal'>Upload Driver’s Image</p>
          </div>  
          <div className='border-2 mt-3 rounded'> 
          <p className='m-3'>Upload Image of Driver/Operator</p>
        <div className="relative m-3 w-40 h-40 rounded-full border-dotted border-2 border-[#6A6A6A] overflow-hidden">
          <label htmlFor="userImage" className="cursor-pointer block">
            {userImage ? (
              <img
                src={userImage}
                alt="User"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-96 h-96  flex items-center justify-center">
                <span className="text-gray-400">User Image</span>
              </div>
            )}
            <input
              type="file"
              id="userImage"
              name="userImage"
              className="hidden"
              onChange={handleUserImageChange}
            />
          </label>
          {userImage && (
            <button
              className="absolute top-2 right-2 p-1 bg-white rounded-full"
              onClick={clearUserImage}
            >
              X
            </button>
          )}
        </div>
            </div>
        </form>

        </div>

        <div className='flex items-center gap-1 mb-5'>
          <div className='h-8 w-8 p-2 border-2 border-[#131313] flex items-center justify-center rounded-full text-black'>3</div>
          <p className='font-sans font-normal'>Upload Vehicle Image</p>
          </div>      
        <div className='border-2 rounded my-5'> 
        <p className='m-3'>Upload Image of Vehicle</p>
        <div className="relative w-40  h-40 rounded m-3 border-dotted border-2 border-[#6A6A6A] overflow-hidden">
  <label htmlFor="CarLogo" className="cursor-pointer block">
    {carLogo ? (
      <img
        src={carLogo}
        alt="Company Logo"
        className="object-cover w-full h-full"
      />
    ) : (
      <div className="w-96 h-96  flex items-center justify-center">
        
      </div>
    )}
    <input
      type="file"
      id="CarLogo"
      name="CarLogo"
      className="hidden"
      onChange={handleCarLogoChange}
    />
  </label>
  {carLogo && (
    <button
      className="absolute top-5 right-5 p-1 bg-white rounded-full"
      onClick={clearCarLogo}
    >
      X
    </button>
  )}
        </div>
        </div>

      <button onClick={handleSubmit} className='w-full bg-[#2D6C56] text-white border-2 p-3 border-gray-300 border-b-4 my-5'>+ Add Vehicle Details </button>
      
    </div>
          
   </div>
  );
};

export default Add;






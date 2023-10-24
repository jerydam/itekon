'use client'
import { useState } from 'react';
import Sidebar from "@/components/sidebar"
import "/styles/global.css";

const Add = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [vehicleMeter, setVehicleMeter] = useState('');
  const [color, setColor] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [imagePrev, setImagePrev] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [license, setLicense] = useState('');


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageCh = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePrev(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and data upload here
    const formData = {
      vehicleName,
      vehicleMake,
      vehicleModel,
      identificationNumber,
      fuelType,
      color,
      imagePreview,
      imagePrev,
    };
    console.log(formData); // You can send this data to your server
  };

  return (
   
    <div className='flex'>
      <Sidebar/>
     <div className='ml-5'>
    <p className='font-sans mt-20 font-normal'>Add vehicle</p>
    <p className='font-sans my-5 text-[#6A6A6A] font-normal'>This is a form to add a new vehicle to your fleet</p>
    
    <div className='flex'>
          <form onSubmit={handleSubmit} className='mr-10'>
          <p className='font-sans font-normal mb-5'><span  className='border-2 p-2 rounded-full border-black'>1</span> Vehicle Registration Details</p>
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
              className="border border-[#2D6C56] rounded-sm px-2 py-1 w-[400px]"
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
              className="border border-[#2D6C56] rounded px-2 py-1 w-[400px]"
            />
          </div>

                   <div className="mb-4">
            <label htmlFor="vehicleModel" className="text-sm font-medium">Model</label><br/>
            <input
              type="text"
              id="vehicleModel"
              name="vehicleModel"
              value={vehicleName}
              onChange={(e) => setVehicleModel(e.target.value)}
              required
              className="border border-[#2D6C56] rounded px-2 py-1 w-[400px]"
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
              className="border border-[#2D6C56] rounded px-2 py-1 w-[400px]"
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
              className="border border-[#2D6C56] rounded px-2 py-1 w-[400px]"
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
          className="border border-[#2D6C56] rounded px-2 py-1 w-[400px]"
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
              className="border border-[#2D6C56] rounded px-2 py-1 w-[400px]"
            />
          </div>   
          </div>   
        </form>

        <form onSubmit={handleSubmit} >
        <p className='font-sans font-normal mb-5'><span  className='border-2 p-2 rounded-full border-black'>2</span> Operator/Driver’s Details</p>
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
              className="border border-[#2D6C56] rounded-sm px-2 py-1 w-[400px]"
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
              className="border border-[#2D6C56] rounded px-2 py-1 w-[400px]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="identificationNumber" className="text-sm font-medium">Phone Number</label><br/>
            <input
              type="number"
              id="number"
              name="number"
              value={identificationNumber}
              onChange={(e) => setNumber(e.target.value)}
              required
              className="border border-[#2D6C56] rounded px-2 py-1 w-[400px]"
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
          className="border border-[#2D6C56] rounded px-2 py-1 w-[400px]"
          />
        </div>
            
          </div>  
          <p className='font-sans font-normal my-5'><span  className='border-2 p-2 rounded-full border-black'>4</span> Operator/Driver’s Details</p>
          <div className='border-2 '>
            <p className='ml-5 mt-2'>Upload Image of Driver/Operator</p>
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-20 my-5 flex items-center justify-center overflow-hidden">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Vehicle Preview"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ) : (
          <label htmlFor="vehicleImage" className="text-gray-500 cursor-pointer hover:text-gray-600">
            <img
              src="/path-to-your-image-icon.png" // Replace with your image icon URL
              alt=""
              className="h-12 w-12"
            />
            <span className="block text-sm mt-1"></span>
            <input
              type="file"
              id="driverImage"
              name="driverImage"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="hidden"
            />
          </label>
        )}
      </div>
      </div>
 
        </form>

        </div>
        <p className='font-sans font-normal my-5'><span  className='border-2 p-2 rounded-full border-black'>3</span> Upload Car Image</p>
          <div className='border-2 mb-5'>
            <p className='ml-5'>Upload Car Image</p>
          <div className="w-32 h-32 bg-gray-200 rounded-md mx-20 my-5 flex items-center justify-center overflow-hidden">
        {imagePrev ? (
          <img
            src={imagePrev}
            alt="Vehicle Prev"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ) : (
          <label htmlFor="vehicleImage" className="text-gray-500 cursor-pointer hover:text-gray-600">
            <img
              src="/path-to-your-image-icon.png" // Replace with your image icon URL
              alt=""
              className="h-12 w-12"
            />
            <span className="block text-sm mt-1"></span>
            <input
              type="file"
              id="vehicleImage"
              name="vehicleImage"
              accept="image/*"
              onChange={handleImageCh}
              required
              className="hidden"
            />
          </label>
        )}
      </div>
      </div>
    </div>
   </div>
  );
};

export default Add;






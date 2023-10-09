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
    };
    console.log(formData); // You can send this data to your server
  };

  return (
    <div className='flex'>
    <Sidebar />
    <div className=" h-full border-red-600 my-4"></div>
    <div className='ml-5'>
    <p className='font-sans mt-20 font-normal'>Add vehicle</p>
    <p className='font-sans my-5 text-[#6A6A6A] font-normal'>This is a form to add a new vehicle to your fleet</p>
    
    <div className='flex'>
          <form onSubmit={handleSubmit} className='mr-10'>
          <p className='font-sans font-normal mb-5'><span  className='border-2 p-2 circle border-black'>1</span> Vehicle Registration Details</p>
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
            <label htmlFor="identificationNumber" className="text-sm font-medium">identification Number</label><br/>
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
            <label htmlFor="vehicleMake" className="text-sm font-medium">Make:</label><br/>
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
        <p className='font-sans font-normal mb-5'><span  className='border-2 p-2 circle border-black'>2</span> Operator/Driver’s Details</p>
            <div className='border-4 rounded-md p-5'>
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
          id="mail"
          name="email"
          value={setEmail}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-[#2D6C56] rounded px-2 py-1 w-[400px]"
          />
        </div>
            
          </div>   
        </form>

        </div>
    </div>
    </div>
  
  );
};

export default Add;

import { useState } from 'react';

const EditDetails = ({ userDetails, onEdit }) => {
  const [email, setEmail] = useState(/*{userDetails.email}*/);
  const [companyName, setCompanyName] = useState(/*userDetails.fleetCompanyName*/);
  const [regNumber, setRegNumber] = useState(/*userDetails.companyRegNumber*/);
  const [address, setAddress] = useState(/*userDetails.companyAddress*/);

  const handleSave = () => {
    const updatedDetails = {
      email,
      fleetCompanyName: companyName,
      companyRegNumber: regNumber,
      companyAddress: address,
    };
    onEdit(updatedDetails);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <div className="mb-4">
          <label>Add Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label>ompany Registration Number</label>
          <input
            type="text"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label>Company Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-[#2D6C56]"
          />
        </div>
        <button
          onClick={handleSave}
          className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded"
          >
          Save Details
        </button>
      </div>
    </div>
  );
};

export default EditDetails;

import { useState } from 'react';
import CompleteEmail from './email';

const CompleteImg = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [value, setValue] = useState('');

  const handleAdd = (input) => {
    // Add your logic for handling the input here
    console.log('Adding:', input);
    // You can add your custom logic here for adding the value to your list or state
    setShowPopup(false); // Hide the popup after adding the value
  };
  const handleCancel = () => {
    setShowPopup(false); // Hide the popup when canceled
  };
  const [userImage, setUserImage] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleUserImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserImage(URL.createObjectURL(file));
    }
  };

  const handleCompanyLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompanyLogo(URL.createObjectURL(file));
    }
  };

  const clearUserImage = () => {
    setUserImage(null);
  };

  const clearCompanyLogo = () => {
    setCompanyLogo(null);
  };
   return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
      <div className="p-8">
      <p className="text-2xl font-bold mb-4">Complete Your Profile</p>
      <p>2. Upload Your Profile Pictures and Company Logo</p>
      <div className="items-center  space-x-8 my-4">
        
        <p>Upload Company’s Logo</p>
        <div className="relative w-40 my-3 h-40 rounded-full border-dotted border-2 border-[#6A6A6A] overflow-hidden">
          <label htmlFor="companyLogo" className="cursor-pointer block">
            {companyLogo ? (
              <img
                src={companyLogo}
                alt="Company Logo"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-96 h-96  flex items-center justify-center">
                <span className="text-gray-400">Company Logo</span>
              </div>
            )}
            <input
              type="file"
              id="companyLogo"
              name="companyLogo"
              className="hidden"
              onChange={handleCompanyLogoChange}
            />
          </label>
          {companyLogo && (
            <button
              className="absolute top-5 right-5 p-1 bg-white rounded-full"
              onClick={clearCompanyLogo}
            >
              X
            </button>
          )}
        </div>
        <p>Upload Profile Picture</p>
        <div className="relative m-3 w-40 h-40 rounded border-dotted border-2 border-[#6A6A6A] overflow-hidden">
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
      <div className="flex items-center justify-center">
            <button
              onClick={() => setShowPopup(true)}
              className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Complete Profile
            </button>
          </div>
          {showPopup && <CompleteEmail onAdd={handleAdd} onCancel={handleCancel} />}
    </div>
      </div>
    </div>
  );
};
export default CompleteImg;
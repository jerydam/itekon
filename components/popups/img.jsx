import { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompleteImg = ({onCancel, currentPage, handleNext  }) => {
  const [userImage, setUserImage] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleUpload = async () => {
    try {
      const userToken = localStorage.getItem('authToken');
      const formData = new FormData();
      if (userImage) {
        formData.append('userImage', userImage);
      }
      if (companyLogo) {
        formData.append('companyLogo', companyLogo);
      }
  
      const response = await fetch('https://itekton.onrender.com/fleets/fleets/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log('Image uploaded successfully');
        toast.success=('image upload successfully')
        await handleNext(); // Call handleNext if the upload is successful
      } else {
        console.error('Failed to upload image');
        // Handle failure as needed
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error=('Error uploading image');
    }
  };
  
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
  const handleCancel = () => {
    // Implement cancel logic here
    console.log('Cancelled');
  };

  const clearUserImage = () => {
    setUserImage(null);
  };

  const clearCompanyLogo = () => {
    setCompanyLogo(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-96">
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-2xl font-bold mb-4">Complete Your Profile</p>
            <button onClick={onCancel}>
              <XIcon className="h-5 w-5 text-[#2D6C56]" />
            </button>
          </div>
          <p>2. Upload Your Profile Pictures and Company Logo</p>
          <div className="space-y-6 my-4">
            <div className="flex flex-col items-center">
              <p>Upload Company’s Logo</p>
              <div className="w-40 h-40 relative rounded-full border-dotted border-2 border-[#6A6A6A] overflow-hidden">
                <label htmlFor="companyLogo" className="cursor-pointer block">
                  {companyLogo ? (
                    <img
                      src={companyLogo}
                      alt="Company Logo"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
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
                    className="absolute top-3 right-3 p-1 bg-white rounded-full"
                    onClick={clearCompanyLogo}
                  >
                    X
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p>Upload Profile Picture</p>
              <div className="w-40 h-40 relative rounded border-dotted border-2 border-[#6A6A6A] overflow-hidden">
                <label htmlFor="userImage" className="cursor-pointer block">
                  {userImage ? (
                    <img
                      src={userImage}
                      alt="User"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
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
          </div>
          <div className="flex justify-center mt-8">
          <button
  onClick={async () => {
    try {
      const response = await handleUpload();
      if (response && response.ok) {
        await handleNext();
      } else {
        // Handle the case where response is not OK
        console.error('Failed to upload image or response is not OK');
        toast.error('Failed to upload image or response is not OK');
      }
    } catch (error) {
      // Handle errors that occur during the handleUpload function
      console.error('Error uploading image:', error);
    }
  }}
  className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>
  Complete Profile
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
    </div>
  );
};

export default CompleteImg;

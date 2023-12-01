import { useState } from 'react';
import { BsX } from 'react-icons/bs';

const Remove = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <p className="block mb-2 text-lg font-medium">Remove Driver</p>
          <button onClick={onCancel}>
            <BsX className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p className='mb-2 font-medium'>Remove driver from your fleet</p>
        <p className='mb-2 font-medium'>You are about to remove id.name from your driver list</p>
       
        <div className="flex justify-center">
          <button
            onClick={handleAdd}
            className="border-b-4 border-2 border-[#2D6C56] mt-5 text-[#2D6C56] font-bold py-2 px-4 rounded"
          >
           Remove Driver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Remove;

import { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

const PopCri = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    onAdd(inputValue);
    setInputValue('');
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <p className="block mb-2 text-lg font-medium">Critical  Faults</p>
          <button onClick={handleCancel}>
            <XIcon className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p>Note critical faults for each vehicle </p>
        <p className="mt-5 mb-3">Add critical Fault</p>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
        />
        <div className="flex justify-center">
          <button
            onClick={handleAdd}
            className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded"
          >
            Add Fault
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopCri;

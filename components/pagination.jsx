import React, { useState } from 'react';
import CompleteName from '@/components/popups/name';
import CompleteEmail from '@/components/popups/email';
import CompleteImg from '@/components/popups/img';
import Added from '@/components/popups/done';
import OTP from '@/components/popups/otp';

const Pagination = ({onCancel}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleCancel = () => {
    onCancel(); // Call the onCancel function passed as a prop
  };

  const renderPopup = (pageNumber) => {
    switch (pageNumber) {
      case 1:
        return <CompleteName handleNext={handleNext} onCancel={handleCancel} currentPage={currentPage} />;
      case 2:
        return <CompleteImg handleNext={handleNext} onCancel={handleCancel} currentPage={currentPage}  />;
      case 3:
        return <CompleteEmail handleNext={handleNext} onCancel={handleCancel} currentPage={currentPage} />;
      case 4:
        return <OTP onCancel={handleCancel} currentPage={currentPage}  handleNext={handleNext} />
        ;
      case 5:
        return <Added handleNext={handleNext} onCancel={handleCancel} currentPage={currentPage}  />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderPopup(currentPage)}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {currentPage < 5 && (
          <button onClick={handleNext} style={{ marginLeft: '10px' }}>
            {"Next-->"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;

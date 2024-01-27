import React, { useEffect } from 'react';

const LogoutTimer = ({ logout }) => {
  useEffect(() => {
    let timer;
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(logout, 5 * 60 * 1000); // 5 minutes in milliseconds
    };

    const handleUserActivity = () => {
      resetTimer();
    };

    // Attach event listeners to track user activity
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);

    // Initial start of the timer
    resetTimer();

    // Clean up event listeners when the component unmounts or when dependencies change
    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      clearTimeout(timer);
    };
  }, [logout]); // Re-run effect if the logout function changes

  return null; // This component doesn't render anything visible
};

export default LogoutTimer;

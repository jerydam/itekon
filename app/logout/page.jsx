"use client"
import React, { useState } from 'react';
import LogoutTimer from './timer';
const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming the user is initially logged in

  const logout = () => {
    localStorage.clear('authToken');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn && <LogoutTimer logout={logout} />}
      {/* Other components */}
    </div>
  );
};

export default Logout;

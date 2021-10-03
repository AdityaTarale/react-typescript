import React, { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // type inference automatically

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button>Login</button>
      <button>Logout</button>
      <div>User is {isLoggedIn ? "Logged in " : "Logged out"}</div>
    </div>
  );
};

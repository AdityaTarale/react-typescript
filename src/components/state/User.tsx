import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // type assertion , allow us to access name and email without optional chaining

  const handleLogin = () => {
    setUser({
      name: "John Doe",
      email: "johndoe@example.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};

/**
 * !Note
 * when you know the value will be set soon after component mount, you can use type assertion
 * 
 * ? Here we are lies to typescript the empty object {} is of type AuthUser
 * when we know value will be set soon after component mount, and always have a value after we can use type assertion.
 * if not then use optional value for useState hoook i.e useState<AuthUser | null>
 *
 */

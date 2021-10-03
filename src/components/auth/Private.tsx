import React from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>; // Component Props
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Aditya" />;
  } else {
    return <Login />;
  }
};

/**
 * If you have to pass component as props use React.ComponentType,
 * and If that component it self accept props use React.Component<PropTypes> in angle brackets
 */
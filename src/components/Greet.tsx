import React from "react";

type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name} ! You have 12 unread messages</h2>
    </div>
  );
};

/**
 * Note
 * 
 * Use typescript when building application ,
 * interfaces when building libraries
 */

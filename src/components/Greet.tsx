import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number; // Optional property
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `$Welcome ${props.name} ! You have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

/**
 * Note
 *
 * Use typescript when building application ,
 * interfaces when building libraries
 */

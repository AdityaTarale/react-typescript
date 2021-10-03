import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; // Event type for void
};

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 2)}>Click</button>
    </div>
  );
};

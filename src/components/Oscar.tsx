import React from "react";

type OscarProps = {
  children: React.ReactNode; // ReactNode as a children prop from @types/react package
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

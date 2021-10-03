import React from "react";
import { PersonProps } from "./Person.types"; // importing types from other files

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};

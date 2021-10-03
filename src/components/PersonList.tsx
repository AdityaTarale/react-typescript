import React from "react";
import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <div key={name.firstName}>
          {name.firstName} {name.lastName}
        </div>
      ))}
    </div>
  );
};

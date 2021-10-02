import React from "react";

type PersonListProps = {
  names: { firstName: string; lastName: string }[];
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

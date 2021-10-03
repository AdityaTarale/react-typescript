import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number }>({
  // restriction using generics
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};

/**
 * !Note
 *
 * <T extends { id: number }>
 * i.e T is a generic type that has constraints object that has a property id of type number
 * and object should have a property id of type number
 * but it can have other properties as well
 *
 */

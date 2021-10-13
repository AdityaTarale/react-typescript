import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = "div">({ // default element that is div tag
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};

// Why we use omit here?
// explaination
// TextOwnProps<E> type has a key as children,
// and React.ComponentProps<E> type has a key as children also, so to avoid for duplicate keys/name collision, we use omit

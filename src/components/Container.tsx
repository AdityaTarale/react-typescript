import React from "react";

type ContainerProps = {
  styles: React.CSSProperties; // CSS Styles types
};

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text content goes here</div>;
};

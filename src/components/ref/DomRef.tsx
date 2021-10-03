import React, { useEffect, useRef } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); // ref input type

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

/**
 * !Note
 * If sure ref is never null when access it ,you can add ! to the end of the null to make it non-nullable.
 * It is called non-null assertion.
 */

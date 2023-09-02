import React from "react";

const Input = ({children, ...attributes}) => {
  return (
    <p>
      <label {...attributes}>{children}</label>
      <input type="number" {...attributes} />
    </p>
  )
};

export default Input;

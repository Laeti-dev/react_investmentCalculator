import React from "react";


const Button = ({children, ...attributes}) => {
  return (
    <button
      type="button"
      className=""
      {...attributes}
    >
    {children}
    </button>
  )
};

export default Button;

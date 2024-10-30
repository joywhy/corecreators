import React from 'react';

const Button = ({ handleClick, children, ...props }) => {
  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

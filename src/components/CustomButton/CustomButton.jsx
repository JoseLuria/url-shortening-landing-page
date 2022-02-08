import React from 'react';
import "./CustomButton.style.scss"

const CustomButton = ({action, copy, children, rounded, navbar, size, type}) => {
  return ( 
    <button 
      className = {
        `custom-button 
        ${rounded && "button-rounded"}
        ${navbar && "button-navbar"}
        ${size}
        ${copy && "copy-button"}
        `}
      type={type}
      onClick={action}
    >
      {children}
    </button>
  )
};

export default CustomButton;

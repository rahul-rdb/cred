import React from "react";
import './button.css';

function Button({ buttonText, onClick, customClass, prefix }) {
  return (
      <button
        onClick={onClick}
        className={`flex absolute-center button-wrapper ${customClass}`}
      >
        {prefix}
        {buttonText}
      </button>
  );
}

export default Button;
